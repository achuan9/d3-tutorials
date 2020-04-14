
import * as d3 from "d3";
export default class PieSecond {
    #COLOR = d3.scaleOrdinal(["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f"]);
    #outer = null;
    #inner = null;
    #pieData = [];
    #timer = null;
    #defaultOpts = {
        wrapper: '#pieSecond',
        data: [],
        labelKey: 'signal',
        valueKey: 'second',
        outerRadius: 100,
        innerRadius: 50
    }
    #opts = {};
    constructor(opts) {
        this.#opts = { ...this.#defaultOpts, ...opts };
        const { wrapper, outerRadius, data } = this.#opts;
        const sideLength = outerRadius * 2;
        const svg = d3.select(wrapper)
            .append("svg")
            .attr("width", sideLength)
            .attr("height", sideLength);

        this.#outer = svg.append('g').attr('class', 'outer').attr("transform", `translate(${outerRadius}, ${outerRadius})`);
        this.#inner = svg.append('g').attr('class', 'inner').attr("transform", `translate(${outerRadius}, ${outerRadius})`);
        this.#pieData = d3.pie().value(d => d.second)(data)
        this.__drawOuterPie();

    }


    __arcTween(a) {
        const i = d3.interpolate(this._current, a);
        this._current = i(1);
        return (t) => arc(i(t));
    }

    __drawOuterPie() {
        const { labelKey, innerRadius, outerRadius } = this.#opts;
        const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
        const g = this.#outer.selectAll('g')
            .data(this.#pieData)
            .join('g')
        g.append('path')
            .attr("fill", (d, i) => this.#COLOR(i))
            .attr("d", arc)

        g.append('text')
            .attr("transform", (d, i) => `translate(${arc.centroid(d)})`)
            .style("text-anchor", "middle")
            .text(d => d.data[labelKey])
    }

    start(curPieData, curSecond) {
        this.#inner.append('path')
        this.#timer = d3.interval(_ => {
            const { labelKey, valueKey, innerRadius } = this.#opts;
            let curPie = this.#pieData.find(item => item.data[labelKey] === curPieData[labelKey]);
            let curIndex = curPie.index;
            
            // if (curSecond >= curPie.data[valueKey]) {
            //     curIndex = curIndex < this.#pieData.length - 1 ? curIndex++ : 0
            //     curPie = this.#pieData.find(item => item.index === curIndex)
            //     curPieData = curPie.data;
            // }
            const { startAngle, endAngle } = curPie;
            const scale = d3.scaleLinear().domain([0, curPie.data[valueKey]]).range([startAngle, endAngle]);
            const arc = d3.arc().innerRadius(0).outerRadius(innerRadius).startAngle(startAngle).endAngle(scale(curSecond));
            this.#inner.select('path')
                .attr("fill", _ => this.#COLOR(curIndex))
                .attr("d", arc)
            curSecond++
        }, 1000)
    }

    stop() {
        this.#timer.stop()
    }

}
