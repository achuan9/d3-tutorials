transStageData:function(data){
    //console.log(data);
   var options = this.options;
   var result = [];
   var itemNames = this.options.orderedItems;
   var stageDic = this.options.stageDic;
   var signalGroupDic = this.options.signalGroupDic;
   for(var i=0;i<data.length;i++){
       var resStage = {name:itemNames[i],time:data[i].stageTime};
       var resSignalGroups = [];
       var stageLen = data[i].stageTime //相位阶段时长
       //到时可以通过signalGroupsIds，然后根据signalGroupsDic获得signalGroups
       var signalGroups = stageDic[data[i].stageId].signalGroups;
       //console.log(stageDic,signalGroupDic)
       //如果用signalGroupsIds，则使用以下方法
       //signalGroupsIds.forEach(function(groupId){
       // var signal = signalGroup[groupId];
       //信号组流向
       signalGroups.forEach(function(signal0){
           var groupId = signal0.id;
           var signal = signalGroupDic[groupId];
           var resSignal = {
               dname:"",
               greenTime:0,
               greenFlash:3,
               allRedTime:2,
               yellowTime:3,
               maxGreenTime1:17,
               minGreenTime:11,
               maxGreenTime2:17,
               lateLive:0,//迟启，红灯,获得路权1
               greenOff:false,//是否灭灯
               offTime:0,//灭灯时间
               type:signal.type, //类型 1 机动 2非机动 3行人
               securityGreenTime:signal.securityGreenTime?signal.securityGreenTime:0,
               securityFlashTime:signal.securityFlashTime?signal.securityFlashTime:0,
               securityYellowTime:signal.securityYellowTime?signal.securityYellowTime:0,
               securityRedTime:signal.securityRedTime?signal.securityRedTime:0
           }
           resSignal.dname = signalDirectionDic[signal.direction] + signalFlowDic[signal.flowDirection];
           resSignal.flow = signal.direction*100 + signal.flowDirection;
           resSignal.lightGroups = '';
           signal.channels.map(index=>{
               resSignal.lightGroups += ' '+index.number
           })
           var lightDic = {};
           lightDic[signal.loseTransitiveType1] = signal.loseTransitiveTime1;
           lightDic[signal.loseTransitiveType2] = signal.loseTransitiveTime2;
           lightDic[signal.loseTransitiveType3] = signal.loseTransitiveTime3;
           //console.log(lightDic)
           $.each(lightDic,function(type,time){
               // if(time === 0){
               // 	return true;
               // }
               var status = parseInt(type);
               
               if(status === Light_Status_GreenFlash){
                   resSignal.greenFlash = time;
               }else if(status === Light_Status_Yellow){
                   resSignal.yellowTime = time;
               }else if(status === Light_Status_Red){
                   //console.log(resSignal.allRedTime,time)
                   resSignal.allRedTime = time;
               }
           });
           //获得路权1，如果存在则是迟启
           if(parseInt(signal.liveTransitiveType1) === Light_Status_Red && signal.liveTransitiveTime1>0){
               resSignal.lateLive = signal.liveTransitiveTime1;
           }

           //人行道不允许黄灯
           if(resSignal.type === 3){
               resSignal.yellowTime = 0;
           }
           //绿灯时间  = 相位阶段时长 - 绿闪 - 黄 - 全红
           resSignal.greenTime = stageLen - resSignal.greenFlash - resSignal.allRedTime - resSignal.yellowTime - resSignal.lateLive;
           
           //其他直接赋值
           resSignal.minGreenTime = signal.minGreenTime === undefined?resSignal.minGreenTime:signal.minGreenTime;
           resSignal.maxGreenTime1 = signal.maxGreenTime1 === undefined?resSignal.maxGreenTime1:signal.maxGreenTime1;
           resSignal.maxGreenTime2 = signal.maxGreenTime2 === undefined?resSignal.maxGreenTime2:signal.maxGreenTime2;

           if(signal.greenOff !== undefined){
               resSignal.greenOff = signal.greenOff;
           }

           if(resSignal.greenOff){
               resSignal.offTime = stageLen - resSignal.allRedTime - resSignal.yellowTime;
           }

           //设置安保时间 add on 2017-09-12
           if(resSignal.type === 1){
               //机动车
               var rangeVeh = options.securityRangeVeh;
               resSignal.securityGreenTime = resSignal.securityGreenTime< rangeVeh['securityGreenTime'][0] ||resSignal.securityGreenTime >rangeVeh['securityGreenTime'][1]?5:resSignal.securityGreenTime;
               resSignal.securityFlashTime = resSignal.securityFlashTime<rangeVeh['securityFlashTime'][0] ||resSignal.securityFlashTime >rangeVeh['securityFlashTime'][1]?2:resSignal.securityFlashTime;
               resSignal.securityYellowTime = resSignal.securityYellowTime<rangeVeh['securityYellowTime'][0] ||resSignal.securityYellowTime >rangeVeh['securityYellowTime'][1]?2:resSignal.securityYellowTime;
               resSignal.securityRedTime = resSignal.securityRedTime<rangeVeh['securityRedTime'][0] ||resSignal.securityRedTime >rangeVeh['securityRedTime'][1]?2:resSignal.securityRedTime;
           }else if(resSignal.type === 3){
               //人行道
               var rangeWalk = options.securityRangeWalk;
               resSignal.securityGreenTime = resSignal.securityGreenTime<rangeWalk['securityGreenTime'][0] ||resSignal.securityGreenTime >rangeWalk['securityGreenTime'][1]?5:resSignal.securityGreenTime;
               resSignal.securityFlashTime = resSignal.securityFlashTime<rangeWalk['securityFlashTime'][0] ||resSignal.securityFlashTime >rangeWalk['securityFlashTime'][1]?8:resSignal.securityFlashTime;
               resSignal.securityRedTime = resSignal.securityRedTime<rangeWalk['securityRedTime'][0] ||resSignal.securityRedTime >rangeWalk['securityRedTime'][1]?5:resSignal.securityRedTime;
               resSignal.securityYellowTime = 0;
           }
           
           resSignalGroups.push(resSignal)
       });
       //console.log(resSignalGroups)
       resStage['params'] = resSignalGroups;
       result.push(resStage);
   }
   return result;
},