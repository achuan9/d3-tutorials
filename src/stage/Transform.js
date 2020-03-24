import { DIRECTION, ROTATE, FLOW_PATH_WIDTH } from "./config";

export default class Transform {

    constructor(svgSideLength, direction, gap) {
        this.svgSideLength = svgSideLength;
        this.direction = direction;
        this.gap = gap
        this.lastOffset = 0 // 最后一个偏移量
        this.translate = '' // 起始坐标
        this.rotate = '' // 其实旋转角度
        this._init()
    }
    /**
     * 获取 transform 的值
     * 
     * 根据方向获取初始定位
     * 
     * @returns {String} transform的值
     * 
     */
    getTransform() {
        return `translate(${this.translate}) rotate(${this.rotate})`
    }
    
    /**
     * 根据每个相位获取对应偏移量
     * 
     * @param {Number} d flowDirection 流向
     * @returns {Number} 偏移值
     */
    getOffsetX(d) {
        const ret = this.lastOffset;
        const w = FLOW_PATH_WIDTH[d]
        this.lastOffset -= (w + this.gap);
        return ret
    }

    _init() {
        const a = this.svgSideLength;

        const startMap = {
            [DIRECTION.east]: [a, a / 2],
            [DIRECTION.west]: [0, a / 2],
            [DIRECTION.south]: [a / 2, a],
            [DIRECTION.north]: [a / 2, 0],
            [DIRECTION.eastNorth]: [a - a / 8, a / 8],
            [DIRECTION.westNorth]: [a / 8, a / 8],
            [DIRECTION.eastSouth]: [a - a / 8, a - a / 8],
            [DIRECTION.westSouth]: [a / 8, a - a / 8],
        }
        this.translate = startMap[this.direction].join(',')
        this.rotate = ROTATE[this.direction]
    }
}