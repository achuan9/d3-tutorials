
import data from "./testData";
import { width, height, margin, color } from "./config";

const time = 10 * 60

const distance = data.crosses.reduce((sum, cur) => sum + cur.distance, 0)

const xDomain = d3.extent([0, distance])
const yDomain = d3.extent([0, time]) // 十分钟的秒数

const x = d3.scaleLinear()
    .domain(xDomain)
    .range([margin.left, width - margin.right - 10])

const y = d3.scaleLinear()
    .domain(yDomain)
    .range([height - margin.bottom, margin.top])


const svg = d3.create('svg')
    .attr('width', width)
    .attr('height', height);


drawAxis()
drawAxisLabel()


data.crosses.reduce((sum, cur) => {
    const { cycle, cycleSignal } = cur.plan;
    const startX = sum + cur.distance;
    let startY = -sum * 0.5
    console.log(startY);
    
    drawCycleSignalGroup(time, cycle, startX, startY,cycleSignal)
    return startX
}, 0)

function drawCycleSignalGroup(time, cycle, startX, startY, cycleSignal) {
    const times = Math.ceil(time / cycle)
    
    for (let i = 0, len = times; i < len; i++) {
        drawCycleLine(cycle * (i + 1))
        drawCycleSignal(startX, startY, cycleSignal)
        startY += cycle
    }
}
// 画周期信号灯组
function drawCycleSignal(startX, startY, cycleSignal) {
    const g = svg.append('g')
        .attr('class', 'cycle-signal')
        .attr('transform', `translate(${x(startX)}, 0)`)
    for (const key in cycleSignal) {
        g.append('line')
            .attr('x1', 0)
            .attr('y1', y(startY))
            .attr('x2', 0)
            .attr('y2', y(startY += cycleSignal[key]))
            .attr('stroke', color[key])
            .attr('stroke-width', 3)

    }
}

// 画坐标轴
function drawAxis() {
    // x 轴
    svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .attr('class', 'x axis')
        .call(d3.axisBottom(x).tickPadding(6))
    // y 轴
    svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .attr('class', 'y axis')
        .call(d3.axisLeft(y))
}
// 画坐标轴的label
function drawAxisLabel() {
    svg.append('g')
        .append("text")
        .attr("class", "x axis-label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - margin.bottom)
        .text("距离");

    svg.append('g')
        .append("text")
        .attr("class", "y axis-label")
        .attr("text-anchor", "middle")
        .attr("x", margin.left)
        .attr("y", 18)
        .text("时间")
}

// 画周期横虚线
function drawCycleLine(cycleVal) {
    svg.append('g')
        .attr("class", "benchmark-line")
        .datum(cycleVal)
        .append('line')
        .attr('x1', margin.left)
        .attr('x2', width - margin.right)
        .attr('y1', d => y(d))
        .attr('y2', d => y(d))
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', 5)
        .attr('stroke', '#222');
}

const cl = d3.color("green")
cl.opacity = 0.4

const area = d3.area()
    .x0(d => x(d))
    .x1(d => x(d))
    .y0(d => y(d- 200))
    .y1(d => y(d))

svg.append('path')
    .datum([200, 400])
    .attr('d', area)
    .attr('fill', cl)


// svg.append('g')
//     .attr('class', 'rect')
//     .call(createGreenWave, 500, 0, 540, 45)


export default svg.node()