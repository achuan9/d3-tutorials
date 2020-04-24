import * as d3 from "d3";


// 十字路口
export function crossroads(w, h = 900) {
    var data = [
        { x: 100, y: 100 },
        { x: 150, y: 200 },
        { x: 100, y: 300 },
    ];
    const linePath = d3.symbol().type(d3.symbolStar).size(10 * 64)

    const svg = d3.create('svg')
        .attr('width', h)
        .attr('height', h)

    const rightPresentBottomX = 379, rightPresentBottomY = 181,
        leftBottomX = 241, leftBottomY = 181,
        contrPX = 241, contrPY = 241,
        rightBottomX = 181, rightBottomY = 241,
        W = 310, H = 310;

    svg
        .append('g')
        .attr('transform', 'translate(10, 10)')
        .append('path')
        .attr('d', "M " + rightPresentBottomX + " " + rightPresentBottomY + "    L" +
            leftBottomX + " " + leftBottomY + "    Q" +
            contrPX + " " + contrPY + ", " + rightBottomX + " " + rightBottomY + " Q" +
            rightBottomX + " " + rightBottomY + ", " + W + " " + H + " Z")
        .attr("stroke", "#527c88")
        .attr("stroke-width", "2")
        .attr("fill", "#527c88");
    // svg
    //     .append('g')
    //     .attr('transform', 'translate(100, 100)')
    //     .append('path')
    //     .attr('d', "M " + rightPresentBottomX + " " + rightPresentBottomY + "    L" +
    //         leftBottomX + " " + leftBottomY + "    Q" +
    //         contrPX + " " + contrPY + ", " + rightBottomX + " " + rightBottomY + " Q" +
    //         rightBottomX + " " + rightBottomY + ", " + W + " " + H + " Z")
    //     .attr("stroke", "#527c88")
    //     .attr("stroke-width", "2")
    //     .attr("fill", "#527c88");


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

