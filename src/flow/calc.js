import { DIRECTION } from "./config";
/**
 * 根据方向获取 translate 的起始偏移量
 * 
 * @param {Number} a 画布的边长
 * @param {Number} w 路标的宽度
 * @param {Number} d 方向
 * @returns {Object} 方向起始translate坐标数组
 */
const getTranslateStartMap = (a, w, d) => {
    const map = {
        [DIRECTION.east]: [a, a / 2 - w / 2],
        [DIRECTION.west]: [0, a / 2 + w / 2],
        [DIRECTION.south]: [a / 2 + w / 2, a],
        [DIRECTION.north]: [a / 2 - w / 2, 0],
        [DIRECTION.eastNorth]: [0, 0],
        [DIRECTION.westNorth]: [0, 0],
        [DIRECTION.eastSouth]: [0, 0],
        [DIRECTION.westSouth]: [0, 0],
    }
    return map[d]
}

/**
 * 获取 translate 的值
 * 
 * @param {Number} a svg边长
 * @param {Number} w 图形的宽度
 * @param {Number} d 方向
 * @param {Number} i index
 * @param {Number} gap 多个图形之间的间距
 * @returns {String} 
 */

export const calcTranslate = (a, w, d, i, gap) => {
    const startCoor = getTranslateStartMap(a, w, d)
    if (d === DIRECTION.east) {
        startCoor[1] -= (w + gap) * i
    }
    if (d === DIRECTION.west) {
        startCoor[1] += (w + gap) * i
    }
    if (d === DIRECTION.south) {
        startCoor[0] += (w + gap) * i
    }
    if (d === DIRECTION.north) {
        startCoor[0] -= (w + gap) * i
    }
    return startCoor.join(',')
}

/**
 * 根据方向计算 rotate 的值
 * 
 * @param {String} d 方向
 * @returns {Number}
 */
export const calcRotate = (d) => {
    const map = {
        [DIRECTION.east]: 90,
        [DIRECTION.west]: 270,
        [DIRECTION.south]: 180,
        [DIRECTION.north]: 0,
        [DIRECTION.eastNorth]: 45,
        [DIRECTION.westNorth]: 315,
        [DIRECTION.eastSouth]: 135,
        [DIRECTION.westSouth]: 225,
    }
    return map[d]
}