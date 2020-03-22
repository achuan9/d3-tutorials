import { DIRECTION } from "./config";

/**
 * 画直行标示
 * 上 右 下 左 的顺序画
 * 
 * @param {Number} x 图形的边缘x坐标
 * @param {Number} y 图形的边缘y起始坐标
 * @param {Number} width 整个图形的宽度
 * @param {Number} height 整个图形的高度
 * @param {Number} direction 方向
 */
export const drawStraight = (x, y, w, h, direction) => {
    // 三角形的宽高
    const tw = w / 4 // 三角形宽度减去矩形宽度的一半
    const th = h / 3
    // 矩形的宽高
    const rw = w - tw * 2;
    const rh = h - th;


    const RESET_MAP = {
        [DIRECTION.east]: () => {
            y = y - tw;
        },
        [DIRECTION.west]: () => {
            y = y + tw;
        },
        [DIRECTION.north]: () => {
            x = x - tw;
        },
        [DIRECTION.south]: () => {
            x = x + tw;
        }
    }


    RESET_MAP[direction]();


    // 方向不同的坐标
    const POINTS_MAP = {
        [DIRECTION.east]: [
            [x - rh, y],
            [x - rh, y + tw],
            [x - rh - th, y - rw / 2],
            [x - rh, y - tw - rw],
            [x - rh, y - rw],
            [x, y - rw]
        ],
        [DIRECTION.west]: [
            [x - rh, y]
            [x - w, y],
        ],
        [DIRECTION.north]: [
            [x + rw, y]
            [x + rw, y + rh],
            [x + rw + tw, y + rh],
            [x + rw / 2, y + rh + th],
            [x - tw, y + rh],
            [x, y + rh]
        ]
    }

    console.log(POINTS_MAP[direction], DIRECTION.east, direction);
    const curPoints = POINTS_MAP[direction]
    curPoints.unshift([x, y])


    const pathStr = curPoints.join(' L')
    console.log(pathStr);

    return `M${pathStr}`
}

/**
 * 画辅助线
 * @param {Path} path d3.path()
 * @param {Number} width svg的宽度
 * @param {Number} height svg的高度
 * @param {Number} relativeSpace 相对方向的间距
 */
export const drawReferenceLine = (path, width, height, relativeSpace) => {

    const halfSpace = relativeSpace / 2

    const p1 = [width / 2, 0]
    const p2 = [p1[0], height / 2 - halfSpace]
    const p3 = [p1[0] + halfSpace, p2[1]]
    const p4 = [p3[0], height / 2]
    const p5 = [width, height / 2]
    //moveTo p4
    const p6 = [p3[0], p4[1] + halfSpace]
    const p7 = [p1[0], p4[1] + halfSpace]
    const p8 = [p1[0], height]
    //moveTo p7
    const p9 = [p1[0] - halfSpace, p7[1]]
    const p10 = [p9[0], height / 2]
    const p11 = [0, height / 2]
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