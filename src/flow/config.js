// import responseStages from "./data";

// // 过滤掉无用的字段
// export const STAGES = responseStages.map(item1 => {
//   const signalGroups = item1.signalGroups.map(item => {
//     const { id, index, number, type, direction, flowDirection } = item;
//     return { id, index, number, type, direction, flowDirection };
//   });
//   return {
//     id: item1.id,
//     number: item1.number,
//     signalGroups
//   };
// });

export const SIGNAL_GROUPS = [
    {
        id: "372c37b0b4b34a52aeb7ae42adf95980",
        index: 1,
        number: 2,
        type: 1,
        direction: 1,
        flowDirection: 2
    },
    {
        id: "12fd658ff536476a8adf51bb2a37b3ce",
        index: 2,
        number: 3,
        type: 1,
        direction: 1,
        flowDirection: 2
    },
    {
        id: "852342c68cb74dc39798137ff6a83ca6",
        index: 3,
        number: 4,
        type: 1,
        direction: 1,
        flowDirection: 3
    },
    {
        id: "5125f748077b467cbdffe395dc3d2c45",
        index: 1,
        number: 14,
        type: 1,
        direction: 2,
        flowDirection: 2
    },
    {
        id: "679534f70cff471993eb7cc9b8e9af7e",
        index: 2,
        number: 15,
        type: 1,
        direction: 2,
        flowDirection: 2
    },
    {
        id: "5f988d4606654f7dbd47cc1992af1c34",
        index: 3,
        number: 16,
        type: 1,
        direction: 2,
        flowDirection: 3
    }
];

 

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
const TRANSLATE = {
    [DIRECTION.east]: 90,
    [DIRECTION.west]: 270,
    [DIRECTION.south]: 180,
    [DIRECTION.north]: 0,
    [DIRECTION.eastNorth]: 45,
    [DIRECTION.westNorth]: 315,
    [DIRECTION.eastSouth]: 135,
    [DIRECTION.westSouth]: 225,

}

// 流向：0 无；1 左转；2 直行；3 右转；4 直左；5 直右；6 左右；7 左直右；8 掉头；9 掉头左转；10 掉头直行；11 掉头右转；12 掉头直左；13 掉头直右；14 掉头左右；15 掉头左直右；16 行人一段过街；17 行人一次过街；18 行人二次过街；
export const FLOW_DIRECTION = {
    nothing: 0,
    turnLeft: 1,
    straight: 2,
    turnRight: 3,
    straightLeft: 4,
    straightRight: 5,
    leftRight: 6,
    leftStraightRight: 7,
    turnAround: 8,
    turnAroundLeft: 9,
    turnAroundStraight: 10,
    turnAroundRight: 11,
    turnAroundStraightLeft: 12,
    turnAroundStraightRight: 13,
    turnAroundLeftRight: 14,
    turnAroundLeftStraightRight: 15,
    crossHalf: 16,
    crossOnce: 17,
    crossTwice: 18
};

export const THEME_COLOR = '#00ff00'