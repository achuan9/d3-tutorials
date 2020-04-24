export default {
    "id": "1", //干线id
    "negativeSpeed": 55, // 反向速度
    "positiveSpeed": 55, // 反向速度
    "crosses": [
        {
            "id": "1-1", // 路口id
            "sequence": 1, // 路口在干线中的顺序号
            "name": "路口1", // 路口名称
            "distance": 0, // 到上个路口的距离
            "cycle": 120, // 方案周期
            "offset": 0, // 相位差
            "greenTime": 60 // 绿灯时间
        },
        {
            "id": "1-2", // 路口id
            "sequence": 2, // 路口在干线中的顺序号
            "name": "路口2", // 路口名称
            "distance": 300, // 到上个路口的距离
            "cycle": 120, // 方案周期
            "offset": 30, // 相位差
            "greenTime": 60 // 绿灯时间
        },
        {
            "id": "1-3", // 路口id
            "sequence": 3, // 路口在干线中的顺序号
            "name": "路口3", // 路口名称
            "distance": 200, // 到上个路口的距离
            "cycle": 120, // 方案周期
            "offset": 60, // 相位差
            "greenTime": 60 // 绿灯时间
        }
    ]
}