import * as d3 from "d3";


// 十字路口
export function crossroads(w, h = 300) {
    var data = [
        { x: 100, y: 100 },
        { x: 150, y: 200 },
        { x: 100, y: 300 },
    ];
    const linePath = d3.symbol().type(d3.symbolStar).size(10*64)

    const svg = d3.create('svg')
        .attr('width', h)
        .attr('height', h)

    const path = svg.append('g')
        .attr('transform', `translate(150, 150)`)
        .append('path')
        .attr('d', linePath())
        .attr("stroke", "black")
        .attr("fill", "yellow");


    return svg.node()


}

// 双十字路口
export function doubleCrossroads() {

}

/**
 * 环状交叉路
 */
export function roundabout() {

}

// 行人二次过街

export function twiceCross() {

}

