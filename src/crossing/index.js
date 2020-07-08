import * as d3 from "d3";
import { LANE_ARROW } from "./arrow-path";
import DATA from "./data";

const crossData = DATA.cross.roads.slice(0, 1)
const WIDTH = 500, HEIGHT = 500, BRANCH_HEIGHT = 240;
const LANE_LINE_WIDTH = 3, LANE_LINE_OFFSET = LANE_LINE_WIDTH / 2;
const LANE_WIDTH_SCALE = 8;
const LANE_ARROW_START_Y = BRANCH_HEIGHT * 0.6, LANE_MARKER_START_Y = BRANCH_HEIGHT * 0.56;
const CENTER = {x: WIDTH / 2, y: HEIGHT / 2};


class Cross {
    constructor() {
        this.svg = null;
        this.wrapper = null;
        this.__init();
    }

    __init() {
        const svg = d3.create('svg')
            .attr('width', WIDTH)
            .attr('height', HEIGHT)
            .attr('style', 'border: 1px solid yellow;')

        const wrapper = svg.append('g')
            .attr('class', 'wrapper')
            .attr('transform', `translate(${CENTER.x}, ${CENTER.y}) scale(1, -1)`);

        this.svg = svg;
        this.wrapper = wrapper;

        this.drawBranchInfo = []

        for (const b of crossData) {
            this.__drawBranch(b)
        }
        this.__bindZoom();
        // this._test();

    }
    _test() {
        this.wrapper.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 100)
        .attr('height', 100)
        .attr('fill', "yellow")
        .attr('transform', "rotate(30, 0, 100)")
    }
    __bindZoom() {
        this.svg.call(d3.zoom().on("zoom", _ => {
            this.wrapper.attr("transform", d3.event.transform);
        }))
    }

    __drawLaneTypeMarker(type) {

        function bus(wrapper, x, y) {

        }
        function tide(wrapper, x, y) {

        }
        function bus(wrapper, x, y) {

        }


    }

    __drawBranch(branchData) {
        console.log(branchData,'----------branch--------------');
        const wrapper = this.wrapper;
        const entranceLanesData = branchData.entrance.lanes.reverse();
        const entranceLanesWidth = entranceLanesData.reduce((acc, cur) => acc + cur.width, 0) * LANE_WIDTH_SCALE;
        const exitLanesData = branchData.exit.lanes;
        const exitLanesWidth = exitLanesData.reduce((acc, cur) => acc + cur.width, 0) * LANE_WIDTH_SCALE;
        const branchWidth = entranceLanesWidth + exitLanesWidth + branchData.medianWidth * LANE_WIDTH_SCALE;
        let startX = 0;

        this.drawBranchInfo.push({startX, branchWidth})

        const branchWrapper = wrapper.append('g')
            .attr('class', 'branch-wrapper')
            .attr('transform', `translate(${startX}, ${0}) rotate(${0}, ${0}, ${0})`);

        
        const entranceLanesWrapper = branchWrapper.append('g')
            .attr('class', 'entrance-lanes')
        
        const exitLanesWrapper = branchWrapper.append('g')
            .attr('class', 'exit-lanes')
            .attr('transform', `translate(${entranceLanesWidth}, 0)`);

        const drawLaneMethodMap = {
            1: lineSolid,
            2: (...params) => {
                lineSolid(...params);
                markerBus(...params);
            },
            3: lineTide,
            4: lineReverseVariable,
            5: lineVariable,
            6: lineSolid,
            7: (...params) => {
                lineSolid(...params);
                markerNonMotorVehicle(...params);
            },
        }

        entranceLanesData.map((item, index) => {
            const laneWidth = item.width * LANE_WIDTH_SCALE;
            const laneItemWrapper = entranceLanesWrapper.append('g')
                .attr('class', 'lane-item')
                .attr('transform', `translate(${index * laneWidth}, 0)`);

            // 画底图
            laneItemWrapper.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', laneWidth)
                .attr('height', BRANCH_HEIGHT)
                .attr('fill', '#527c88')
            // 画线和标志
            if (index === 0) {
                lineSolid(laneItemWrapper);
            }
            drawLaneMethodMap[item.type](laneItemWrapper, laneWidth);
            drawLaneArrow(laneItemWrapper, item.direction, laneWidth);
        })

        drawMedian(branchWrapper, entranceLanesWidth)

        exitLanesData.map((item, index) => {
            const laneWidth = item.width * LANE_WIDTH_SCALE;
            const laneItemWrapper = exitLanesWrapper.append('g')
                .attr('class', 'lane-item')
                .attr('transform', `translate(${index * laneWidth}, 0)`);

            // 画底图
            laneItemWrapper.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', laneWidth)
                .attr('height', BRANCH_HEIGHT)
                .attr('fill', '#527c88')
            // 画线和标志
            if (index === 0) {
                // lineSolid(laneItemWrapper);

            }
            // drawLaneMethodMap[item.type](laneItemWrapper, laneWidth);
            drawLaneArrow(laneItemWrapper, item.direction, laneWidth, true);
        })

        function drawLaneArrow(wrapper, flowDirection, laneWidth, isExit) {
            // 画箭头
            wrapper.append('path')
                .attr('d', LANE_ARROW[flowDirection])
                .attr("fill", "white")
                .attr("stroke", "white")
                .attr("stroke-width", 2)
                .attr("transform", `translate(${laneWidth / 2}, ${LANE_ARROW_START_Y}) scale(0.14) rotate(${isExit ? 180 : 0})`)
        }

        // 公交专用
        function markerBus(wrapper, laneWidth) {
            wrapper.append("text")
                .text("公交专用")
                .attr('transform', `translate(${laneWidth / 2}, ${LANE_MARKER_START_Y}) rotate(${180})`)
                .attr('textLength', "80")
                .style('font-size', '14px')
                .style('font-weight', 'bold')
                .style('fill', 'white')
                .style('writing-mode', 'vertical-rl')
                .style('font-size', '14px')
        }

        // 潮汐车道
        function lineTide(wrapper, laneWidth) {
            wrapper.append("line")
                .attr("x1", LANE_LINE_OFFSET)
                .attr("y1", 0)
                .attr("x2", LANE_LINE_OFFSET)
                .attr("y2", BRANCH_HEIGHT)
                .attr("fill", "#fbad10")
                .attr("stroke", " #fbad10")
                .attr("stroke-width", 3)
                .attr("stroke-dasharray", "10 3")

            wrapper.append("line")
                .attr("x1", laneWidth - LANE_LINE_OFFSET)
                .attr("y1", 0)
                .attr("x2", laneWidth - LANE_LINE_OFFSET)
                .attr("y2", BRANCH_HEIGHT)
                .attr("fill", "#fbad10")
                .attr("stroke", " #fbad10")
                .attr("stroke-width", LANE_LINE_WIDTH)
                .attr("stroke-dasharray", "10 3")
        }

        // 逆向可变车道
        function lineReverseVariable(wrapper, laneWidth) {
            wrapper.append("line")
                .attr("x1", LANE_LINE_OFFSET)
                .attr("y1", 0)
                .attr("x2", LANE_LINE_OFFSET)
                .attr("y2", BRANCH_HEIGHT)
                .attr("fill", "#52de7c")
                .attr("stroke", " #52de7c")
                .attr("stroke-width", 3)

            wrapper.append("line")
                .attr("x1", laneWidth - LANE_LINE_OFFSET)
                .attr("y1", 0)
                .attr("x2", laneWidth - LANE_LINE_OFFSET)
                .attr("y2", BRANCH_HEIGHT)
                .attr("fill", "#52de7c")
                .attr("stroke", " #52de7c")
                .attr("stroke-width", LANE_LINE_WIDTH)
        }
        // 可变车道
        function lineVariable(wrapper, laneWidth) {
            const w = 6, h = 4, gap = 10, angle = 30;
            const t = Math.tan(Math.PI / 180 * angle);
            const counter = Math.floor(BRANCH_HEIGHT / (h + gap));
            let path1 = '', path2 = '';

            for (let i = 0; i < counter; i++) {
                let p1 = [0, i * (h + gap)],
                    p2 = [0, p1[1] + h],
                    p3 = [w, p2[1] + t * w],
                    p4 = [w, p3[1] - h];

                let rp1 = [laneWidth, i * (h + gap)],
                    rp2 = [laneWidth, rp1[1] + h],
                    rp3 = [laneWidth - w, rp2[1] + t * w],
                    rp4 = [laneWidth - w, p3[1] - h];

                path1 += `M${p1.join(',')} L${p2.join(',')} L${p3.join(',')} L${p4.join(',')}Z `
                path2 += `M${rp1.join(',')} L${rp2.join(',')} L${rp3.join(',')} L${rp4.join(',')}Z `
            }

            wrapper.append("path")
                .attr("d", path1)
                .attr("fill", "#fff")

            wrapper.append("path")
                .attr("d", path2)
                .attr("fill", "#fff")

            wrapper.append("line")
                .attr('x1', LANE_LINE_OFFSET)
                .attr('y1', 0)
                .attr('x2', LANE_LINE_OFFSET)
                .attr('y2', BRANCH_HEIGHT)
                .attr('stroke-width', LANE_LINE_WIDTH)
                .attr('stroke', '#fff')

            wrapper.append("line")
                .attr('x1', laneWidth - LANE_LINE_OFFSET)
                .attr('y1', 0)
                .attr('x2', laneWidth - LANE_LINE_OFFSET)
                .attr('y2', BRANCH_HEIGHT)
                .attr('stroke-width', LANE_LINE_WIDTH)
                .attr('stroke', '#fff')
        }
        // 非机动车道
        function markerNonMotorVehicle(wrapper, laneWidth) {
            wrapper.append("image")
                .attr('width', laneWidth)
                .attr('height', laneWidth)
                .attr('xlink:href', require('./img/bike.png'))
                .attr('transform', `translate(${laneWidth}, ${LANE_MARKER_START_Y - laneWidth}) rotate(${90})`)
        }

        function lineDash(wrapper) {
            wrapper.append('line')
                .attr('x1', LANE_LINE_OFFSET)
                .attr('y1', 0)
                .attr('x2', LANE_LINE_OFFSET)
                .attr('y2', BRANCH_HEIGHT)
                .attr('stroke-width', LANE_LINE_WIDTH)
                .attr('stroke', '#fff')
                .attr('stroke-dasharray', 24)
        }

        function lineSolid(wrapper) {
            wrapper.append('line')
                .attr('x1', LANE_LINE_OFFSET)
                .attr('y1', 0)
                .attr('x2', LANE_LINE_OFFSET)
                .attr('y2', BRANCH_HEIGHT)
                .attr('stroke-width', LANE_LINE_WIDTH)
                .attr('stroke', '#fff')
            wrapper.append('line')
                .attr('x1', LANE_LINE_OFFSET)
                .attr('y1', 0)
                .attr('x2', LANE_LINE_OFFSET)
                .attr('y2', BRANCH_HEIGHT)
                .attr('stroke-width', LANE_LINE_WIDTH)
                .attr('stroke', '#fff')
        }

        // 画中线
        function drawMedian(wrapper, entranceWidth) {
            wrapper.append('line')
                .attr('x1', entranceWidth)
                .attr('y1', 0)
                .attr('x2', entranceWidth)
                .attr('y2', BRANCH_HEIGHT)
                .attr('stroke-width', LANE_LINE_WIDTH * 2)
                .attr('stroke', 'yellow')
        }


        function zebraStripes(params) {

        }



    }


    getNode() {
        return this.svg.node();
    }

}

export default {
    render(wrapper) {
        wrapper.appendChild(new Cross().getNode())
    }
}



