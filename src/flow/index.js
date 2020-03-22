import * as d3 from "d3";
import { SIGNAL_GROUPS, DIRECTION, ROTATE, THEME_COLOR } from "./config";
import { drawStraight, drawReferenceLine } from "./draw";

// svg 边长
const aSvg = 200;
const aSvgHalf = aSvg / 2

// 中心区域边长
const aSpace = aSvgHalf

// 显示标志区域边长
const aShow = aSpace / 2

// 标志的宽度
const arrowWidth = 10
const arrowHeight = aShow

// 显示标志区域各方向的起始坐标
const ARROW_COORDINATE = {
    [DIRECTION.east]: [aSvg, aSvgHalf],
    [DIRECTION.west]: [0, aSvgHalf],
    [DIRECTION.south]: [],
    [DIRECTION.north]: [aSvgHalf, 0],
    [DIRECTION.eastNorth]: [],
    [DIRECTION.westNorth]: [],
    [DIRECTION.eastSouth]: [],
    [DIRECTION.westSouth]: [],

}

const svg = d3.create('svg')
    .attr('width', aSvg)
    .attr('height', aSvg)
    .style('background', 'steelblue')

svg.append('path')
    .attr('fill', 'none')
    .attr('stroke', '#fff')
    .attr('stroke-width', "2")
    .attr('d', drawReferenceLine(d3.path(), aSvg, aSvg, aSpace))


const g = svg.selectAll('g')
    .data(SIGNAL_GROUPS)
    .join('g')
// .attr('transform', d => `translate(${}) rotate(${ROTATE[d.direction]})`)


g.append('path')
    .attr('fill', THEME_COLOR)
    .attr("transform", (d, i) => `translate(0, ${(arrowWidth + 4) * -i})`)
    .attr("d", d => drawStraight(...ARROW_COORDINATE[d.direction], arrowWidth, arrowHeight, d.direction))

// g.append('path')
// .attr('d', 'M461.536 447.872H376.192L512.896 0l133.12 447.872h-89.248V1024H461.536z')
export default svg.node()




