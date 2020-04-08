
import * as d3 from "d3";

export default class PieSecond{
    constructor(wrapper, w, h) {

    }

    __drawOuterPie() {

    }

    __updateInnerArc() {
        
    }
}

export default function (wrapper, data) {
    const width = 540;
    const height = 540;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(wrapper)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(["#66c2a5", "#fc8d62", "#8da0cb",
        "#e78ac3", "#a6d854", "#ffd92f"]);

    const pieData = d3.pie()
        .value(d => d.second)(data);

    const arc = d3.arc()
        .innerRadius(radius/2)
        .outerRadius(radius);


    function arcTween(a) {
        const i = d3.interpolate(this._current, a);
        this._current = i(1);
        return (t) => arc(i(t));
    }

    function update() {
        // Join new data
        const path = svg.selectAll("path")
            .data(pieData);

        // Update existing arcs
        path.transition().duration(200).attrTween("d", arcTween);

        // Enter new arcs
        path.join("path")
            .attr("fill", (d, i) => color(i))
            .attr("d", arc)
            .each(function (d) { this._current = d; });
    }

    update();


}