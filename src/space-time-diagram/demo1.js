import { width, height, margin } from "./config";


const monthArrToString = function (arr) {
    return arr.reduce(function (acc, val) { return acc + '/' + val.toString(); })
};
const monthParse = d3.timeParse("%m/%y")
const data = (function () {
    let monthArr = [1, 10], months = 120, arr = [];
    let upper_quartile = 110 + Math.random() * 5;
    let median = upper_quartile * 0.6, lower_quartile;
    for (var m = 0; m < months; m++) {
        if (monthArr[0]++ === 12) { monthArr[0] = 1; monthArr[1]++; }
        upper_quartile = Math.max(60 + 5 * Math.random(), upper_quartile - 6.51 + (11.25 * Math.random()));
        median = Math.min((median - 2.5 + (4 * Math.random())), upper_quartile * 0.8);
        lower_quartile = median * (0.6 + 0.1 * Math.random());
        arr.push([
            monthParse(monthArrToString(monthArr)),
            upper_quartile,
            median,
            lower_quartile
        ]);
    }
    return arr;
})()

const x = d3.scaleTime()
    .domain([monthParse("1/10"), monthParse("1/16")])
    .range([margin.left, width - margin.right - 10])

const y = d3.scaleLinear()
    .domain([0, 300])
    .range([height - margin.bottom, margin.top])

const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(g => g.append("text")
        .attr("text-anchor", "end")
        .attr("font-weight", "bold")
        .text("Year"))
    .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y")).ticks(width / 120).tickSizeOuter(0))


const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .attr("class", 'y axis')
    .call(d3.axisLeft(y));

const drawLines = g => {
    g.append('path').classed('medianLine', true)
        .attr("d", medianLine);
    g.append('path').classed('qLine', true)
        .attr("d", q1Line);
    g.append('path').classed('qLine', true)
        .attr("d", q3Line);
}
const medianLine = d3.line()
    .x(d => x(d[0]))
    .y(d => y(d[2]))
const q1Line = d3.line()
    .x(d => x(d[0]))
    .y(d => y(d[3]))

const q3Line = d3.line()
    .x(d => x(d[0]))
    .y(d => y(d[1]))



const kenyalines = g => {
    if (g.select('path').node() === null) {
        g.append('path').classed('medianLine', true)
            .attr("d", medianLine);
        g.append('path').classed('q1Line', true)
            .attr("d", q1Line)
        g.append('path').classed('q3Line', true)
            .attr("d", q3Line)
    }
    else {
        g.select('.medianLine').attr("d", medianLine);
        g.select('.q1Line').attr("d", q1Line);
        g.select('.q3Line').attr("d", q3Line);
    }
    return g;
}



const svg = d3.create('svg')
    .attr('width', width)
    .attr('height', height);

svg.append("g")
    .call(xAxis);

svg.append("g")
    .call(yAxis);

// Add an x-axis label.
svg.append("text")
    .attr("class", "x axislabel")
    .attr("text-anchor", "end")
    .attr("x", width - margin.right)
    .attr("y", height - margin.bottom / 4)
    .text("date");

// Add an y-axis label.
svg.append("text")
    .attr("class", "x axislabel")
    .attr("text-anchor", "end")
    .attr("x", -margin.top)
    .attr("y", margin.left / 4)
    .text("monthly customer consumption (kWh)")
    .attr('transform', 'rotate(-90)');

let keygroup = svg.append('g')
    .attr('class', 'keygroup')
    .attr('width', 200)
    .attr("transform", `translate(${margin.left * 2},${height * 0.5 - margin.bottom - 40})`);
let keyItems = keygroup.selectAll('g.keyItem')
    .data(['1st quartile', 'Median', '3rd quartile'])
    .enter().append('g').attr('class', 'keyItem')
    .attr("transform", (d, i) => `translate(0,${-20 * i})`);
let keyItemClasses = ['q1Line', 'medianLine', 'q3Line'];
keyItems.append("text")
    .attr("class", "yearlabel")
    .attr("text-anchor", "start")
    .attr("x", 30)
    .text(d => d);
keyItems.append('path')
    .attr('class', (d, i) => keyItemClasses[i])
    .attr('d', 'M 4 -5 L 10 -6 L 15 -4 L 20 -6')
    .attr("fill", 'none');


let korea = svg.append('g')
    .attr("class", "korea benchmarkline")
    .datum(120);
korea.append('line')
    .attr('x1', margin.left).attr('x2', width - margin.right)
    .attr('y1', d => y(d)).attr('y2', d => y(d))
    .attr('stroke-width', 1).attr('stroke-dasharray', 5).attr('stroke', '#222')
korea.append('text')
    .attr('x', width - margin.right)
    .attr('text-anchor', 'end')
    .attr('y', d => y(d)).attr('dy', -10)
    .text("median monthly consumption in S. Korea");

let de = svg.append('g')
    .attr("class", "germany benchmarkline")
    .datum(264);
de.append('line')
    .attr('x1', margin.left).attr('x2', width - margin.right)
    .attr('y1', d => y(d)).attr('y2', d => y(d))
    .attr('stroke-width', 1).attr('stroke-dasharray', 5).attr('stroke', '#222')
de.append('text')
    .attr('x', width - margin.right)
    .attr('text-anchor', 'end')
    .attr('y', d => y(d)).attr('dy', -10)
    .text("median monthly consumption in Germany");

let kenya = svg.append('g')
    .attr("class", "kenya trendline")
    .datum(data)
    .call(kenyalines);

kenya.append('text')
    .attr('x', width - margin.right)
    .attr('text-anchor', 'end')
    .attr('y', y(data[60][1])).attr('dy', -10)
    .text("Monthly consumption in Kenya");

svg.node().update = () => {
    let newLimit = (y.domain()[1] === 150) ? 300 : 150;
    y.domain([0, newLimit]);

    svg.selectAll("line")
        .transition().duration(500)
        .attr('y1', d => y(d)).attr('y2', d => y(d))
    svg.selectAll(".benchmarkline text")
        .transition().duration(500)
        .attr('y', d => y(d));
    svg.select(".trendline text")
        .transition().duration(500)
        .attr('y', y(data[60][1]));
    svg.select("g.kenya")
        .transition().duration(500)
        .call(kenyalines);
    svg.selectAll(".y.axis")
        .transition().duration(500)
        .call(yAxis);
}
// setInterval(() => {
    
//     svg.node().update()
// }, 1000);
export default svg.node();