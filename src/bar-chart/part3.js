import * as d3 from "d3";
import { CHART_WIDTH, CHART_HEIGHT, COLOR } from "./config";

async function initChart() {
    const data = await d3.csv('./static/assets/data.csv', d3.autoType)

    const x = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([0, CHART_WIDTH])

    const y = d3
    .scaleBand()
    .domain(data.map(item => item.name))
    .range([0, CHART_HEIGHT * data.length])

    const svg = d3
    .create('svg')
    .attr('width', CHART_WIDTH)
    .attr('height', y.range()[1])
    .attr('font-size', '10px')
    .attr('text-anchor', 'end')
    .style('background', '#ccc')
    

    const bar = svg
    .selectAll('g')
    .data(data)
    .join('g')
    .attr('transform', (d, i) => `translate(0, ${y.bandwidth() * i})`)

    bar.append('rect')
    .attr('width', d => x(d.value))
    .attr('height', CHART_HEIGHT - 1)
    .attr('fill', COLOR)

    bar.append('text')
    .attr('x', d => x(d.value) - 6)
    .attr('y', y.bandwidth() / 2)
    .attr('dy', '.2em')
    .attr('fill', '#fff')
    .text(d => `${d.name}: ${d.value}`)
    
    
    document.body.appendChild(svg.node())
}

export default initChart

