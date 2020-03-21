// https://observablehq.com/@d3/lets-make-a-bar-chart

import * as d3 from "d3";
import { DATA, CHART_WIDTH, CHART_HEIGHT, FONT_SIZE } from "./config";
import { COLOR } from "./config";

const X = d3
  .scaleLinear()
  .domain([0, d3.max(DATA)])
  .range([0, CHART_WIDTH]);

const Y = d3
  .scaleBand()
  .domain(d3.range(DATA.length))
  .range([0, DATA.length * 25]);

const SVG = d3
  .create("svg")
  .attr("width", CHART_WIDTH)
  .attr("height", (CHART_HEIGHT + 1) * DATA.length)
  .attr("font-size", FONT_SIZE)
  .attr("text-anchor", "end");

const bar = SVG.selectAll("g")
  .data(DATA)
  .join("g")
  .attr("transform", (d, i) => `translate(0, ${i * CHART_HEIGHT + 1})`);

bar.append("rect")
.attr("fill", COLOR)
.attr('x', 0)
.attr('y', 0)
.attr('width', X)
.attr('height', CHART_HEIGHT)

bar.append("text").text(d => d);
export default SVG.node();
