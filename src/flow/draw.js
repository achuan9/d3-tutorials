/**
 * 画三角形 
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @param {Number} h 图形的高度
 * @param {Number} gap 缺口的宽度
 * @returns {d3.path} 
 */
export const drawTriangle = (path, x, y, w, h, gap) => {
    const sX = x - (gap / 2) // 起点
    const eX = x + (gap / 2) // 终点
    const aW = (w - gap) / 2 // 开口两边底的宽度
    const lX = sX - aW
    const rX = eX + aW;
    const vY = y + h // vertex 定点的 Y 坐标
    path.moveTo(sX, y)
    path.lineTo(lX, y)
    path.lineTo(x, vY)
    path.lineTo(rX, y)
    path.lineTo(eX, y)
    return path;
}

/**
 * TODO: 左转
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */

export const drawTurnLeft = (path, x, y, w) => {
    
}

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
    path = drawTriangle(path, x, rh, w, th, rw)
    path.closePath()
    return path
}

/**
 * TODO: 右转
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnRight = (path, x, y, w) => {
    
}
/**
 * TODO: 直左
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawStraightLeft = (path, x, y, w) => {
    
}
/**
 * TODO: 直右
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawStraightRight = (path, x, y, w) => {
    
}
/**
 * TODO: 左右
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawLeftRight = (path, x, y, w) => {
    
}
/**
 * TODO: 左直右
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawLeftStraightRight = (path, x, y, w) => {
    
}
/**
 * TODO: 掉头
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnAround = (path, x, y, w) => {
    
}
/**
 * TODO: 掉头左转
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnAroundLeft = (path, x, y, w) => {
    
}
/**
 * TODO: 掉头直行
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnAroundStraight = (path, x, y, w) => {
    
}
/**
 * TODO: 掉头右转
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnAroundRight = (path, x, y, w) => {
    
}

/**
 * TODO: 掉头直左
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnAroundStraightLeft = (path, x, y, w) => {
    
}

/**
 * TODO: 掉头直右
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnAroundStraightRight = (path, x, y, w) => {
    
}
/**
 * TODO: 掉头左右
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnAroundLeftRight = (path, x, y, w) => {
    
}
/**
 * TODO: 掉头左直右
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawTurnAroundLeftStraightRight = (path, x, y, w) => {
    
}
/**
 * TODO: 行人一段过街
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawCrossHalf = (path, x, y, w) => {
    
}
/**
 * TODO: 行人一次过街
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawCrossOnce = (path, x, y, w) => {
    
}
/**
 * TODO: 行人二次过街
 * 
 * @param {d3.path} path d3.path对象
 * @param {Number} x 起点x坐标 图形宽度中点
 * @param {Number} y 起点y坐标 图形宽度中点
 * @param {Number} w 图形的宽度
 * @returns {d3.path} 
 */
export const drawCrossTwice = (path, x, y, w) => {
    
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