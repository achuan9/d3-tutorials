import * as d3 from "d3";
import { LANE_ARROW } from "./arrow-path";
import DATA from "./data";
import "./style.css";
const COLORS = ["#2DD8B5", "#40A3F1", "#FF475D", "#6236FF", "#09B1C7", "#32EDFC", "#F7B500", "#FFEED0", "#E05420", "#0D8B5A"];
// 页面中单位为 厘米 <-> PX , 接口返回的是 米，所以接口返回的宽度数据要乘以 SCALE
const SCALE = 6;
//定义路口右转渠化半径
var CROSS_CHANNEL_RADIAN = 18 * SCALE;
//定义路口右转渠化车道宽度
var CROSS_CHANNEL_WIDTH = 3.5 * SCALE;

// 斑马线宽度
const ZEBRA_CROSSING_HEIGHT = 5 * SCALE;

const crossData = DATA.cross.roads
const WIDTH = 600, HEIGHT = 600, BRANCH_HEIGHT = 200;
const LANE_LINE_WIDTH = 3, LANE_LINE_OFFSET = LANE_LINE_WIDTH / 2;

const LANE_WIDTH_SCALE = 8;
const LANE_ARROW_START_Y = BRANCH_HEIGHT * 0.6, LANE_MARKER_START_Y = BRANCH_HEIGHT * 0.56;
const CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };
const BRANCH_BORDER_WIDTH = 3 * SCALE; // 分支边线的宽度

const LANE_HEIGHT = BRANCH_HEIGHT - ZEBRA_CROSSING_HEIGHT
//定义路口转角半径
var CROSS_RADIUS = 4 * SCALE;

class Cross {
    constructor() {
        this.svg = null;
        this.wrapper = null;
        this._init();
    }

    _init() {
        const svg = d3.create('svg')
            .attr('width', WIDTH)
            .attr('height', HEIGHT)
            .attr('style', 'background: #ccc;')

        const wrapper = svg.append('g')
            .attr('class', 'wrapper')
        // .attr('transform', `translate(${CENTER.x}, ${CENTER.y}) scale(1, -1)`);

        this.svg = svg;
        this.wrapper = wrapper;
        this.drawBranchInfo = []
        this.drawData = this._getDrawData(crossData);

        this.svg.call(d3.zoom().on("zoom", _ => {
            this.wrapper.attr("transform", d3.event.transform);
        }))
        this._drawBaseLayer();
        this._drawLaneLayer();

    }
    /**
     * 画路口的基本图层(底图)
     *  1. 绘制整个路口的底图图层
     *  2. 根据分支记录关键坐标
     */

    _drawBaseLayer() {
        const drawData = this.drawData;
        const centerWrapper = this.wrapper.append("g")
            .attr("class", "center-wrapper");
        crossData.forEach((cd, index) => {
            const curBranch = drawData[cd.id];
            const prevBranch = drawData[curBranch.prevId];
            /**
             * 绘制路口中心区域
             */
            centerWrapper.append("path")
                .attr("d", `M${curBranch.x3} ${curBranch.y3} L${curBranch.x4} ${curBranch.y4} Q${curBranch.contrPX} ${curBranch.contrPY}, 
                ${prevBranch.x3} ${prevBranch.y3} Q${prevBranch.x3} ${prevBranch.y3}, ${CENTER.x} ${CENTER.y} Z`)
                .attr("fill", "#8DB9DE")
                .attr("stroke", "#8DB9DE")
                .attr("stroke-width", 1);
            /**
             * 绘制分支
             */
            const branchWrapper = this.wrapper.append("g")
                .attr("class", "branch-wrapper")
                .attr("id", `branch${index}`)
                .attr("transform", `translate(${curBranch.x1}, ${curBranch.y1}) rotate(${curBranch.angle})`)

            const entranceLaneWrapper = branchWrapper.selectAll('.entrance')
                .data(curBranch.entrance.lanes)
                .join("g")
                .attr("class", "lane-wrapper entrance")
                .attr("id", (d, i) => `laneEntrance${i}`)
                .attr('transform', d => `translate(${d.x}, 0)`)

            const exitLaneWrapper = branchWrapper.selectAll('.exit')
                .data(curBranch.exit.lanes)
                .join("g")
                .attr("class", "lane-wrapper exit")
                .attr("id", (d, i) => `laneExit${i}`)
                .attr('transform', d => `translate(${d.x}, 0)`)

            const medianWrapper = branchWrapper.append('g')
                .attr('class', 'median-wrapper')
                .attr('transform', `translate(${curBranch.entrance.width - curBranch.medianWidth / 2}, 0)`)

            const labelWrapper = branchWrapper.append('g')
                .attr('class', 'label-wrapper')
                .attr('transform', `translate(0, -10)`)

            // 入口道
            entranceLaneWrapper.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', d => d.width)
                .attr('height', BRANCH_HEIGHT)
                .attr('fill', "#8DB9DE")
                .attr("stroke", "#8DB9DE")
                .attr("stroke-width", 1);
            
            // 中线
            medianWrapper.append('rect')
                .attr('class', 'median-bg')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', curBranch.medianWidth)
                .attr('height', BRANCH_HEIGHT)
                .attr('fill', "#8DB9DE")
                .attr("stroke", "#8DB9DE")
                .attr("stroke-width", 1);

            // 出口道
            exitLaneWrapper.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', d => d.width)
                .attr('height', BRANCH_HEIGHT)
                .attr('fill', "#8DB9DE")
                .attr("stroke", "#8DB9DE")
                .attr("stroke-width", 1);

            // 分支名
            labelWrapper.append("text")
                .attr("class", "branch-name")
                .attr("x", curBranch.width / 2)
                .attr("y", -10)
                .attr("fill", "#fff")
                .attr("font-size", "20px")
                .attr("text-anchor", "middle")
                .text(cd.name)
        })
    }

    /**
     * 画路口的路标及车道分割线图层
     */
    _drawLaneLayer() {
        const drawData = this.drawData;
        const borderWidth = 1 * SCALE;
        crossData.forEach((cd, index) => {
            const curBranch = drawData[cd.id];
            const branchWrapper = this.wrapper.select(`#branch${index}`);
            // 画边线
            branchWrapper.append('line')
                .attr('x1', 0)
                .attr('y1', 0)
                .attr('x2', 0)
                .attr('y2', BRANCH_HEIGHT)
                .attr('stroke', '#fff')
                .attr('stroke-width', borderWidth)

            branchWrapper.append('line')
                .attr('x1', curBranch.width)
                .attr('y1', 0)
                .attr('x2', curBranch.width)
                .attr('y2', BRANCH_HEIGHT)
                .attr('stroke', '#fff')
                .attr('stroke-width', borderWidth)
            console.log(curBranch);
            // 画中线
            branchWrapper.append('line')
                .attr('x1', curBranch.entrance.width)
                .attr('y1', 0)
                .attr('x2', curBranch.entrance.width)
                .attr('y2', LANE_HEIGHT)
                .attr('stroke-width', curBranch.medianWidth)
                .attr('stroke', 'yellow')

            
            // 画车道
            cd.entrance.lanes.forEach((el, index, arr) => {
                el.width = el.width * SCALE;
                this._drawLane(branchWrapper, arr, index, false);
            })
            // cd.exit.lanes.forEach((el, index, arr) => {
            //     el.width = el.width * SCALE;
            //     this._drawLane(branchWrapper, arr, index, true);
            // })
        })
    }

    _drawLane(branchWrapper, lanes, index, isExit) {
        const lane = lanes[index];
        const laneWrapper = branchWrapper.select(`#laneEntrance${index}`);
        // 1 普通车道；2 公交车道；3 潮汐车道；4 逆向可变车道；5 可变车道；6 右转专用道；7 非机动车道
        const LINE_WIDTH = 2;
        const LINE_OFFSET = LINE_WIDTH / 2;
        const NEED_REMOVE_PREV_LINE_TYPE = [2, 3, 4, 5]; // 需要删除前一个车道的分割线的车道类型
        const MAP = {
            1: function() {
                lineSolid(laneWrapper, lane.width);
                if (index && lanes[index - 1].type == 1) {
                    branchWrapper.select(`#laneEntrance${index} line`).remove();
                }
                arrow(laneWrapper, lane.width, lane.direction, isExit);
            },
            2: function () {
                markerBus(laneWrapper, lane.width);
                arrow(laneWrapper, lane.width, lane.direction, isExit);
            },
            3: function () {
                lineTide(laneWrapper, lane.width);
                arrow(laneWrapper, lane.width, lane.direction, isExit);
            },
            4: function () {
                lineReverseVariable(laneWrapper, lane.width);
                arrow(laneWrapper, lane.width, lane.direction, isExit);
            },
            5: function () {
                lineVariable(laneWrapper, lane.width);
                arrow(laneWrapper, lane.width, lane.direction, isExit);
            },
            6: function () {
                // lineTide(laneWrapper, lane.width);
            },
            7: function () {
                markerNonMotorVehicle(laneWrapper, lane.width);
                arrow(laneWrapper, lane.width, lane.direction, isExit);
            },

        }

        MAP[lane.type]();
        // 公交专用
        function markerBus(wrapper, laneWidth) {
            wrapper.append('line')
                .attr('class','line-1')
                .attr('x1', LINE_OFFSET)
                .attr('y1', LANE_HEIGHT)
                .attr('x2', LINE_OFFSET)
                .attr('y2', 0)
                .attr('stroke-width', LINE_WIDTH)
                .attr('stroke', '#fbad10')
                .attr('stroke-dasharray', 24)
            wrapper.append('line')
                .attr('class','line-2')
                .attr('x1', laneWidth - LINE_OFFSET)
                .attr('y1', LANE_HEIGHT)
                .attr('x2', laneWidth - LINE_OFFSET)
                .attr('y2', 0)
                .attr('stroke-width', LINE_WIDTH)
                .attr('stroke', '#fbad10')
                .attr('stroke-dasharray', 24)
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
                .attr('class','line-1')
                .attr("x1", LINE_OFFSET)
                .attr("y1", LANE_HEIGHT)
                .attr("x2", LINE_OFFSET)
                .attr("y2", 0)
                .attr("fill", "#fbad10")
                .attr("stroke", " #fbad10")
                .attr("stroke-width", LINE_WIDTH)
                .attr("stroke-dasharray", "10 3")

            wrapper.append("line")
                .attr('class','line-2')
                .attr("x1", laneWidth - LINE_OFFSET)
                .attr("y1", LANE_HEIGHT)
                .attr("x2", laneWidth - LINE_OFFSET)
                .attr("y2", 0)
                .attr("fill", "#fbad10")
                .attr("stroke", " #fbad10")
                .attr("stroke-width", LINE_WIDTH)
                .attr("stroke-dasharray", "10 3")
        }
        // 逆向可变车道
        function lineReverseVariable(wrapper, laneWidth) {
            wrapper.append("line")
                .attr('class','line-1')
                .attr("x1", LINE_OFFSET)
                .attr("y1", 0)
                .attr("x2", LINE_OFFSET)
                .attr("y2", LANE_HEIGHT)
                .attr("fill", "#52de7c")
                .attr("stroke", " #52de7c")
                .attr("stroke-width", LINE_WIDTH)

            wrapper.append("line")
                .attr('class','line-2')
                .attr("x1", laneWidth - LINE_OFFSET)
                .attr("y1", 0)
                .attr("x2", laneWidth - LINE_OFFSET)
                .attr("y2", LANE_HEIGHT)
                .attr("fill", "#52de7c")
                .attr("stroke", " #52de7c")
                .attr("stroke-width", LINE_WIDTH)
        }
        // 可变车道
        function lineVariable(wrapper, laneWidth) {
            const w = 6, h = 4, gap = 10, angle = 30;
            const t = Math.tan(Math.PI / 180 * angle);
            const counter = Math.floor(LANE_HEIGHT / (h + gap));
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
                .attr('class','line-1')
                .attr('x1', 0)
                .attr('y1', 0)
                .attr('x2', 0)
                .attr('y2', LANE_HEIGHT)
                .attr('stroke-width', LANE_LINE_WIDTH)
                .attr('stroke', '#fff')

            wrapper.append("line")
                .attr('class','line-2')
                .attr('x1', laneWidth)
                .attr('y1', 0)
                .attr('x2', laneWidth)
                .attr('y2', LANE_HEIGHT)
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
                .attr('x1', LINE_OFFSET)
                .attr('y1', 0)
                .attr('x2', LINE_OFFSET)
                .attr('y2', LANE_HEIGHT)
                .attr('stroke-width', LANE_LINE_WIDTH)
                .attr('stroke', '#fff')
                .attr('stroke-dasharray', 24)
        }

        function lineSolid(wrapper, laneWidth) {
            wrapper.append('line')
                .attr('class','line-1')
                .attr('x1', LINE_OFFSET)
                .attr('y1', 0)
                .attr('x2', LINE_OFFSET)
                .attr('y2', LANE_HEIGHT)
                .attr('stroke-width', LINE_WIDTH)
                .attr('stroke', '#fff')
            wrapper.append('line')
                .attr('class','line-2')
                .attr('x1', laneWidth - LINE_OFFSET)
                .attr('y1', 0)
                .attr('x2', laneWidth - LINE_OFFSET)
                .attr('y2', LANE_HEIGHT)
                .attr('stroke-width', LINE_WIDTH)
                .attr('stroke', '#fff')
        }

        // 画箭头
        function arrow(wrapper, laneWidth, laneFlowDirection, isExit) {
            wrapper.append('path')
                .attr('d', LANE_ARROW[laneFlowDirection])
                .attr("fill", "white")
                .attr("stroke", "white")
                .attr("stroke-width", 2)
                .attr("transform", `translate(${laneWidth / 2}, ${LANE_ARROW_START_Y}) scale(0.14) rotate(${isExit ? 180 : 0})`)
        }
        
        
    }
    zebraStripes(params) {

    }


    _getDrawData(crossData) {
        const drawData = {};
        // 计算距离
        crossData.forEach((item, index, arr) => {
            const prevIndex = index === 0 ? arr.length - 1 : index - 1;
            const nextIndex = index === arr.length - 1 ? 0 : index + 1;
            const prevBranch = arr[prevIndex],
                nextBranch = arr[nextIndex];
            const medianWidthHalf = item.medianWidth / 2 * SCALE;
            const distance = _getDistance(prevBranch, item, nextBranch);
            const exitWidth = _getLanesWidth(item.exit) + medianWidthHalf;
            const entranceWidth = _getLanesWidth(item.entrance) + medianWidthHalf;
            const branchWidth = exitWidth + entranceWidth;
            const x1 = _getLeftTopX(item.angle, entranceWidth, distance);
            const y1 = _getLeftTopY(item.angle, entranceWidth, distance);

            const x2 = x1 + branchWidth, y2 = y1;
            const x3 = _getRightBottomX(item.angle, exitWidth, distance),
                y3 = _getRightBottomY(item.angle, exitWidth, distance);
            const x4 = _getLeftBottomX(item.angle, entranceWidth, distance),
                y4 = _getLeftBottomY(item.angle, entranceWidth, distance);

            // 计算每条车道x起始坐标
            const entranceXArr = [0], exitXArr = [entranceWidth + medianWidthHalf];

            item.entrance.lanes.forEach(el => {
                entranceXArr.push(el.width * SCALE + entranceXArr[entranceXArr.length - 1])
            })
            item.exit.lanes.forEach(el => {
                exitXArr.push(el.width * SCALE + exitXArr[exitXArr.length - 1])
            })

            const entrance = {
                width: entranceWidth,
                lanes: item.entrance.lanes.map((l, i) => {
                    return {
                        x: entranceXArr[i],
                        width: l.width * SCALE,
                        type: l.type
                    }
                })
            }
            const exit = {
                width: exitWidth,
                lanes: item.exit.lanes.map((l, i) => {
                    return {
                        x: exitXArr[i],
                        width: l.width * SCALE,
                        type: l.type
                    }
                })
            }
            drawData[item.id] = {
                id: item.id,
                name: item.name,
                prevId: prevBranch.id,
                nextId: nextBranch.id,
                distance,
                angle: item.angle,
                entrance,
                exit,
                medianWidth: item.medianWidth * SCALE,
                width: branchWidth,
                height: BRANCH_HEIGHT,
                x1,
                y1,
                x2,
                y2,
                x3,
                y3,
                x4,
                y4
            }

        });

        Object.keys(drawData).forEach((id, index) => {
            // 绘制道路中心
            const curBranch = drawData[id];
            const prevBranch = drawData[curBranch.prevId];

            //计算前一路口出口右边线直线方程X偏移量
            const offsetX1 = getOffsetX(prevBranch.angle, prevBranch.x3 - CENTER.x,
                CENTER.y - prevBranch.y3);
            //计算当前路口入口左边线直线方程X偏移量
            const offsetX2 = getOffsetX(curBranch.angle, curBranch.x4 - CENTER.x, CENTER.y - curBranch.y4);
            //计算路口转角控制点X坐标
            const contrPX = getIntersectionX(CENTER.x, prevBranch.angle, offsetX1, CENTER.y - prevBranch.y3, curBranch.angle, offsetX2, CENTER.y - curBranch.y4);
            //计算路口转角控制点Y坐标
            const contrPY = getIntersectionY(CENTER.y, prevBranch.angle, offsetX1, CENTER.y - prevBranch.y3, curBranch.angle, offsetX2, CENTER.y - curBranch.y4);

            //右转渠化起始角度
            var channelStartAngle = getChannelStartAngle(curBranch.angle);
            //右转渠化终止角度
            var channelEndAngle = getChannelEndAngle(prevBranch.angle);
            if (Math.PI < channelStartAngle - channelEndAngle) {
                channelStartAngle = channelStartAngle - 2 * Math.PI;
            }

            //右转渠化半径
            var channelRadian = getChannelRadian(
                CENTER.x,
                CENTER.y,
                prevBranch.angle,
                curBranch.angle,
                contrPX - CENTER.x,
                CENTER.y - contrPY,
                curBranch.x4 - CENTER.x,
                CENTER.y - curBranch.x4,
                prevBranch.x3 - CENTER.x,
                CENTER.y - prevBranch.y3,
                0
            );
            //右转渠化当前路口左下角（起始点）X
            var channelStartX = getChannelStartX(
                CENTER.x,
                prevBranch.angle,
                curBranch.angle,
                contrPX - CENTER.x,
                channelRadian
            );
            //右转渠化当前路口左下角（起始点）Y
            var channelStartY = getChannelStartY(
                CENTER.y,
                prevBranch.angle,
                curBranch.angle,
                CENTER.y - contrPY,
                channelRadian
            );
            //右转渠化前一路口右下角（终点）X
            var channelEndX = getChannelEndX(
                CENTER.x,
                prevBranch.angle,
                curBranch.angle,
                contrPX - CENTER.x,
                channelRadian
            );
            //右转渠化前一路口右下角（终点）Y
            var channelEndY = getChannelEndY(
                CENTER.y,
                prevBranch.angle,
                curBranch.angle,
                CENTER.y - contrPY,
                channelRadian
            );
            //右转渠化半径调整
            channelRadian = modifyChannelRadian(
                CENTER.x,
                CENTER.y,
                prevBranch.angle,
                curBranch.angle,
                contrPX - CENTER.x,
                CENTER.y - contrPY,
                channelStartX - CENTER.x,
                CENTER.y - channelStartY,
                channelEndX - CENTER.x,
                CENTER.y - channelEndY,
                curBranch.x4 - CENTER.x,
                CENTER.y - curBranch.x4,
                prevBranch.x3 - CENTER.x,
                CENTER.y - prevBranch.y3,
                channelRadian
            );
            //右转渠化外圈起始角度（弧度）
            var channelOutStartAngle = getChannelOutStartAngle(
                channelStartAngle,
                channelRadian
            );
            //右转渠化外圈终止角度（弧度）
            var channelOutEndAngle = getChannelOutEndAngle(
                channelEndAngle,
                channelRadian
            );
            //右转渠化圆心X
            var circleCenterX = getCircleCenterX(
                CENTER.x,
                prevBranch.angle,
                curBranch.angle,
                contrPX - CENTER.x,
                channelRadian
            );
            //右转渠化圆心Y
            var circleCenterY = getCircleCenterY(
                CENTER.y,
                prevBranch.angle,
                curBranch.angle,
                CENTER.y - contrPY,
                channelRadian
            );
            //右转渠化当前路口左下角（外圈起始点）X
            var channelOutStartX = getChannelOutStartX(
                CENTER.x,
                curBranch.angle,
                channelStartX - CENTER.x,
                channelRadian
            );
            //右转渠化当前路口左下角（外圈起始点）Y
            var channelOutStartY = getChannelOutStartY(
                CENTER.y,
                curBranch.angle,
                CENTER.y - channelStartY,
                channelRadian
            );
            //右转渠化前一路口右下角（外圈终点）X
            var channelOutEndX = getChannelOutEndX(
                CENTER.x,
                prevBranch.angle,
                channelEndX - CENTER.x,
                channelRadian
            );
            //右转渠化前一路口右下角（外圈终点）Y
            var channelOutEndY = getChannelOutEndY(
                CENTER.y,
                prevBranch.angle,
                CENTER.y - channelEndY,
                channelRadian
            );
            curBranch.contrPX = contrPX;
            curBranch.contrPY = contrPY;
            curBranch.channel = {
                circleCenterX,
                circleCenterY,
                radian: channelRadian,

                innerStartX: channelStartX,
                innerStartY: channelStartY,
                innerEndX: channelEndX,
                innerEndY: channelEndY,
                innerStartAngle: channelStartAngle,
                innerEndAngle: channelEndAngle,

                outerStartX: channelOutStartX,
                outerStartY: channelOutStartY,
                outerEndX: channelOutEndX,
                outerEndY: channelOutEndY,
                outerStartAngle: channelOutStartAngle,
                outerEndAngle: channelOutEndAngle
            }
        });

        //计算路口中心点到当前道路横道线的距离
        function _getDistance(prevRoad, road, nextRoad) {
            var preExitW = (_getLanesWidth(prevRoad.exit) + prevRoad.medianWidth / 2 * SCALE)
            var curExitW = (_getLanesWidth(road.exit) + road.medianWidth / 2 * SCALE)
            var curEntranceW = (_getLanesWidth(road.entrance) + road.medianWidth / 2 * SCALE)
            var nextEntranceW = (_getLanesWidth(nextRoad.entrance) + nextRoad.medianWidth / 2 * SCALE)
            const prevAngle = prevRoad.angle,
                currentAngle = prevAngle > road.angle ? road.angle + 360 : road.angle,
                nextAngle = currentAngle > nextRoad.angle ? nextRoad.angle + 360 : nextRoad.angle;
            let toPreDist = preExitW,
                toNextDist = nextEntranceW;

            if (90 > (currentAngle - prevAngle)) {
                var angle = (currentAngle - prevAngle) * (curEntranceW / (preExitW + curEntranceW));
                var arc = (angle / 360) * 2 * Math.PI;
                toPreDist = curEntranceW / Math.tan(arc);
            }

            if (90 > (nextAngle - currentAngle)) {
                var angle = (nextAngle - currentAngle) * (curExitW / (nextEntranceW + curExitW));
                var arc = (angle / 360) * 2 * Math.PI;
                toNextDist = curExitW / Math.tan(arc);
            }
            const distance = Math.max(toNextDist, toPreDist);
            return distance + CROSS_RADIUS;

        }

        //计算路口宽度
        function _getLanesWidth(data = {}) {
            if (!data.lanes || !data.lanes.length) {
                return 0
            }
            return data.lanes.reduce((pre, cur) => pre + cur.width * SCALE, 0);
        }

        //计算矩形左上角X坐标
        function _getLeftTopX(angle, entranceWidth, distance) {
            var x = 0;
            if (0 !== angle) {
                var orgArc = (angle / 360) * 2 * Math.PI;
                var a = entranceWidth / Math.tan(orgArc);
                var b = distance + BRANCH_HEIGHT - a;
                x = b * Math.sin(orgArc);
            } else {
                x = -entranceWidth;
            }
            x = CENTER.x + x;
            return x;
        }

        //计算矩形左上角Y坐标
        function _getLeftTopY(angle, entranceWidth, distance) {
            var y = 0;
            if (0 === angle) {
                y = BRANCH_HEIGHT + distance;
            } else if (180 === angle) {
                y = -(BRANCH_HEIGHT + distance);
            } else {
                var orgArc = (angle / 360) * 2 * Math.PI;
                var a = entranceWidth / Math.tan(orgArc);
                var b = distance + BRANCH_HEIGHT - a;
                y = b * Math.cos(orgArc) + entranceWidth / Math.sin(orgArc);
            }
            y = CENTER.y - y;
            return y;
        }

        //计算矩形右下角X坐标
        function _getRightBottomX(angle, exitWidth, distance) {
            var x = 0;
            if (0 !== angle) {
                var orgArc = (angle / 360) * 2 * Math.PI;
                var a = exitWidth / Math.tan(orgArc);
                var b = distance + a;
                x = b * Math.sin(orgArc);
            } else {
                x = exitWidth;
            }
            x = CENTER.x + x;
            return x;
        }

        //计算矩形右下角Y坐标
        function _getRightBottomY(angle, exitWidth, distance) {
            var y = 0;
            if (0 === angle) {
                y = distance;
            } else if (180 === angle) {
                y = -distance;
            } else {
                var orgArc = (angle / 360) * 2 * Math.PI;
                var a = exitWidth / Math.tan(orgArc);
                var b = exitWidth / Math.sin(orgArc);
                y = (distance + a) * Math.cos(orgArc) - b;
            }
            y = CENTER.y - y;
            return y;
        }

        //计算矩形左下角X坐标
        function _getLeftBottomX(angle, entranceWidth, distance) {
            var x = 0;
            if (0 !== angle) {
                var orgArc = (angle / 360) * 2 * Math.PI;
                var a = entranceWidth / Math.tan(orgArc);
                var b = distance - a;
                x = b * Math.sin(orgArc);
            } else {
                x = -entranceWidth;
            }
            x = CENTER.x + x;
            return x;
        }

        //计算矩形左下角Y坐标
        function _getLeftBottomY(angle, entranceWidth, distance) {
            var y = 0;
            if (0 === angle) {
                y = distance;
            } else if (180 === angle) {
                y = -distance;
            } else {
                var orgArc = (angle / 360) * 2 * Math.PI;
                var a = entranceWidth / Math.tan(orgArc);
                var b = distance - a;
                var y1 = entranceWidth / Math.sin(orgArc);
                var y2 = b * Math.cos(orgArc);
                y = y1 + y2;
            }
            y = CENTER.y - y;
            return y;
        }
        //计算直线方程X偏移量
        function getOffsetX(angle, pX, pY) {
            var offsetX = 0;
            if (0 === angle) {
                offsetX = pX;
            } else if (90 === angle) {
                offsetX = pX;
            } else if (180 === angle) {
                offsetX = pX;
            } else if (270 === angle) {
                offsetX = pX;
            } else {
                var orgArc = angle / 360 * 2 * Math.PI;
                offsetX = (pX - pY * Math.tan(orgArc));
            }
            return offsetX;
        }
        //计算两直线交点X坐标
        function getIntersectionX(orgX, angle1, offsetX1, pY1, angle2, offsetX2, pY2) {
            var isX = 0;
            if (0 === angle1) {
                isX = offsetX1;
            } else if (90 === angle1) {
                if (270 === angle2) {
                    isX = (offsetX1 + offsetX2) / 2;
                } else {
                    isX = offsetX2 + pY1 * Math.tan(angle2 / 360 * 2 * Math.PI);
                }
            } else if (180 === angle1) {
                isX = offsetX1;
            } else if (270 === angle1) {
                if (90 === angle2) {
                    isX = (offsetX1 + offsetX2) / 2;
                } else {
                    isX = offsetX2 + pY1 * Math.tan(angle2 / 360 * 2 * Math.PI);
                }
            } else if (0 === angle2) {
                isX = offsetX2;
            } else if (90 === angle2) {
                isX = offsetX1 + pY2 * Math.tan(angle1 / 360 * 2 * Math.PI);
            } else if (180 === angle2) {
                isX = offsetX2;
            } else if (270 === angle2) {
                if (90 === angle1) {
                    isX = (offsetX1 + offsetX2) / 2;
                } else {
                    isX = offsetX1 + pY2 * Math.tan(angle1 / 360 * 2 * Math.PI);
                }
            } else {
                var orgArc1 = angle1 / 360 * 2 * Math.PI;
                var orgArc2 = angle2 / 360 * 2 * Math.PI;
                isX = (offsetX1 * Math.tan(orgArc2) - offsetX2 * Math.tan(orgArc1)) /
                    (Math.tan(orgArc2) - Math.tan(orgArc1));
            }
            isX = orgX + isX;
            return isX;
        }
        //计算两直线交点Y坐标
        function getIntersectionY(orgY, angle1, offsetX1, pY1, angle2, offsetX2, pY2) {
            var isY = 0;
            if (0 === angle1) {
                if (90 === angle2) {
                    isY = pY2;
                } else if (180 === angle2) {
                    isY = (pY2 + pY1) / 2;
                } else if (270 === angle2) {
                    isY = pY2;
                } else {
                    isY = (offsetX1 - offsetX2) / Math.tan(angle2 / 360 * 2 * Math.PI);
                }
            } else if (90 === angle1) {
                isY = pY1;
            } else if (180 === angle1) {
                if (0 === angle2) {
                    isY = pY2;
                } else if (270 === angle2) {
                    isY = pY2;
                } else {
                    isY = (offsetX1 - offsetX2) / Math.tan(angle2 / 360 * 2 * Math.PI);
                }
            } else if (270 === angle1) {
                isY = pY1;
            } else if (90 === angle2) {
                isY = pY2;
            } else if (180 === angle2) {
                isY = (offsetX2 - offsetX1) / Math.tan(angle1 / 360 * 2 * Math.PI);
            } else if (270 === angle2) {
                isY = pY2;
            } else {
                var orgArc1 = angle1 / 360 * 2 * Math.PI;
                var orgArc2 = angle2 / 360 * 2 * Math.PI;
                isY = (offsetX2 - offsetX1) /
                    (Math.tan(orgArc1) - Math.tan(orgArc2));
            }
            isY = orgY - isY;
            return isY;
        }
        //右转渠化当前路口左下角（起始点）X
        function getChannelStartX(orgX, prevAngle, crntAngle, pX, channelRadian) {
            var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
            if (prevAngle > crntAngle) {
                crntAngle = crntAngle + 360;
            }
            var angle1 = (crntAngle - prevAngle) / 2;
            var arc1 = (angle1 / 360) * 2 * Math.PI;
            var l1 = channelRadian / Math.tan(arc1);
            var channelStartX = pX + l1 * Math.sin(crntArc1);
            channelStartX = orgX + channelStartX;
            return channelStartX;
        }

        //右转渠化当前路口左下角（起始点）Y
        function getChannelStartY(orgY, prevAngle, crntAngle, pY, channelRadian) {
            var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
            if (prevAngle > crntAngle) {
                crntAngle = crntAngle + 360;
            }
            var angle1 = (crntAngle - prevAngle) / 2;
            var arc1 = (angle1 / 360) * 2 * Math.PI;
            var l1 = channelRadian / Math.tan(arc1);
            var channelStartY = pY + l1 * Math.cos(crntArc1);
            channelStartY = orgY - channelStartY;
            return channelStartY;
        }


        //右转渠化前一路口右下角（终点）X
        function getChannelEndX(orgX, prevAngle, crntAngle, pX, channelRadian) {
            var prevArc1 = (prevAngle / 360) * 2 * Math.PI;
            if (prevAngle > crntAngle) {
                crntAngle = crntAngle + 360;
            }
            var angle1 = (crntAngle - prevAngle) / 2;
            var arc1 = (angle1 / 360) * 2 * Math.PI;
            var l1 = channelRadian / Math.tan(arc1);
            var channelEndX = pX + l1 * Math.sin(prevArc1);
            channelEndX = orgX + channelEndX;
            return channelEndX;
        }

        //右转渠化前一路口右下角（终点）Y
        function getChannelEndY(orgY, prevAngle, crntAngle, pY, channelRadian) {
            var prevArc1 = (prevAngle / 360) * 2 * Math.PI;
            if (prevAngle > crntAngle) {
                crntAngle = crntAngle + 360;
            }
            var angle1 = (crntAngle - prevAngle) / 2;
            var arc1 = (angle1 / 360) * 2 * Math.PI;
            var l1 = channelRadian / Math.tan(arc1);
            var channelEndY = pY + l1 * Math.cos(prevArc1);
            channelEndY = orgY - channelEndY;
            return channelEndY;
        }

        //计算右转渠化半径
        //交点：pX, pY
        //当前路口左下角：spX, spY
        //前一路口右下角：epX, epY
        //圆弧半径：cR
        function getChannelRadian(
            W,
            H,
            prevAngle,
            crntAngle,
            pX,
            pY,
            spX,
            spY,
            epX,
            epY,
            cR
        ) {
            var channelRadian = cR + CROSS_CHANNEL_RADIAN;
            var cRS = channelRadian;
            var cRE = channelRadian;
            //右转渠化起始点（当前路口左下角）X
            var channelStartX =
                getChannelStartX(W, prevAngle, crntAngle, pX, channelRadian) - W;
            //右转渠化起始点（当前路口左下角）Y
            var channelStartY =
                H - getChannelStartY(H, prevAngle, crntAngle, pY, channelRadian);
            //右转渠化终点（前一路口右下角）X
            var channelEndX =
                getChannelEndX(W, prevAngle, crntAngle, pX, channelRadian) - W;
            //右转渠化终点（前一路口右下角）Y
            var channelEndY =
                H - getChannelEndY(H, prevAngle, crntAngle, pY, channelRadian);
            //起始点与当前路口左下角距离
            var distStartSP = Math.sqrt(
                Math.pow(channelStartX - spX, 2) + Math.pow(channelStartY - spY, 2)
            );
            //当前路口左下角与交点距离
            var distSPP = Math.sqrt(Math.pow(pX - spX, 2) + Math.pow(pY - spY, 2));
            if (distStartSP < distSPP) {
                cRS = getChannelRadian(
                    W,
                    H,
                    prevAngle,
                    crntAngle,
                    pX,
                    pY,
                    spX,
                    spY,
                    epX,
                    epY,
                    channelRadian
                );
            }
            // //终点与交点距离
            // var distEndP = Math.sqrt(Math.pow((channelEndX - pX), 2) +
            //     Math.pow((channelEndY - pY), 2));
            //终点与前一路口右下角距离
            var distEndEP = Math.sqrt(
                Math.pow(channelEndX - epX, 2) + Math.pow(channelEndY - epY, 2)
            );
            //前一路口右下角与交点距离
            var distEPP = Math.sqrt(Math.pow(pX - epX, 2) + Math.pow(pY - epY, 2));
            if (distEndEP < distEPP) {
                cRE = getChannelRadian(
                    W,
                    H,
                    prevAngle,
                    crntAngle,
                    pX,
                    pY,
                    spX,
                    spY,
                    epX,
                    epY,
                    channelRadian
                );
            }
            channelRadian = cRS;
            if (cRS < cRE) {
                channelRadian = cRE;
            }
            return channelRadian;
        }

        //右转渠化半径调整
        //交点：pX, pY
        //圆弧起始点：cspX, cspY
        //圆弧终点：cepX, cepY
        //当前路口左下角：spX, spY
        //前一路口右下角：epX, epY
        //圆弧半径：cR
        function modifyChannelRadian(
            W,
            H,
            prevAngle,
            crntAngle,
            pX,
            pY,
            cspX,
            cspY,
            cepX,
            cepY,
            spX,
            spY,
            epX,
            epY,
            cR
        ) {
            var channelRadian = cR;
            var cRS = channelRadian;
            var cRE = channelRadian;
            //右转渠化外圈起始点（当前路口左下角）X
            var channelOutStartX = getChannelOutStartX(
                W,
                crntAngle,
                cspX,
                channelRadian
            );
            //右转渠化外圈起始点（当前路口左下角）Y
            var channelOutStartY = getChannelOutStartY(
                H,
                crntAngle,
                cspY,
                channelRadian
            );
            //右转渠化外圈终点（前一路口右下角）X
            var channelOutEndX =
                getChannelOutEndX(W, prevAngle, cepX, channelRadian) - W;
            //右转渠化外圈终点（前一路口右下角）Y
            var channelOutEndY = getChannelOutEndY(
                H,
                prevAngle,
                cepY,
                channelRadian
            );
            //外圈起始点与交点距离
            // var distStartP = Math.sqrt(Math.pow((channelOutStartX - pX), 2) +
            //     Math.pow((channelOutStartY - pY), 2));
            //外圈起始点与当前路口左下角距离
            var distStartSP = Math.sqrt(
                Math.pow(channelOutStartX - spX, 2) +
                Math.pow(channelOutStartY - spY, 2)
            );
            //当前路口左下角与交点距离
            var distSPP = Math.sqrt(Math.pow(pX - spX, 2) + Math.pow(pY - spY, 2));
            if (distStartSP < distSPP) {
                cRS = cRS + CROSS_CHANNEL_WIDTH;
            }
            //外圈终点与交点距离
            var distEndP = Math.sqrt(
                Math.pow(channelOutEndX - pX, 2) + Math.pow(channelOutEndY - pY, 2)
            );
            //前一路口右下角与交点距离
            var distEPP = Math.sqrt(Math.pow(pX - epX, 2) + Math.pow(pY - epY, 2));
            if (distEndP < distEPP) {
                cRE = cRE + CROSS_CHANNEL_WIDTH;
            }
            channelRadian = cRS;
            if (cRS < cRE) {
                channelRadian = cRE;
            }
            return channelRadian;
        }

        //右转渠化圆心X
        function getCircleCenterX(orgX, prevAngle, crntAngle, pX, channelRadian) {
            if (prevAngle > crntAngle) {
                crntAngle = crntAngle + 360;
            }
            //夹角的一半
            var angle1 = (crntAngle - prevAngle) / 2;
            var arc1 = (angle1 / 360) * 2 * Math.PI;
            var l1 = channelRadian / Math.sin(arc1);
            var angle2 = angle1 + prevAngle;
            var arc2 = (angle2 / 360) * 2 * Math.PI;
            var circleCenterX = pX + l1 * Math.sin(arc2);
            circleCenterX = orgX + circleCenterX;
            return circleCenterX;
        }

        //右转渠化圆心Y
        function getCircleCenterY(orgY, prevAngle, crntAngle, pY, channelRadian) {
            if (prevAngle > crntAngle) {
                crntAngle = crntAngle + 360;
            }
            var angle1 = (crntAngle - prevAngle) / 2;
            var arc1 = (angle1 / 360) * 2 * Math.PI;
            var l1 = channelRadian / Math.sin(arc1);
            var angle2 = angle1 + prevAngle;
            var arc2 = (angle2 / 360) * 2 * Math.PI;
            var circleCenterY = pY + l1 * Math.cos(arc2);
            circleCenterY = orgY - circleCenterY;
            return circleCenterY;
        }

        //右转渠化起始角度（弧度）
        function getChannelStartAngle(crntAngle) {
            var channelStartAngle = 90 + crntAngle;
            if (360 < channelStartAngle) {
                channelStartAngle = channelStartAngle - 360;
            }
            return (channelStartAngle / 360) * 2 * Math.PI;
        }

        //右转渠化终止角度（弧度）
        function getChannelEndAngle(prevAngle) {
            var channelEndAngle = 270 + prevAngle;
            if (360 < channelEndAngle) {
                channelEndAngle = channelEndAngle - 360;
            }
            return (channelEndAngle / 360) * 2 * Math.PI;
        }

        //右转渠化当前路口左下角（外圈起始点）X
        function getChannelOutStartX(orgX, crntAngle, pX, channelRadian) {
            var l1 = Math.sqrt(
                Math.pow(channelRadian + CROSS_CHANNEL_WIDTH, 2) -
                Math.pow(channelRadian, 2)
            );
            var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
            var channelOutStartX = pX - l1 * Math.sin(crntArc1);
            channelOutStartX = orgX + channelOutStartX;
            return channelOutStartX;
        }

        //右转渠化当前路口左下角（外圈起始点）Y
        function getChannelOutStartY(orgY, crntAngle, pY, channelRadian) {
            var l1 = Math.sqrt(
                Math.pow(channelRadian + CROSS_CHANNEL_WIDTH, 2) -
                Math.pow(channelRadian, 2)
            );
            var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
            var channelOutStartY = pY - l1 * Math.cos(crntArc1);
            channelOutStartY = orgY - channelOutStartY;
            return channelOutStartY;
        }

        //右转渠化前一路口右下角（外圈终点）X
        function getChannelOutEndX(orgX, crntAngle, pX, channelRadian) {
            var l1 = Math.sqrt(
                Math.pow(channelRadian + CROSS_CHANNEL_WIDTH, 2) -
                Math.pow(channelRadian, 2)
            );
            var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
            var channelOutEndX = pX - l1 * Math.sin(crntArc1);
            channelOutEndX = orgX + channelOutEndX;
            return channelOutEndX;
        }

        //右转渠化前一路口右下角（外圈终点）Y
        function getChannelOutEndY(orgY, crntAngle, pY, channelRadian) {
            var channelOutEndY;
            var l1 = Math.sqrt(
                Math.pow(channelRadian + CROSS_CHANNEL_WIDTH, 2) -
                Math.pow(channelRadian, 2)
            );
            var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
            channelOutEndY = pY - l1 * Math.cos(crntArc1);
            channelOutEndY = orgY - channelOutEndY;
            return channelOutEndY;
        }

        //右转渠化外圈起始角度（弧度）
        function getChannelOutStartAngle(startAngle, channelRadian) {
            var arc1 = Math.acos(
                channelRadian / (channelRadian + CROSS_CHANNEL_WIDTH)
            );
            return startAngle + arc1;
        }

        //右转渠化外圈终止角度（弧度）
        function getChannelOutEndAngle(endAngle, channelRadian) {
            var arc1 = Math.acos(
                channelRadian / (channelRadian + CROSS_CHANNEL_WIDTH)
            );
            return endAngle - arc1;
        }

        return drawData;
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



