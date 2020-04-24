
import * as d3 from "d3";

/** @classdesc 饼图时间计数器 */

export default class PieTimer {
    #COLOR = d3.scaleOrdinal(["#66c2a5", "#fc8d62", "#8da0cb"]);
    #timerColor = "#e78ac3" // 秒的弧形颜色
    #outer = null;
    #inner = null;
    #pieData = [];
    #timer = null;
    #opts = {
        wrapper: '#pieTimerWrapper',
        data: [],
        labelKey: 'signal',
        valueKey: 'second',
        outerRadius: 100,
        innerRadius: 50,
        interval: 1000,
        maxValue: 60
    };
    /**
     * @param {Object} opts new 的时候参数
     * @param {Object[]} opts.data 一个对象组成的数组，整个图形依赖的数据
     * @param {string} [opts.wrapper=#pieTimerWrapper] 容器的css选择器
     * @param {string} [opts.labelKey=signal] opts.data[] 中作为label属性的key
     * @param {string} [opts.valueKey=second] opts.data[] 中作为value属性的key
     * @param {number} [opts.outerRadius=100] 外圆半径
     * @param {number} [opts.innerRadius=50] 内圆半径
     * @param {number} [opts.interval=1000] 计时器间隔时间（单位：毫秒）
     * @param {number} [opts.maxValue=60] 计时最大值，当到这个值的时候就重置为1
     * 
     * 
     */
    constructor(opts) {
        this.#opts = { ...this.#opts, ...opts };
        const { wrapper, outerRadius, data, valueKey } = this.#opts;
        const sideLength = outerRadius * 2;
        const svg = d3.select(wrapper)
            .append("svg")
            .attr("width", sideLength)
            .attr("height", sideLength);

        this.#outer = svg.append('g').attr('class', 'outer').attr("transform", `translate(${outerRadius}, ${outerRadius})`);
        this.#inner = svg.append('g').attr('class', 'inner').attr("transform", `translate(${outerRadius}, ${outerRadius})`);
        this.#pieData = d3.pie().value(d => d[valueKey])(data)
        this.__drawOuterPie();
        this.__drawTimer();
    }

    /**
    * 开始计时
    * 
    * @param {Object} dataItem new 的时候传入参数opts.data中的项
    * @param {number} curTimer 当前运行的秒数，一般为 1-60
    * 
    */
    start(dataItem, curTimer) {
        const { labelKey, valueKey, innerRadius, interval, maxValue } = this.#opts;
        const intervalCallback = _ => {
            if (curTimer > maxValue) curTimer = 1
            let curPie = this.#pieData.find(item => item.data[labelKey] === dataItem[labelKey]);
            const { startAngle, endAngle, data } = curPie;
            const scale = d3.scaleLinear().domain([0, data[valueKey]]).range([startAngle, endAngle]);
            const arc = d3.arc().innerRadius(0).outerRadius(innerRadius).startAngle(startAngle).endAngle(scale(curTimer));
            this.#inner.select('path')
                .attr("d", arc)
            curTimer++
        }

        this.#timer = d3.interval(intervalCallback, interval)
    }

    /**
     * 停止计时
     */
    stop() {
        this.#timer.stop()
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
    __drawTimer() {
        this.#inner.append('path').attr('fill', this.#timerColor)
    }

}
