
const data = [
    {label: 'a', value: 100, distance: 500},
    {label: 'b', value: 120, distance: 400},
    {label: 'c', value: 130, distance: 300},
    {label: 'd', value: 140, distance: 200},
    {label: 'e', value: 90, distance: 500},
    {label: 'f', value: 70, distance: 600}
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

const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.distance)])
    .range([STYLE.margin.left, STYLE.width - STYLE.margin.right - 10])
    .paddingInner(10)

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([STYLE.height - STYLE.margin.bottom, STYLE.margin.top])

const xAxis = g => g
    .attr('transform', `translate(0, ${STYLE.height - STYLE.margin.bottom})`)
    .call(g => g.append('text')
        .attr('text-anchor', 'end')
        .attr('font-weight', 'bold')
        .text('路口'))
    .call(d3.axisBottom(xScale).ticks(10, "s").tickSizeInner(4).tickSizeOuter(8).tickPadding(14))

const yAxis = g => g
    .attr('transform', `translate(${STYLE.margin.left}, 0)`)
    .attr('class', 'y axis')
    .call(d3.axisLeft(yScale))

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