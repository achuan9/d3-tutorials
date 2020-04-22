export default {
    "id": "1", //干线id
    "negativeSpeed": 55, // 反向速度
    "positiveSpeed": 55, // 反向速度
    "crosses": [
        {
            "id": "1-1", // 路口id
            "sequence": 1, // 路口在干线中的顺序号
            "name": "路口1", // 路口名称
            "distance": 200, // 到下个路口的距离
            "plan": {// 当前路口的方案
                "id": "1-1-1",
                "name": "方案名称",
                "startTime": "1200", // 开始时间
                "endTime": "2100", // 结束时间
                "cycle": 120, // 方案周期
                "cycleSignal": {// 一个周期下面的红绿灯时间
                    "yellowTime": 5, // 黄灯时间
                    "redTime": 50, // 红灯时间
                    "greenTime": 60, // 绿灯时间
                    "greenFlashTime": 5 // 绿闪时间
                }
            }
        },
        {
            "id": "1-2", // 路口id
            "sequence": 2, // 路口在干线中的顺序号
            "name": "路口2", // 路口名称
            "distance": 300, // 到下个路口的距离
            "plan": {
                // 当前路口的方案
                "id": "1-2-1",
                "name": "方案名称",
                "startTime": "1200", // 开始时间
                "endTime": "2100", // 结束时间
                "cycle": 120, // 方案周期
                "cycleSignal": {// 一个周期下面的红绿灯时间
                    "yellowTime": 5, // 黄灯时间
                    "redTime": 50, // 红灯时间
                    "greenTime": 60, // 绿灯时间
                    "greenFlashTime": 5 // 绿闪时间
                }
            }
        },
        {
            "id": "1-3", // 路口id
            "sequence": 3, // 路口在干线中的顺序号
            "name": "路口3", // 路口名称
            "distance": 200, // 到下个路口的距离
            "plan": {
                // 当前路口的方案
                "id": "1-3-1",
                "name": "方案名称",
                "startTime": "1200", // 开始时间
                "endTime": "2100", // 结束时间
                "cycle": 120, // 方案周期
                "cycleSignal": {// 一个周期下面的红绿灯时间
                    "yellowTime": 5, // 黄灯时间
                    "redTime": 50, // 红灯时间
                    "greenTime": 60, // 绿灯时间
                    "greenFlashTime": 5 // 绿闪时间
                }
            }
        }
    ]
}