// https://observablehq.com/@d3/lets-make-a-bar-chart

import * as d3 from "d3";
import { DATA, CHART_WIDTH, FONT_SIZE } from "./config";
import { COLOR } from './config';

const SCALE = d3
  .scaleLinear()
  .domain([0, d3.max(DATA)])
  .range([0, CHART_WIDTH]);

const DIV = d3
  .create("div")
  .style("text-align", "right")
  .style("font-size", FONT_SIZE)
  .style("color", "#fff")
  .style("background-color", "#ccc");

DIV.selectAll("div")
  .data(DATA)
  .join("div")
  .style("width", d => `${SCALE(d)}px`)
  .style("padding", "3px")
  .style("margin", "1px")
  .style("background-color", COLOR)
  .text(d => d);

export default DIV.node();
