import { DIRECTION, ROTATE, FLOW_PATH_WIDTH } from "./config";

export default class Translate {

    constructor(svgSideLength, direction, gap) {
        this.svgSideLength = svgSideLength;
        this.direction = direction;
        this.gap = gap
        this.lastOffset = 0 // 最后一个偏移量
        this.startCoordinate = '' // 起始坐标
        this._init()
    }

    getOffset(d) {
        const ret = this.lastOffset;
        const w = FLOW_PATH_WIDTH[d]
        console.log(w, ret);
        
        this.lastOffset -= (w + this.gap);
        return ret
    }
    getRotate() {
        return ROTATE[this.direction]
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
        this.startCoordinate = startMap[this.direction].join(',')
    }

}