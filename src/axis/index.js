
const data = [
    {label: 'a', value: 100},
    {label: 'b', value: 120},
    {label: 'c', value: 130},
    {label: 'd', value: 140},
    {label: 'e', value: 90},
    {label: 'f', value: 70},
]
const STYLE = {
    width: 600,
    height: 600,
    margin: {
        left: 30,
        right: 10,
        top: 10,
        bottom: 30
    }
}

const xDomain = d3.extent(data, d => d.value)

const x = d3.scaleLinear()
    .domain(xDomain)
    .range([STYLE.margin.left, STYLE.width - STYLE.margin.right - 10])

const y = d3.scaleLinear()
    .domain([0, 140])
    .range([STYLE.height - STYLE.margin.bottom, STYLE.margin.top])

const xAxis = g => g
    .attr('transform', `translate(0, ${STYLE.height - STYLE.margin.bottom})`)
    .call(g => g.append('text')
        .attr('text-anchor', 'end')
        .attr('font-weight', 'bold')
        .text('路口'))
    .call(d3.axisBottom(x))

const yAxis = g => g
    .attr('transform', `translate(${STYLE.margin.left}, 0)`)
    .attr('class', 'y axis')
    .call(d3.axisLeft(y))

const svg = d3.create('svg')
    .attr('width', STYLE.width)
    .attr('height', STYLE.height);

svg.append('g')
    .call(xAxis)

svg.append('g')
    .call(yAxis)


export default {
    render: function (wrapper) {
        wrapper.appendChild(svg.node())
    }
}