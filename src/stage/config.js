
// 方向
// 1 东；2 西； 3 南；4 北；5 东北；6 西北；7 东南；8 西南；9 其他
export const DIRECTION = {
    east: 1,
    west: 2,
    south: 3,
    north: 4,
    eastNorth: 5,
    westNorth: 6,
    eastSouth: 7,
    westSouth: 8,
    other: 9
};

/**
 * 流向：
 * 
 * 0 无；1 左转；2 直行；3 右转；4 直左；5 直右；6 左右；7 左直右；8 掉头；
 * 
 * 9 掉头左转；10 掉头直行；11 掉头右转；12 掉头直左；13 掉头直右；14 掉头左右；
 * 
 * 15 掉头左直右；16 行人一段过街；17 行人一次过街；18 行人二次过街；
 */
export const FLOW = {
    nothing: 0,
    left: 1,
    straight: 2,
    right: 3,
    straightLeft: 4,
    straightRight: 5,
    leftRight: 6,
    leftStraightRight: 7,
    uturn: 8,
    uturnLeft: 9,
    uturnStraight: 10,
    uturnRight: 11,
    uturnStraightLeft: 12,
    uturnStraightRight: 13,
    uturnLeftRight: 14,
    uturnLeftStraightRight: 15,
    cross: 16,
    crossOnce: 17,
    crossTwice: 18
};

// 旋转角度

export const ROTATE = {
    [DIRECTION.east]: 90,
    [DIRECTION.west]: 270,
    [DIRECTION.south]: 180,
    [DIRECTION.north]: 0,
    [DIRECTION.eastNorth]: 45,
    [DIRECTION.westNorth]: 315,
    [DIRECTION.eastSouth]: 135,
    [DIRECTION.westSouth]: 225,
}


/**
 * 流向标识的 path
 */
export const FLOW_PATH = {
    [FLOW.left]: "M-35 -100 L-35 195 L20 255 L20 305 L40 225 L20 150 L20 195 L-20 150 L-20 -100 Z",
    [FLOW.straight]: "M0 -100 L0 450 L-15 450 L7.5 570 L30 450 L15 450 L15 -100 Z",
    [FLOW.right]: "M35 -100 L35 195 L-20 255 L-20 305 L-40 225 L-20 150 L-20 195 L20 150 L20 -100 Z",
    [FLOW.straightLeft]: "M0 -100 L0 450 L-15 450 L7.5 570 L30 450 L15 450 L15 210 L87 291 L87 341 L107 261 L87 186 L87 231 L15 150 L15 -100 Z",
    [FLOW.straightRight]: "M0 -100 L0 150 L-72 231 L-72 186 L-92 261 L-72 341 L-72 291 L0 210 L0 450 L-15 450 L7.5 570 L30 450 L15 450 L15 -100 Z",
    [FLOW.leftRight]: "M0 -100 L0 381 L-72 462 L-72 417 L-92 492 L-72 572 L-72 522 L0 441 L7.5 432.6 L15 441 L87 522 L87 572 L107 492 L87 417 L87 462 L15 381 L15 -100 Z",
    [FLOW.leftStraightRight]: "M0 -100 L0 150 L-72 231 L-72 186 L-92 261 L-72 341 L-72 291 L0 210 L0 450 L-15 450 L7.5 570 L30 450 L15 450 L15 210 L87 291 L87 341 L107 261 L87 186 L87 231 L15 150 L15 -100 Z",
    [FLOW.uturn]: "M0 -100 L0 510 A60 60 0 0 0 120 510 L120 340 L135 340 L112.5 220 L90 340 L105 340 L105 465 A45 45 0 0 1 15 465 L15 -100 Z",
    [FLOW.uturnLeft]: "M0 -100 L0 374.2 L87 472 L87 522 L107 442 L87 367 L87 412 L15 331 L15 320 A60 60 0 0 0 120 280 L120 220 L135 220 L112.5 100 L90 220 L105 220 L105 235 A45 45 0 0 1 15 235 L15 -100 Z",
    [FLOW.uturnStraight]: "M0 -100 L0 450 L-15 450 L7.5 570 L30 450 L15 450 L15 320 A60 60 0 0 0 120 280 L120 220 L135 220 L112.5 100 L90 220 L105 220 L105 235 A45 45 0 0 1 15 235 L15 -100 Z",
    [FLOW.uturnRight]: "M0 -100 L0 331 L-72 412 L-72 367 L-92 442 L-72 522 L-72 472 L0 391 L15 374.2 L15 320 A60 60 0 0 0 120 280 L120 220 L135 220 L112.5 100 L90 220 L105 220 L105 235 A45 45 0 0 1 15 235 L15 -100 Z",
    [FLOW.uturnStraightLeft]: "M0 -100 L0 450 L-15 450 L7.5 570 L30 450 L15 450 L15 391 L87 472 L87 522 L107 442 L87 367 L87 412 L15 331 L15 320 A60 60 0 0 0 120 280 L120 220 L135 220 L112.5 100 L90 220 L105 220 L105 235 A45 45 0 0 1 15 235 L15 -100 Z",
    [FLOW.uturnStraightRight]: "M0 -100 L0 331 L-72 412 L-72 367 L-92 442 L-72 522 L-72 472 L0 391 L0 450 L-15 450 L7.5 570 L30 450 L15 450 L15 320 A60 60 0 0 0 120 280 L120 220 L135 220 L112.5 100 L90 220 L105 220 L105 235 A45 45 0 0 1 15 235 L15 -100 Z",
    [FLOW.uturnLeftRight]: "M0 -100 L0 331 L-72 412 L-72 367 L-92 442 L-72 522 L-72 472 L0 391 L7.5 382.6 L15 391 L87 472 L87 522 L107 442 L87 367 L87 412 L15 331 L15 320 A60 60 0 0 0 120 280 L120 220 L135 220 L112.5 100 L90 220 L105 220 L105 235 A45 45 0 0 1 15 235 L15 -100 Z",
    [FLOW.uturnLeftStraightRight]: "M0 -100 L0 331 L-72 412 L-72 367 L-92 442 L-72 522 L-72 472 L0 391 L0 450 L-15 450 L7.5 570 L30 450 L15 450 L15 391 L87 472 L87 522 L107 442 L87 367 L87 412 L15 331 L15 320 A60 60 0 0 0 120 280 L120 220 L135 220 L112.5 100 L90 220 L105 220 L105 235 A45 45 0 0 1 15 235 L15 -100 Z",
};

/**
 * 流向标识的宽度
 */

export const FLOW_PATH_WIDTH = {
    [FLOW.left]: 75,
    [FLOW.straight]: 45,
    [FLOW.right]: 75,
    [FLOW.straightLeft]: 122,
    [FLOW.straightRight]: 122,
    [FLOW.leftRight]: 199,
    [FLOW.leftStraightRight]: 199,
    [FLOW.uturn]: 135,
    [FLOW.uturnLeft]: 135,
    [FLOW.uturnStraight]: 150,
    [FLOW.uturnRight]: 227,
    [FLOW.uturnStraightLeft]: 150,
    [FLOW.uturnStraightRight]: 227,
    [FLOW.uturnLeftRight]: 227,
    [FLOW.uturnLeftStraightRight]: 227,
}

export const THEME = {
    flowColor: '#00ff00',
    flowBg: 'steelblue'
}