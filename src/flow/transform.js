import { DIRECTION, ROTATE } from "./config";

export default class Translate {

    constructor(svgSideLength, direction, gap) {
        this.svgSideLength = svgSideLength;
        this.direction = direction;
        this.gap = gap
        // 第一个标志的宽度
        this._firstWidth = 0
        // 坐标
        this._coordinate = []
        // 计算起始坐标函数
        this._calcStartFn = null;
        // 计算当前坐标函数
        this._calcCurrentFn = null;
        this._init()
    }

    getTranslate(w) {
        let c = []
        if (!this._firstWidth) {
            this._firstWidth = w;
            c = this._calcStartFn(this.svgSideLength, w)
        } else {
            const { _coordinate } = this;
            const curItemBoxWidth = w + this.gap;
            const preItemCoordinate = _coordinate[_coordinate.length - 1]
            c = this._calcCurrentFn(preItemCoordinate, curItemBoxWidth)
        }

        this._coordinate.push(c)
        return c.join(',')
    }
    getRotate() {
        return ROTATE[this.direction]
    }

    _init() {
        const calcCurrentMap = {
            [DIRECTION.east]: (c, w) => ([c[0], c[1] - w]),
            [DIRECTION.west]: (c, w) => ([c[0], c[1] + w]),
            [DIRECTION.south]: (c, w) => ([c[0] + w, c[1]]),
            [DIRECTION.north]: (c, w) => ([c[0] - w, c[1]]),
        }
        const calcStartMap = {
            [DIRECTION.east]: (a, w) => ([a, (a - w) / 2]),
            [DIRECTION.west]: (a, w) => ([0, (a + w) / 2]),
            [DIRECTION.south]: (a, w) => ([(a + w) / 2, a]),
            [DIRECTION.north]: (a, w) => ([(a - w) / 2, 0]),
        }
        this._calcStartFn = calcStartMap[this.direction]
        this._calcCurrentFn = calcCurrentMap[this.direction]
    }


}