import * as d3 from "d3";
import { SIGNAL_GROUPS, THEME_COLOR } from "./config";
import { drawStraight, drawTriangle, drawReferenceLine } from "./draw";
import Transform from './transform'

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


for (const direction in SIGNAL_GROUPS) {
    const curList = SIGNAL_GROUPS[direction]
    const tsf = new Transform(aSvg, direction, 2)
    const r = tsf.getRotate()
    const g = svg.append('g')
    g.selectAll('path').data(curList)
        .join('path')
        .attr('fill', THEME_COLOR)
        .attr('transform', (d, i) => {
            const t2 = tsf.getTranslate(arrowWidth)
            return `translate(${t2}) rotate(${r}, 0, 0)`
        })
        .attr("d", d => {
            return drawStraight(d3.path(), 0, 0, 8)
            // return drawTriangle(d3.path(), 0, 0, 10, 5, 2)
        })
}


export default svg.node()




