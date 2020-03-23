import * as d3 from "d3";
import { FLOW_PATH, THEME_COLOR } from "./config";
import { SIGNAL_GROUPS } from "./data";
import Transform from './transform'

// svg 边长
const aSvg = 110;

const svg = d3.create('svg')
    .attr('width', aSvg)
    .attr('height', aSvg)
    .style('background', 'steelblue')

// drawReferenceLine(svg, d3.path(), aSvg, aSvg / 2)
for (const direction in SIGNAL_GROUPS) {
    const curList = SIGNAL_GROUPS[direction]
    // g 的transform定位初始位置
    const tsf = new Transform(aSvg, direction, 15)
    const g = svg.append('g')
        .attr('transform', `translate(${tsf.startCoordinate}) rotate(${tsf.getRotate()}) scale(0.15, 0.06)`)
    // path 的transform: translate 定位偏移位置
    g.selectAll('path').data(curList)
        .join('path')
        .attr('fill', THEME_COLOR)
        .attr('transform', d => `translate(${tsf.getOffset(d.flowDirection)}, 0)`)
        .attr("d", d => FLOW_PATH[d.flowDirection])

    const transform = d3.zoomTransform(g.node());
    transform.translate(100, 100) 
    console.log(transform);


}

export default svg.node()




