import * as d3 from "d3";


const width = document.body.clientWidth;
const height = 500
const data = [
    { name: 'a', value: 1 },
    { name: "b", value: 2 },
    { name: "c", value: 3 },
    { name: "d", value: 4 },
    { name: "e", value: 5 },
    { name: "f", value: 4 },
    { name: "g", value: 3 },
    { name: "h", value: 2 },
]
const margin = {
    top: 20,
    right: 30,
    bottom: 30,
    left: 40
}


const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1)


const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height - margin.bottom, margin.top])

const yTitle = g => g.append('text')
    // .attr('x', 0)
    // .attr('y', 0)
    .attr('dy', '1em')
    .attr('text-anchor', 'middle')
    .attr('font-size', '12px')
    .attr('fill', 'red')
    .text('y轴')

const xTitle = g => g.append('text')
    .attr('x', width)
    .attr('y', 0)
    .attr('dy', '.5em')
    .attr('text-anchor', 'end')
    .attr('font-size', '12px')
    .attr('fill', 'red')
    .text('x轴')

const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height]);

// 添加柱状
const g = svg.append('g')
    .attr('fill', 'steelblue')
    .selectAll('g')
    .data(data)
    .join('g')

g.append('rect')
    .attr('x', d => x(d.name))
    .attr('y', d => y(d.value))
    .attr('width', x.bandwidth())
    .attr('height', d => y(0) - y(d.value))
g.append('text')
    .attr('x', d => x(d.name) + x.bandwidth() / 2)
    .attr('y', d => y(d.value))
    .attr('text-anchor', 'middle')
    .attr('font-size', '12px')
    .attr('fill', 'red')
    .text(d => d.value)
// 添加 x 轴
svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    .call(xTitle);

// 添加 y 轴
svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(yTitle)



export default svg.node()