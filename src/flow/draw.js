
/**
 * 画直行标示
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawStraight = (path, x, y, w = 10) => {
    const h = w * 3
    // 三角形的高
    const th = h / 3
    // 矩形的宽高
    const rw = w / 3;
    const rh = h - th;

    path.rect(x - rw / 2, y, rw, rh);

    path.moveTo(x - rw / 2, rh)
    path.lineTo(x - w / 2, rh)
    path.lineTo(x, rh + th)
    path.lineTo(x + w / 2, rh)
    path.closePath()

    return path
}

/**
 * 画辅助线
 * 
 * @param {Element} svg svg对象
 * @param {d3.path} path d3.path()
 * @param {Number} a svg的边长
 * @param {Number} space 相对方向间距
 * @returns {d3.path} 
 */
export const drawReferenceLine = (svg, path, a, space) => {

    const getPath = (path, a, space) => {
        const halfSpace = space / 2
        const halfA = a / 2

        const p1 = [halfA, 0]
        const p2 = [p1[0], halfA - halfSpace]
        const p3 = [p1[0] + halfSpace, p2[1]]
        const p4 = [p3[0], halfA]
        const p5 = [a, halfA]
        //moveTo p4
        const p6 = [p3[0], p4[1] + halfSpace]
        const p7 = [p1[0], p4[1] + halfSpace]
        const p8 = [p1[0], a]
        //moveTo p7
        const p9 = [p1[0] - halfSpace, p7[1]]
        const p10 = [p9[0], halfA]
        const p11 = [0, halfA]
        //moveTo p10
        const p12 = [p1[0] - halfSpace, p2[1]]

        // const p2 = 
        path.moveTo(...p1)
        path.lineTo(...p2)
        path.lineTo(...p3)
        path.lineTo(...p4)
        path.lineTo(...p5)

        path.moveTo(...p4)
        path.lineTo(...p6)
        path.lineTo(...p7)
        path.lineTo(...p8)

        path.moveTo(...p7)
        path.lineTo(...p9)
        path.lineTo(...p10)
        path.lineTo(...p11)

        path.moveTo(...p10)
        path.lineTo(...p12)
        path.lineTo(...p2)
        return path
    }

    svg.append('path')
        .attr('fill', 'none')
        .attr('stroke', '#fff')
        .attr('stroke-width', "2")
        .attr('d', getPath(path, a, space))


}