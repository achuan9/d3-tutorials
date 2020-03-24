import * as d3 from "d3";
import { FLOW, FLOW_PATH, THEME } from "./config";
import Transform from './Transform'

export default class Stage {
    constructor(data, a) {
        this.data = this._formatData(data)
        this.a = a
        this.svg = null
        this._init()
        return this.svg;
    }

    _init() {

        this._draw()

    }

    _draw() {
        const { data: { signalGroups }, a } = this;
        this.svg = d3.create('svg')
            .attr('width', a)
            .attr('height', a)
            .style('background', THEME.flowBg)
        for (const direction in signalGroups) {
            const arrowData = [], sidewalkData = [];
            const tsf = new Transform(a, direction, 8)
            for (const item of signalGroups[direction]) {
                if (item.flowDirection < FLOW.cross) {
                    arrowData.push(item)
                } else {
                    sidewalkData.push(item)
                }
            }
            arrowData.length && this._drawArrow(arrowData, tsf)
            sidewalkData.length && this._drawSidewalk(sidewalkData, tsf)
        }

    }
    /**
     * 画过街标识
     * 
     * @param {Array} data 过街的数据。也就是 flowDirection 为 16 17 18的
     * @param {Transform} tsf Transform 类的实例
     */
    _drawSidewalk(data, tsf) {
        const g = this.svg.append('g')
            .attr('transform', `${tsf.getTransform()}`)
        const half = this.a / 4
        const xMap = {
            [FLOW.cross]: [-half, half],
            [FLOW.crossOnce]: [-half, 0],
            [FLOW.crossTwice]: [0, half]
        }
        g.selectAll('line').data(data)
            .join('line')
            .attr('stroke', THEME.flowColor)
            .attr('stroke-width', '4')
            .attr('stroke-dasharray', '3')
            .attr("x1", d => xMap[d.flowDirection][0])
            .attr("y1", half)
            .attr("x2", d => xMap[d.flowDirection][1])
            .attr("y2", half)
    }
     /**
     * 画箭头标识
     * 
     * @param {Array} data 非过街的数据。也就是 flowDirection < 16 的
     * @param {Transform} tsf Transform 类的实例
     */

    _drawArrow(data, tsf) {
        console.log(data, '_drawArrow');
        const g = this.svg.append('g')
            .attr('transform', `${tsf.getTransform()} scale(0.15, 0.06)`)

        g.selectAll('path').data(data)
            .join('path')
            .attr('fill', THEME.flowColor)
            .attr('transform', d => `translate(${tsf.getOffsetX(d.flowDirection)}, 0)`)
            .attr("d", d => FLOW_PATH[d.flowDirection])
    }

    /**
     * 格式化阶段数据
     * 将阶段的灯组数据从数组转换为对象，并且过滤掉本类无用信息
     * 
     * @param {Object} data 单个阶段的数据
     * @returns {Object} 格式化后的阶段数据
     */
    _formatData(data) {
        const signalGroups = {}
        for (const key in data.signalGroups) {
            const { id, index, number, type, direction, flowDirection } = data.signalGroups[key];
            if (!signalGroups[direction]) {
                signalGroups[direction] = []
            }
            signalGroups[direction].push({ id, index, number, type, direction, flowDirection})
            // signalGroups[direction][0] = { id, index, number, type, direction: 4, flowDirection: flowDirection + 13 }
        }
        return {
            id: data.id,
            number: data.number,
            signalGroups
        };
    }
}





