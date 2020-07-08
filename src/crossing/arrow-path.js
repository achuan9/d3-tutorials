// 方向： 1 左转；2 直行；3 右转；4 直左；5 直右；6 掉头；7左转掉头；8 左直右；9 直行掉头；10 左右；sourceId为出口车道id时，方向设为0，没有方向
const  LANE_DIRECTION = {
    'left': 1,
    'straight': 2,
    'right': 3,
    'straightLeft': 4,
    'straightRight': 5,
    'turnAround': 6,
    'turnAroundLeft': 7,
    'leftStraightRight': 8,
    'turnAroundStraight': 9,
    'leftRight': 10,
}

export const LANE_ARROW = {
    [LANE_DIRECTION.left]: "M-35 0 L-35 195 L20 255 L20 305 L40 225 L20 150 L20 195 L-20 150 L-20 0 Z",
    [LANE_DIRECTION.straight]: "M0 0 L0 180 L-15 180 L7.5 300 L30 180 L15 180 L15 0 Z",
    [LANE_DIRECTION.right]: "M35 0 L35 195 L-20 255 L-20 305 L-40 225 L-20 150 L-20 195 L20 150 L20 0 Z",
    [LANE_DIRECTION.straightLeft]: "M-35 0 L-20 0 L-20 20 L25 65 L25 20 L65 95 L30 175 L25 125 L-20 90 L-20 180 L-5 180 L-27.5 300 L-50 180 L-35 180 Z",
    [LANE_DIRECTION.straightRight]: "M25 0 L25 20 L-25 65 L-25 20 L-60 95 L-25 175 L-25 125 L25 80 L25 180 L10 180 L32.5 300 L55 180 L40 180 L40 0 Z",
    [LANE_DIRECTION.turnAround]: "M-50 0 L-50 255 S-50 300 0 300 S35 255 40 255 L40 200 L60 200 L30 80 L0 200 L15 200 S35 280 -30 240 L-30 0 Z",
    [LANE_DIRECTION.turnAroundLeft]: "M-35 0 L-35 195 L10 250 L10 300 L40 180 L10 135 L10 190 L-15 155 L-20 135  S25 170 25 110 L25 95 L40 95 L17.5 0 L-5 95 L10 95 L10 110 S0 140 -20 100 L-20 0 Z",
    [LANE_DIRECTION.leftStraightRight]: "M-5 0 L-5 20 L-25 65 L-25 20 L-60 95 L-25 175 L-25 125 L-5 80 L-5 180  L-20 180 L2.5 300 L25 180 L10 180 L10 50 L25 65 L25 20 L65 95 L30 175 L25 125 L10 90 L10 0 Z",
    [LANE_DIRECTION.turnAroundStraight]: "M-25 0 L-25 180 L-40 180 L-17.5 300 L5 180 L-10 180 L-10 150 S40 180 30 90 L25 90 L45 90 L22.5 0 L0 90 L30 90 L15 80 S25 170 -10 120 L-10 0 Z ",
    [LANE_DIRECTION.leftRight]: "M-5 0 L-5 145 L-35 190 L-35 145 L-55 220 L-35 300 L-35 250 L2.5 190 L35 250 L35 300 L55 220 L35 145 L35 190 L10 145 L10 0 Z",
}

// 车道类型，多个类型用逗号隔开，可为空
// 1 普通车道；2 公交车道；3 潮汐车道；4 逆向可变车道；5 可变车道；6 右转专用道；7 非机动车道
