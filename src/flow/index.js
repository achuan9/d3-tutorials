import * as d3 from "d3";
import { SIGNAL_GROUPS, THEME_COLOR } from "./config";
import { calcRotate, calcTranslate } from "./calc";
import { drawStraight, drawReferenceLine } from "./draw";


// svg 边长
const aSvg = 120;

// 中心空白区域边长
const aSpace = aSvg / 2

// 标志的宽度
const arrowWidth = 10

const svg = d3.create('svg')
    .attr('width', aSvg)
    .attr('height', aSvg)
    .style('background', 'steelblue')


drawReferenceLine(svg, d3.path(), aSvg, aSpace)


for (const key in SIGNAL_GROUPS) {
    const curList = SIGNAL_GROUPS[key]
    const g = svg.append('g')
    g.selectAll('path').data(curList)
        .join('path')
        .attr('fill', THEME_COLOR)
        .attr('transform', (d, i) => {
            const t = calcTranslate(aSvg, arrowWidth, d.direction, i, 2)
            const r = calcRotate(d.direction)
            return `translate(${t}) rotate(${r}, 0, 0)`
        })
        .attr("d", d => drawStraight(d3.path(), 0, 0, 8))
}


export default svg.node()




