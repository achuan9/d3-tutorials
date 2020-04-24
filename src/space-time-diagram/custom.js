
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
drawAxisLabel('距离', '时间')

data.crosses.reduce((pre, cur) => {
    drawCycleSignalGroup(cross.distance, 120 * 4, cross.cycle, cross.greenTime, cross.offset)    
}, {})
for (const cross of data.crosses) {
}


function drawGreenWave(params) {
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


    svg.append('g')
        .attr('class', 'rect')
        .call(createGreenWave, 500, 0, 540, 45)
}


function drawCycleSignalGroup(distance, duration, cycle, greenTime, offset) {
    const time = duration / cycle;
    const cycleSignalBrush = createCycleSignalBrush(distance, cycle, greenTime, offset)

    for (let i = 0; i < time; i++) {
        drawCycleLine(cycle * (i + 1))
        cycleSignalBrush(i)
    }
}

// 画一个周期内的绿灯
function createCycleSignalBrush(distance, cycle, greenTime, offset) {
    const group = svg.append('g')
        .attr('class', 'cycle-signal-group')
        .attr('transform', `translate(${x(distance)}, 0)`)
    return function (time) {
        const startY = time * cycle + offset;
        if (offset > 0 && time === 0) {
            group.append('line')
                .attr('x1', 0)
                .attr('y1', y(0))
                .attr('x2', 0)
                .attr('y2', y(startY))
                .attr('stroke', 'red')
                .attr('stroke-width', 4)
        }
        group.append('line')
            .attr('x1', 0)
            .attr('y1', y(startY))
            .attr('x2', 0)
            .attr('y2', y(startY + greenTime))
            .attr('stroke', 'green')
            .attr('stroke-width', 4)
        group.append('line')
            .attr('x1', 0)
            .attr('y1', y(startY + greenTime))
            .attr('x2', 0)
            .attr('y2', y(startY + cycle))
            .attr('stroke', 'grey')
            .attr('stroke-width', 4)
    }

}

// 画坐标轴
function drawAxis() {
    // x 轴
    svg.append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .attr('class', 'x axis')
        .call(d3.axisBottom(x).tickPadding(6).ticks(10))
    // y 轴
    svg.append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .attr('class', 'y axis')
        .call(d3.axisLeft(y))
}
// 画坐标轴的label
function drawAxisLabel(xLabel, yLabel) {
    svg.append('g')
        .append("text")
        .attr("class", "x axis-label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - margin.bottom)
        .text(xLabel);

    svg.append('g')
        .append("text")
        .attr("class", "y axis-label")
        .attr("text-anchor", "middle")
        .attr("x", margin.left)
        .attr("y", 18)
        .text(yLabel)
}

// 画周期分割线
function drawCycleLine(cycle) {
    svg.append('g')
        .attr("class", "benchmark-line")
        .datum(cycle)
        .append('line')
        .attr('x1', margin.left)
        .attr('x2', width - margin.right)
        .attr('y1', d => y(d))
        .attr('y2', d => y(d))
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', 5)
        .attr('stroke', '#222');
}



export default svg.node()