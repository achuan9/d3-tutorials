export default {
    "id": "1", //干线id
    "negativeSpeed": 55, // 反向速度
    "positiveSpeed": 55, // 反向速度
    "crosses": [
        {// 当前路口及路口协调的阶段信息
            "id": "1-1", // 路口id
            "sequence": 1, // 路口在干线中的顺序号
            "name": "路口1", // 路口名称
            "distance": 0, // 到上个路口的距离
            "stageTime": 140, // 阶段时长
            "greenTime": 100, // 绿灯时间
            "offset": 0, // 相位差
        },
        {
            "id": "1-2", 
            "sequence": 2, 
            "name": "路口2", 
            "distance": 400, 
            "stageTime": 120, 
            "greenTime": 60, 
            "offset": 10, 
        },
    ]
}