import part1 from "./bar-chart/part1";
import part2 from "./bar-chart/part2";
import part3Render from "./bar-chart/part3";
import part4 from "./bar-chart/part4";
import flow from './flow/index'
import PieSecond from "./pie-second";

document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('content')
    PieSecond.render(wrapper)
})


var data = [
    {
      children: [
        {
          level: 2,
          children: [
            {
              createTime: "2020-04-08 06:18:00:809",
              level: 3,
              resourceName: "保存",
              id: "6b266fd615ff4355a7ce26adbf859850",
              parentId: "cefbf81e132d4bcf8a9f25aa460cd737",
              resourceValue: "road:roadManager:save",
            },
          ],
          createTime: "2020-04-07 08:03:13:720",
          resourceName: "路口管理",
          id: "cefbf81e132d4bcf8a9f25aa460cd737",
          parentId: "186be6266552487fb9a2efbb3543160e",
        },
        {
          children: [
            {
              createTime: "2020-04-07 08:40:52:447",
              level: 3,
              resourceName: "批量录入",
              id: "ab90da9845714feb95badb7041a53906",
              parentId: "fd339d995107468ab7985c2536684e77",
            },
          ],
          createTime: "2020-04-07 08:36:33:560",
          level: 2,
          resourceName: "流量信息采集",
          id: "fd339d995107468ab7985c2536684e77",
          parentId: "186be6266552487fb9a2efbb3543160e",
        },
      ],
      createTime: "2020-04-07 07:28:58:282",
      level: 1,
      resourceName: "交通单元",
      id: "186be6266552487fb9a2efbb3543160e",
      parentId: "0",
    },
    {
      children: [
        {
          children: [
            {
              createTime: "2020-04-07 08:43:48:308",
              level: 3,
              resourceName: "信号机管理",
              id: "ebf5b59df0e04dbbacd8f3205344679c",
              parentId: "1b0c6f789b1e416e99602157740801e3",
            },
          ],
          createTime: "2020-04-07 08:43:14:038",
          level: 2,
          resourceName: "设备管理",
          id: "1b0c6f789b1e416e99602157740801e3",
          parentId: "signal",
        },
        {
          createTime: "2020-04-07 08:44:23:604",
          level: 2,
          resourceName: "信号设计",
          id: "772c43af5a754e7f828bb0ba70c019ce",
          parentId: "signal",
        },
        {
          children: [
            {
              createTime: "2020-04-07 08:46:00:125",
              level: 3,
              resourceName: "路口监视",
              id: "033e68d94e634ba7b82478e332798146",
              parentId: "f1b9ecfe1ecf421295559880f1aab052",
            },
            {
              createTime: "2020-04-07 08:46:27:765",
              level: 3,
              resourceName: "子区监视",
              id: "75e55196f7fc4cf29450dac30266eabc",
              parentId: "f1b9ecfe1ecf421295559880f1aab052",
            },
          ],
          createTime: "2020-04-07 08:45:05:828",
          level: 2,
          resourceName: "实时监控",
          id: "f1b9ecfe1ecf421295559880f1aab052",
  
          parentId: "signal",
        },
        {
          children: [
            {
              createTime: "2020-04-07 08:47:29:762",
              level: 3,
              resourceName: "感应控制",
              id: "27d4a45b73234e839d053ff52965ffa9",
              parentId: "abc61e99fbcc4307a0263baf1a1d48c5",
            },
            {
              createTime: "2020-04-07 08:47:49:431",
              level: 3,
              resourceName: "自适应控制",
              id: "078ee96960004cd6a1daaf8373433152",
              parentId: "abc61e99fbcc4307a0263baf1a1d48c5",
            },
            {
              createTime: "2020-04-07 08:48:34:621",
              level: 3,
              resourceName: "协调控制",
              id: "c28a570e56964a409519cab55e41b814",
              parentId: "abc61e99fbcc4307a0263baf1a1d48c5",
            },
            {
              createTime: "2020-04-07 08:48:54:039",
              level: 3,
              resourceName: "手动相位保持",
              id: "308e7a3c861f46fa8ca32ab345eb86b1",
              parentId: "abc61e99fbcc4307a0263baf1a1d48c5",
            },
            {
              createTime: "2020-04-07 08:49:29:450",
              level: 3,
              resourceName: "平台自适应控制",
              id: "c180f51f3e0a4e3a933756b6b7d0ccb7",
              parentId: "abc61e99fbcc4307a0263baf1a1d48c5",
            },
            {
              createTime: "2020-04-07 08:50:46:358",
              level: 3,
              resourceName: "辅助决策",
              id: "d793ed2ff50a43eabe92643c96a2da96",
              parentId: "abc61e99fbcc4307a0263baf1a1d48c5",
            },
            {
              createTime: "2020-04-07 08:51:34:839",
              level: 3,
              resourceName: "干线协调",
              id: "bdcb58ca8ef3460781e6dec7e6a464a2",
              parentId: "abc61e99fbcc4307a0263baf1a1d48c5",
            },
          ],
          createTime: "2020-04-07 08:46:53:062",
          level: 2,
          resourceName: "高级控制",
          id: "abc61e99fbcc4307a0263baf1a1d48c5",
          parentId: "signal",
        },
        {
          children: [
            {
              createTime: "2020-04-07 08:52:25:358",
              level: 3,
              resourceName: "运行参数分析",
              id: "543b99709dd4414296e11a2f60752b76",
              parentId: "47cd0763332c4909910cc8b43856eb46",
            },
            {
              createTime: "2020-04-07 08:52:50:529",
              level: 3,
              resourceName: "检测参数分析",
              id: "3753bd67785a400e8ad29a630c15e0fa",
              parentId: "47cd0763332c4909910cc8b43856eb46",
            },
            {
              createTime: "2020-04-07 08:53:05:752",
              level: 3,
              resourceName: "配时执行报表",
              id: "831fac255ccd44a9b929806391f671fb",
              parentId: "47cd0763332c4909910cc8b43856eb46",
            },
            {
              createTime: "2020-04-07 08:53:31:728",
              level: 3,
              resourceName: "操作纪录报表",
              id: "5b2e689855ed493ea1fe4d70a15b7199",
              parentId: "47cd0763332c4909910cc8b43856eb46",
            },
            {
              createTime: "2020-04-07 08:53:53:327",
              level: 3,
              resourceName: "数据统计报表",
              id: "e432151ca3e14550a143771db974a034",
              parentId: "47cd0763332c4909910cc8b43856eb46",
            },
            {
              createTime: "2020-04-07 08:54:11:435",
              level: 3,
              resourceName: "控制模式转换",
              id: "211d69a7644b4027bebd92ecba207b47",
              parentId: "47cd0763332c4909910cc8b43856eb46",
            },
          ],
          createTime: "2020-04-07 08:52:04:553",
          level: 2,
          resourceName: "统计分析",
          id: "47cd0763332c4909910cc8b43856eb46",
          parentId: "signal",
        },
        {
          children: [
            {
              createTime: "2020-04-07 08:54:53:021",
              level: 3,
              resourceName: "系统运行记录",
              id: "26ae269f16a04f56802fd3e8a6186781",
              parentId: "7fabe210bd4f40ec9f7bef3526e4b72f",
            },
            {
              createTime: "2020-04-07 08:55:22:259",
              level: 3,
              resourceName: "设备维护",
              id: "032c21d9d46344748be036b90b505cad",
              parentId: "7fabe210bd4f40ec9f7bef3526e4b72f",
            },
            {
              createTime: "2020-04-07 08:58:52:038",
              level: 3,
              resourceName: "登录日志",
              id: "04c65884da9643b1aa9aaea55453863c",
              parentId: "7fabe210bd4f40ec9f7bef3526e4b72f",
            },
            {
              createTime: "2020-04-07 08:59:23:179",
              level: 3,
              resourceName: "操作日志",
              id: "3897f34b75bc4a7683c2869b63dba8b5",
              parentId: "7fabe210bd4f40ec9f7bef3526e4b72f",
            },
          ],
          createTime: "2020-04-07 08:54:34:377",
          level: 2,
          resourceName: "系统运维",
          id: "7fabe210bd4f40ec9f7bef3526e4b72f",
          parentId: "signal",
        },
        {
          createTime: "2020-04-07 08:59:48:187",
          level: 2,
          resourceName: "大屏展示",
          id: "d80e63ff6d6744f5b10c94d91f11e04c",
          parentId: "signal",
        },
        {
          children: [
            {
              createTime: "2020-04-07 09:01:11:972",
              level: 3,
              resourceName: "状态监视",
              id: "aa4eab4b90d6418a992a8f500c1319a4",
              parentId: "9f6641ad591b4c8e8eb1d5aebb4b112e",
            },
            {
              createTime: "2020-04-07 09:01:39:635",
              level: 3,
              resourceName: "效果评价",
              id: "0cf7e110545041a29d7554e8f50b9c0e",
              parentId: "9f6641ad591b4c8e8eb1d5aebb4b112e",
            },
          ],
          createTime: "2020-04-07 09:00:57:873",
          level: 2,
          resourceName: "效果评价",
          id: "9f6641ad591b4c8e8eb1d5aebb4b112e",
          parentId: "signal",
        },
      ],
      createTime: "2019-09-02 10:00:00",
      level: 1,
      resourceName: "信号管控",
      id: "signal",
      parentId: "0",
    },
    {
      children: [
        {
          children: [
            {
              createTime: "2020-04-07 09:04:24:892",
              level: 3,
              resourceName: "行政区划管理",
              id: "9fab189dff4c4cfe9e7df43496d0cff6",
              parentId: "3d19ed60433a4aba9408bb88f4902bf6",
            },
            {
              createTime: "2020-04-07 09:04:38:094",
              level: 3,
              resourceName: "部门机构管理",
              id: "7adf6da33ffe4a8c8217270f93cc50d3",
              parentId: "3d19ed60433a4aba9408bb88f4902bf6",
            },
            {
              createTime: "2020-04-07 09:04:51:931",
              level: 3,
              resourceName: "管辖区域管理",
              id: "1240d15c59e745f98aeb1d472fa8c050",
              parentId: "3d19ed60433a4aba9408bb88f4902bf6",
            },
          ],
          createTime: "2020-04-07 09:04:09:250",
          level: 2,
          resourceName: "组织机构",
          id: "3d19ed60433a4aba9408bb88f4902bf6",
          parentId: "system",
        },
        {
          children: [
            {
              createTime: "2020-04-07 09:05:28:395",
              level: 3,
              resourceName: "集团管理",
              id: "868c542882af4810aebd6db4454d35d0",
              parentId: "131baa57ab5049a0bc79286909dd3d00",
            },
            {
              createTime: "2020-04-07 09:05:48:540",
              level: 3,
              resourceName: "普通用户管理",
              id: "6b44ca5b7a1b47799476d7debb4d0d33",
              parentId: "131baa57ab5049a0bc79286909dd3d00",
            },
            {
              createTime: "2020-04-07 09:06:07:100",
              level: 3,
              resourceName: "角色管理",
              id: "e82578c07ab74766a9e4c609fc6ca99b",
              parentId: "131baa57ab5049a0bc79286909dd3d00",
            },
          ],
          createTime: "2020-04-07 09:05:11:592",
          level: 2,
          resourceName: "用户管理",
          id: "131baa57ab5049a0bc79286909dd3d00",
          parentId: "system",
        },
        {
          children: [
            {
              createTime: "2020-04-07 09:06:40:691",
              level: 3,
              resourceName: "单点辅助决策管理",
              id: "a597cf8d484c41c4906fe2a5c514de3d",
              parentId: "188f48b3b3fb40bd95a91c99cf2f34e9",
            },
          ],
          createTime: "2020-04-07 09:06:30:995",
          level: 2,
          resourceName: "参数管理",
          id: "188f48b3b3fb40bd95a91c99cf2f34e9",
          parentId: "system",
        },
      ],
      createTime: "2019-09-02 10:00:00",
      level: 1,
      resourceName: "系统管理",
      id: "system",
      parentId: "0",
    },
  ];