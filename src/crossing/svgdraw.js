
    //定义svg默认宽度
    var CANVAS_WIDTH = 620;
    //定义svg默认高度
    var CANVAS_HEIGHT = 620;
    //定义比例尺
    var SCALE = 6;
    //特殊道路起点位置
    var SPECIALSTARTINGPOINT = 0.4 * SCALE;
    //特殊道路终点位置
    var SPECIALENDPOINTS = 0.83 * SCALE;
    //定义其中一条道路斑马线高度
    var CROSS_HEIGHT = 5.8 * SCALE;
    //定义自行车宽度
    var BIKE_WIDTH = 11 * SCALE;
    //定义自行车高度
    var BIKE_HEIGHT = 5.9 * SCALE;
    //定义箭头灯的宽度
    var ARROW_LIGHTSW = 4.5 * SCALE;
    //定义箭头灯的高度
    var ARROW_LIGHTSH = 3.5 * SCALE;
    //定义行人灯起点水平位置
    var CROSS_STARTLIGHTS = 1.7 * SCALE;
    //定义一次过街行人灯水平位置
    var CROSS_ONCEMOVE = 4.17 * SCALE;
    //定义左转待转区水平位置
    var CROSS_HASWAITINGZONE = 14.6 * SCALE;
    //定义左转待转区箭头水平位置
    var CROSS_HASWAITINGZONEARROW = 1.5 * SCALE;
    //定义左转待转区箭头垂直位置
    var CROSS_HASWAITINGZONEARROWHEIGHT = 4.8 * SCALE;
    //定义路口转角半径
    var CROSS_RADIUS = 10 * SCALE;
    //定义路口右转渠化半径
    var CROSS_CHANNELRADIAN = 18 * SCALE;
    //定义路口右转渠化车道宽度
    var CROSS_CHANNELWIDTH = 3.5 * SCALE;
    //定义路口分支字体水平位置
    var CROSS_CHANNELEVELZ = 5.83 * SCALE;
    //定义路口分支字体垂直位置
    var CROSS_CHANNEVERTICALZ = 3.33 * SCALE;
    //定义增减路口按钮宽度和高度
    var CROSS_REDUCRADDROAD = 5 * SCALE;
    //定义增减路口按钮的水平位置
    var CROSS_REDUCRADDPOSITIONROAD = 5.5 * SCALE;
    //信号灯水平位置
    var CROSS_ARROWLIGHTPOSITION = 3.5 * SCALE;
    //定义右转箭头
    //1左下点，顺时针列点
    var PATH_RIGHTARROW =
        "M35 0 L35 195 L-20 255 L-20 305 L-40 225 L-20 150 L-20 195 L20 150 L20 0 Z";
    //定义直行箭头
    //1左下点，顺时针列点
    var PATH_STRAIGHTARROW =
        "M0 0 L0 180 L-15 180 L7.5 300 L30 180 L15 180 L15 0 Z";
    //定义左转箭头
    //1右下点，逆时针列点
    var PATH_LEFTARROW =
        "M-35 0 L-35 195 L20 255 L20 305 L40 225 L20 150 L20 195 L-20 150 L-20 0 Z";
    //定义前方可直行或右转箭头
    //1右下点，逆时针列点
    var PATH_STRAIGHTORRIGHTARROW =
        "M25 0 L25 20 L-25 65 L-25 20 L-60 95 L-25 175 L-25 125 L25 80 L25 180 L10 180 L32.5 300 L55 180 L40 180 L40 0 Z";
    //定义前方可直行或左转箭头
    //1左下点，顺时针列点
    var PATH_STRAIGHTORLEFTARROW =
        "M-35 0 L-20 0 L-20 20 L25 65 L25 20 L65 95 L30 175 L25 125 L-20 90 L-20 180 L-5 180 L-27.5 300 L-50 180 L-35 180 Z";
    //定义指示前方掉头箭头
    //1右下点，逆时针列点
    var PATH_FORWARDTURNARROW =
        "M-50 0 L-50 255 S-50 300 0 300 S35 255 40 255 L40 200 L60 200 L30 80 L0 200 L15 200 S35 280 -30 240 L-30 0 Z";
    //定义指示前方可直行或掉头
    //1左下点，顺时针列点
    var PATH_STRAIGHTORTURNAROUNDARROW =
        "M-25 0 L-25 180 L-40 180 L-17.5 300 L5 180 L-10 180 L-10 150 S40 180 30 90 L25 90 L45 90 L22.5 0 L0 90 L30 90 L15 80 S25 170 -10 120 L-10 0 Z ";
    //定义指示前方可左转或掉头
    //1右下点，逆时针列点
    var PATH_TURNLEFTORTURNARROW =
        "M-35 0 L-35 195 L10 250 L10 300 L40 180 L10 135 L10 190 L-15 155 L-20 135  S25 170 25 110 L25 95 L40 95 L17.5 0 L-5 95 L10 95 L10 110 S0 140 -20 100 L-20 0 Z";
    //定义前方道路仅可左右转弯
    //1右下点，逆时针列点
    var PATH_LEFTORRIGHTTURNARROW =
        "M-5 0 L-5 145 L-35 190 L-35 145 L-55 220 L-35 300 L-35 250 L2.5 190 L35 250 L35 300 L55 220 L35 145 L35 190 L10 145 L10 0 Z";
    //可直行或左右转
    //1右下点，逆时针列点
    var PATH_STRAIGHTLEFTRIGHT =
        "M-5 0 L-5 20 L-25 65 L-25 20 L-60 95 L-25 175 L-25 125 L-5 80 L-5 180  L-20 180 L2.5 300 L25 180 L10 180 L10 50 L25 65 L25 20 L65 95 L30 175 L25 125 L10 90 L10 0 Z";
    //定义左弯或需向左合流箭
    //1右下点，逆时针列点
    var PATH_LEFTORLEFTARROW =
        "M-15 0 S-17 130 -17 130 L-10 190  L-30 200 L40 300 L20 180 L5 190  S-1.5 120 -1.5 120 L0 0 Z";
    //定义右弯或需向右合流箭
    //1左下点，顺时针列点
    var PATH_RIGHTORRIGHTARROW =
        "M0 0 S1.5 120 1.5 120 L-5 190 L25 210 L-40 300 L-25 180 L10 200 S17 130 17 130 L15 0 Z";
    //定义左转待转区数据虚线框
    var PATH_LEFTWAITINGAREADOTTED = [
        {
            x: 25,
            y: 108.6
        },
        {
            x: 35,
            y: 107
        },
        {
            x: 76,
            y: 85
        },
        {
            x: 65,
            y: 63
        },
        {
            x: 37,
            y: 82
        },
        {
            x: 23,
            y: 86.5
        },
        {
            x: 6,
            y: 92
        }
    ];
    //定义左转待转区数据实线框
    var PATH_LEFTWAITINGAREASOLID = [
        {
            x: 69,
            y: 87
        },
        {
            x: 76,
            y: 81
        },
        {
            x: 64,
            y: 62
        },
        {
            x: 55,
            y: 68
        }
    ];
    //定义默认高度
    function getLaneHeight() {
        return 60 * SCALE;
    }

    //定义入口箭头位置：四分之一高度
    function getEntrArrowP() {
        return 16 * SCALE;
    }

    //定义出口箭头位置：四分之一高度
    function getExitArrowP() {
        return 9 * SCALE;
    }

    //计算矩形左上角X坐标
    function getLeftTopX(orgX, orgAngle, entrW, orgH, orgDist) {
        var x = 0;
        if (0 !== orgAngle) {
            var orgArc = (orgAngle / 360) * 2 * Math.PI;
            var a = entrW / Math.tan(orgArc);
            var b = orgDist + orgH - a;
            x = b * Math.sin(orgArc);
        } else {
            x = -entrW;
        }
        x = orgX + x;
        return x;
    }

    //计算矩形左上角Y坐标
    function getLeftTopY(orgY, orgAngle, entrW, orgH, orgDist) {
        var y = 0;
        if (0 === orgAngle) {
            y = orgH + orgDist;
        } else if (180 === orgAngle) {
            y = -(orgH + orgDist);
        } else {
            var orgArc = (orgAngle / 360) * 2 * Math.PI;
            var a = entrW / Math.tan(orgArc);
            var b = orgDist + orgH - a;
            y = b * Math.cos(orgArc) + entrW / Math.sin(orgArc);
        }
        y = orgY - y;
        return y;
    }

    //计算矩形右下角X坐标
    function getRightBotomX(orgX, orgAngle, exitW, orgDist) {
        var x = 0;
        if (0 !== orgAngle) {
            var orgArc = (orgAngle / 360) * 2 * Math.PI;
            var a = exitW / Math.tan(orgArc);
            var b = orgDist + a;
            x = b * Math.sin(orgArc);
        } else {
            x = exitW;
        }
        x = orgX + x;
        return x;
    }

    //计算矩形右下角Y坐标
    function getRightBotomY(orgY, orgAngle, exitW, orgDist) {
        var y = 0;
        if (0 === orgAngle) {
            y = orgDist;
        } else if (180 === orgAngle) {
            y = -orgDist;
        } else {
            var orgArc = (orgAngle / 360) * 2 * Math.PI;
            var a = exitW / Math.tan(orgArc);
            var b = exitW / Math.sin(orgArc);
            y = (orgDist + a) * Math.cos(orgArc) - b;
        }
        y = orgY - y;
        return y;
    }

    //计算矩形左下角X坐标
    function getLeftBotomX(orgX, orgAngle, entrW, orgDist) {
        var x = 0;
        if (0 !== orgAngle) {
            var orgArc = (orgAngle / 360) * 2 * Math.PI;
            var a = entrW / Math.tan(orgArc);
            var b = orgDist - a;
            x = b * Math.sin(orgArc);
        } else {
            x = -entrW;
        }
        x = orgX + x;
        return x;
    }

    //计算矩形左下角Y坐标
    function getLeftBotomY(orgY, orgAngle, entrW, orgDist) {
        var y = 0;
        if (0 === orgAngle) {
            y = orgDist;
        } else if (180 === orgAngle) {
            y = -orgDist;
        } else {
            var orgArc = (orgAngle / 360) * 2 * Math.PI;
            var a = entrW / Math.tan(orgArc);
            var b = orgDist - a;
            var y1 = entrW / Math.sin(orgArc);
            var y2 = b * Math.cos(orgArc);
            y = y1 + y2;
        }
        y = orgY - y;
        return y;
    }

    //计算直线方程X偏移量
    function getOffsetX(angle, pX, pY) {
        var offsetX = 0;
        if (0 === angle) {
            offsetX = pX;
        } else if (90 === angle) {
            offsetX = pX;
        } else if (180 === angle) {
            offsetX = pX;
        } else if (270 === angle) {
            offsetX = pX;
        } else {
            var orgArc = (angle / 360) * 2 * Math.PI;
            offsetX = pX - pY * Math.tan(orgArc);
        }
        return offsetX;
    }

    //计算两直线交点X坐标
    function getIntersectionX(
        orgX,
        angle1,
        offsetX1,
        pY1,
        angle2,
        offsetX2,
        pY2
    ) {
        var isX = 0;
        if (0 === angle1) {
            isX = offsetX1;
        } else if (90 === angle1) {
            if (270 === angle2) {
                isX = (offsetX1 + offsetX2) / 2;
            } else {
                isX = offsetX2 + pY1 * Math.tan((angle2 / 360) * 2 * Math.PI);
            }
        } else if (180 === angle1) {
            isX = offsetX1;
        } else if (270 === angle1) {
            if (90 === angle2) {
                isX = (offsetX1 + offsetX2) / 2;
            } else {
                isX = offsetX2 + pY1 * Math.tan((angle2 / 360) * 2 * Math.PI);
            }
        } else if (0 === angle2) {
            isX = offsetX2;
        } else if (90 === angle2) {
            isX = offsetX1 + pY2 * Math.tan((angle1 / 360) * 2 * Math.PI);
        } else if (180 === angle2) {
            isX = offsetX2;
        } else if (270 === angle2) {
            if (90 === angle1) {
                isX = (offsetX1 + offsetX2) / 2;
            } else {
                isX = offsetX1 + pY2 * Math.tan((angle1 / 360) * 2 * Math.PI);
            }
        } else {
            var orgArc1 = (angle1 / 360) * 2 * Math.PI;
            var orgArc2 = (angle2 / 360) * 2 * Math.PI;
            isX =
                (offsetX1 * Math.tan(orgArc2) - offsetX2 * Math.tan(orgArc1)) /
                (Math.tan(orgArc2) - Math.tan(orgArc1));
        }
        isX = orgX + isX;
        return isX;
    }

    //计算两直线交点Y坐标
    function getIntersectionY(
        orgY,
        angle1,
        offsetX1,
        pY1,
        angle2,
        offsetX2,
        pY2
    ) {
        var isY = 0;
        if (0 === angle1) {
            if (90 === angle2) {
                isY = pY2;
            } else if (180 === angle2) {
                isY = (pY2 + pY1) / 2;
            } else if (270 === angle2) {
                isY = pY2;
            } else {
                isY =
                    (offsetX1 - offsetX2) /
                    Math.tan((angle2 / 360) * 2 * Math.PI);
            }
        } else if (90 === angle1) {
            isY = pY1;
        } else if (180 === angle1) {
            if (0 === angle2) {
                isY = pY2;
            } else if (270 === angle2) {
                isY = pY2;
            } else {
                isY =
                    (offsetX1 - offsetX2) /
                    Math.tan((angle2 / 360) * 2 * Math.PI);
            }
        } else if (270 === angle1) {
            isY = pY1;
        } else if (90 === angle2) {
            isY = pY2;
        } else if (180 === angle2) {
            isY =
                (offsetX2 - offsetX1) / Math.tan((angle1 / 360) * 2 * Math.PI);
        } else if (270 === angle2) {
            isY = pY2;
        } else {
            var orgArc1 = (angle1 / 360) * 2 * Math.PI;
            var orgArc2 = (angle2 / 360) * 2 * Math.PI;
            isY =
                (offsetX2 - offsetX1) / (Math.tan(orgArc1) - Math.tan(orgArc2));
        }
        isY = orgY - isY;
        return isY;
    }

    //右转渠化当前路口左下角（起始点）X
    function getChannelStartX(orgX, prevAngle, crntAngle, pX, channelRadian) {
        var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
        if (prevAngle > crntAngle) {
            crntAngle = crntAngle + 360;
        }
        var angle1 = (crntAngle - prevAngle) / 2;
        var arc1 = (angle1 / 360) * 2 * Math.PI;
        var l1 = channelRadian / Math.tan(arc1);
        var channelStartX = pX + l1 * Math.sin(crntArc1);
        channelStartX = orgX + channelStartX;
        return channelStartX;
    }

    //右转渠化当前路口左下角（起始点）Y
    function getChannelStartY(orgY, prevAngle, crntAngle, pY, channelRadian) {
        var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
        if (prevAngle > crntAngle) {
            crntAngle = crntAngle + 360;
        }
        var angle1 = (crntAngle - prevAngle) / 2;
        var arc1 = (angle1 / 360) * 2 * Math.PI;
        var l1 = channelRadian / Math.tan(arc1);
        var channelStartY = pY + l1 * Math.cos(crntArc1);
        channelStartY = orgY - channelStartY;
        return channelStartY;
    }

    //右转渠化前一路口右下角（终点）X
    function getChannelEndX(orgX, prevAngle, crntAngle, pX, channelRadian) {
        var prevArc1 = (prevAngle / 360) * 2 * Math.PI;
        if (prevAngle > crntAngle) {
            crntAngle = crntAngle + 360;
        }
        var angle1 = (crntAngle - prevAngle) / 2;
        var arc1 = (angle1 / 360) * 2 * Math.PI;
        var l1 = channelRadian / Math.tan(arc1);
        var channelEndX = pX + l1 * Math.sin(prevArc1);
        channelEndX = orgX + channelEndX;
        return channelEndX;
    }

    //右转渠化前一路口右下角（终点）Y
    function getChannelEndY(orgY, prevAngle, crntAngle, pY, channelRadian) {
        var prevArc1 = (prevAngle / 360) * 2 * Math.PI;
        if (prevAngle > crntAngle) {
            crntAngle = crntAngle + 360;
        }
        var angle1 = (crntAngle - prevAngle) / 2;
        var arc1 = (angle1 / 360) * 2 * Math.PI;
        var l1 = channelRadian / Math.tan(arc1);
        var channelEndY = pY + l1 * Math.cos(prevArc1);
        channelEndY = orgY - channelEndY;
        return channelEndY;
    }

    //计算右转渠化半径
    //交点：pX, pY
    //当前路口左下角：spX, spY
    //前一路口右下角：epX, epY
    //圆弧半径：cR
    function getChannelRadian(
        W,
        H,
        prevAngle,
        crntAngle,
        pX,
        pY,
        spX,
        spY,
        epX,
        epY,
        cR
    ) {
        var channelRadian = cR + CROSS_CHANNELRADIAN;
        var cRS = channelRadian;
        var cRE = channelRadian;
        //右转渠化起始点（当前路口左下角）X
        var channelStartX =
            getChannelStartX(W, prevAngle, crntAngle, pX, channelRadian) - W;
        //右转渠化起始点（当前路口左下角）Y
        var channelStartY =
            H - getChannelStartY(H, prevAngle, crntAngle, pY, channelRadian);
        //右转渠化终点（前一路口右下角）X
        var channelEndX =
            getChannelEndX(W, prevAngle, crntAngle, pX, channelRadian) - W;
        //右转渠化终点（前一路口右下角）Y
        var channelEndY =
            H - getChannelEndY(H, prevAngle, crntAngle, pY, channelRadian);
        //起始点与当前路口左下角距离
        var distStartSP = Math.sqrt(
            Math.pow(channelStartX - spX, 2) + Math.pow(channelStartY - spY, 2)
        );
        //当前路口左下角与交点距离
        var distSPP = Math.sqrt(Math.pow(pX - spX, 2) + Math.pow(pY - spY, 2));
        if (distStartSP < distSPP) {
            cRS = getChannelRadian(
                W,
                H,
                prevAngle,
                crntAngle,
                pX,
                pY,
                spX,
                spY,
                epX,
                epY,
                channelRadian
            );
        }
        // //终点与交点距离
        // var distEndP = Math.sqrt(Math.pow((channelEndX - pX), 2) +
        //     Math.pow((channelEndY - pY), 2));
        //终点与前一路口右下角距离
        var distEndEP = Math.sqrt(
            Math.pow(channelEndX - epX, 2) + Math.pow(channelEndY - epY, 2)
        );
        //前一路口右下角与交点距离
        var distEPP = Math.sqrt(Math.pow(pX - epX, 2) + Math.pow(pY - epY, 2));
        if (distEndEP < distEPP) {
            cRE = getChannelRadian(
                W,
                H,
                prevAngle,
                crntAngle,
                pX,
                pY,
                spX,
                spY,
                epX,
                epY,
                channelRadian
            );
        }
        channelRadian = cRS;
        if (cRS < cRE) {
            channelRadian = cRE;
        }
        return channelRadian;
    }

    //右转渠化半径调整
    //交点：pX, pY
    //圆弧起始点：cspX, cspY
    //圆弧终点：cepX, cepY
    //当前路口左下角：spX, spY
    //前一路口右下角：epX, epY
    //圆弧半径：cR
    function modifyChannelRadian(
        W,
        H,
        prevAngle,
        crntAngle,
        pX,
        pY,
        cspX,
        cspY,
        cepX,
        cepY,
        spX,
        spY,
        epX,
        epY,
        cR
    ) {
        var channelRadian = cR;
        var cRS = channelRadian;
        var cRE = channelRadian;
        //右转渠化外圈起始点（当前路口左下角）X
        var channelOutStartX = getChannelOutStartX(
            W,
            crntAngle,
            cspX,
            channelRadian
        );
        //右转渠化外圈起始点（当前路口左下角）Y
        var channelOutStartY = getChannelOutStartY(
            H,
            crntAngle,
            cspY,
            channelRadian
        );
        //右转渠化外圈终点（前一路口右下角）X
        var channelOutEndX =
            getChannelOutEndX(W, prevAngle, cepX, channelRadian) - W;
        //右转渠化外圈终点（前一路口右下角）Y
        var channelOutEndY = getChannelOutEndY(
            H,
            prevAngle,
            cepY,
            channelRadian
        );
        //外圈起始点与交点距离
        // var distStartP = Math.sqrt(Math.pow((channelOutStartX - pX), 2) +
        //     Math.pow((channelOutStartY - pY), 2));
        //外圈起始点与当前路口左下角距离
        var distStartSP = Math.sqrt(
            Math.pow(channelOutStartX - spX, 2) +
                Math.pow(channelOutStartY - spY, 2)
        );
        //当前路口左下角与交点距离
        var distSPP = Math.sqrt(Math.pow(pX - spX, 2) + Math.pow(pY - spY, 2));
        if (distStartSP < distSPP) {
            cRS = cRS + CROSS_CHANNELWIDTH;
        }
        //外圈终点与交点距离
        var distEndP = Math.sqrt(
            Math.pow(channelOutEndX - pX, 2) + Math.pow(channelOutEndY - pY, 2)
        );
        //前一路口右下角与交点距离
        var distEPP = Math.sqrt(Math.pow(pX - epX, 2) + Math.pow(pY - epY, 2));
        if (distEndP < distEPP) {
            cRE = cRE + CROSS_CHANNELWIDTH;
        }
        channelRadian = cRS;
        if (cRS < cRE) {
            channelRadian = cRE;
        }
        return channelRadian;
    }

    //右转渠化圆心X
    function getCircleCenterX(orgX, prevAngle, crntAngle, pX, channelRadian) {
        if (prevAngle > crntAngle) {
            crntAngle = crntAngle + 360;
        }
        //夹角的一半
        var angle1 = (crntAngle - prevAngle) / 2;
        var arc1 = (angle1 / 360) * 2 * Math.PI;
        var l1 = channelRadian / Math.sin(arc1);
        var angle2 = angle1 + prevAngle;
        var arc2 = (angle2 / 360) * 2 * Math.PI;
        var circleCenterX = pX + l1 * Math.sin(arc2);
        circleCenterX = orgX + circleCenterX;
        return circleCenterX;
    }

    //右转渠化圆心Y
    function getCircleCenterY(orgY, prevAngle, crntAngle, pY, channelRadian) {
        if (prevAngle > crntAngle) {
            crntAngle = crntAngle + 360;
        }
        var angle1 = (crntAngle - prevAngle) / 2;
        var arc1 = (angle1 / 360) * 2 * Math.PI;
        var l1 = channelRadian / Math.sin(arc1);
        var angle2 = angle1 + prevAngle;
        var arc2 = (angle2 / 360) * 2 * Math.PI;
        var circleCenterY = pY + l1 * Math.cos(arc2);
        circleCenterY = orgY - circleCenterY;
        return circleCenterY;
    }

    //右转渠化起始角度（弧度）
    function getChannelStartAngle(crntAngle) {
        var channelStartAngle = 90 + crntAngle;
        if (360 < channelStartAngle) {
            channelStartAngle = channelStartAngle - 360;
        }
        return (channelStartAngle / 360) * 2 * Math.PI;
    }

    //右转渠化终止角度（弧度）
    function getChannelEndAngle(prevAngle) {
        var channelEndAngle = 270 + prevAngle;
        if (360 < channelEndAngle) {
            channelEndAngle = channelEndAngle - 360;
        }
        return (channelEndAngle / 360) * 2 * Math.PI;
    }

    //右转渠化当前路口左下角（外圈起始点）X
    function getChannelOutStartX(orgX, crntAngle, pX, channelRadian) {
        var l1 = Math.sqrt(
            Math.pow(channelRadian + CROSS_CHANNELWIDTH, 2) -
                Math.pow(channelRadian, 2)
        );
        var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
        var channelOutStartX = pX - l1 * Math.sin(crntArc1);
        channelOutStartX = orgX + channelOutStartX;
        return channelOutStartX;
    }

    //右转渠化当前路口左下角（外圈起始点）Y
    function getChannelOutStartY(orgY, crntAngle, pY, channelRadian) {
        var l1 = Math.sqrt(
            Math.pow(channelRadian + CROSS_CHANNELWIDTH, 2) -
                Math.pow(channelRadian, 2)
        );
        var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
        var channelOutStartY = pY - l1 * Math.cos(crntArc1);
        channelOutStartY = orgY - channelOutStartY;
        return channelOutStartY;
    }

    //右转渠化前一路口右下角（外圈终点）X
    function getChannelOutEndX(orgX, crntAngle, pX, channelRadian) {
        var l1 = Math.sqrt(
            Math.pow(channelRadian + CROSS_CHANNELWIDTH, 2) -
                Math.pow(channelRadian, 2)
        );
        var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
        var channelOutEndX = pX - l1 * Math.sin(crntArc1);
        channelOutEndX = orgX + channelOutEndX;
        return channelOutEndX;
    }

    //右转渠化前一路口右下角（外圈终点）Y
    function getChannelOutEndY(orgY, crntAngle, pY, channelRadian) {
        var channelOutEndY;
        var l1 = Math.sqrt(
            Math.pow(channelRadian + CROSS_CHANNELWIDTH, 2) -
                Math.pow(channelRadian, 2)
        );
        var crntArc1 = (crntAngle / 360) * 2 * Math.PI;
        channelOutEndY = pY - l1 * Math.cos(crntArc1);
        channelOutEndY = orgY - channelOutEndY;
        return channelOutEndY;
    }

    //右转渠化外圈起始角度（弧度）
    function getChannelOutStartAngle(startAngle, channelRadian) {
        var arc1 = Math.acos(
            channelRadian / (channelRadian + CROSS_CHANNELWIDTH)
        );
        return startAngle + arc1;
    }

    //右转渠化外圈终止角度（弧度）
    function getChannelOutEndAngle(endAngle, channelRadian) {
        var arc1 = Math.acos(
            channelRadian / (channelRadian + CROSS_CHANNELWIDTH)
        );
        return endAngle - arc1;
    }

    //根据上一条道路计算路口中心点到当前道路横道线的距离
    function getDistByPrev(prevAngle, prevW, crntAngle, crntW) {
        var dist = prevW;
        if (prevAngle > crntAngle) {
            crntAngle = crntAngle + 360;
        }
        var intersection = crntAngle - prevAngle;
        if (90 > intersection) {
            var angle = intersection * (crntW / (prevW + crntW));
            var arc = (angle / 360) * 2 * Math.PI;
            dist = crntW / Math.tan(arc);
        }
        return dist;
    }

    //根据下一条道路计算路口中心点到当前道路横道线的距离
    function getDistByNext(crntAngle, crntW, nextAngle, nextW) {
        var dist = nextW;
        if (crntAngle > nextAngle) {
            nextAngle = nextAngle + 360;
        }
        var intersection = nextAngle - crntAngle;
        if (90 > intersection) {
            var angle = intersection * (crntW / (crntW + nextW));
            var arc = (angle / 360) * 2 * Math.PI;
            dist = crntW / Math.tan(arc);
        }
        return dist;
    }

    //计算路口中心点到当前道路横道线的距离
    function getDistance(prevRoad, road, nextRoad) {
        //上一道路出口道路宽度
        var pExitWidth =
            (getLanesWidth(prevRoad.exit) + prevRoad.medianWidth / 2) * SCALE;
        //当前路口出口道路宽度
        var exitWidth =
            (getLanesWidth(road.exit) + road.medianWidth / 2) * SCALE;
        //当前路口入口道路宽度
        var entrWidth =
            (getLanesWidth(road.entrance) + road.medianWidth / 2) * SCALE;
        //下个路口入口道路宽度
        var nEntrWidth =
            (getLanesWidth(nextRoad.entrance) + nextRoad.medianWidth / 2) *
            SCALE;
        //计算
        var distByPrev = getDistByPrev(
            prevRoad.angle,
            pExitWidth,
            road.angle,
            entrWidth
        );
        var distByNext = getDistByNext(
            road.angle,
            exitWidth,
            nextRoad.angle,
            nEntrWidth
        );
        var distance = distByPrev;
        if (distByNext > distByPrev) {
            distance = distByNext;
        }
        distance = distance + CROSS_RADIUS;
        return distance;
    }

    //计算路口宽度
    function getLanesWidth(data) {
        var line = 0;
        if (
            "undefined" === typeof data ||
            "undefined" === typeof data.lanes ||
            data.lanes.length === 0
        ) {
        } else {
            for (var i = 0; i < data.lanes.length; i++) {
                line += data.lanes[i].width;
            }
        }
        return line;
    }

    var SVGDraw = function(ele, opts) {
        var defaults = {
            fill: "white"
        };
        this.ele = ele;
        this.coordinate = []; //保存所有道路相关坐标, 在绘制辅道分支使用 {roadId: '1', leftTopX: 100, leftTopY: 100}
        this.options = $.extend({}, defaults, opts);
        d3.select(ele).html("");

        var svg = d3.select(ele).append("svg").attr({
            "x": 0,
            "y": 0,
            "width": CANVAS_WIDTH,
            "height": CANVAS_HEIGHT,
            "id": this.options.id,
            "name": this.options.name,
            "viewBox": '-320 -340 1270 1300'
        })
        var child = svg.append('g');

        svg.call(d3.behavior.zoom()
            .translate([0, 0])
            .scale(1.0)
            .scaleExtent([0.5, 4])
            .on("zoom", function () {
                child.attr("transform", "translate(" + d3.event.translate[0] + "," + d3.event.translate[1] + ") scale(" + d3.event.scale + ")");
            })
        );
        this.svg = child
        this.draw();
        this.drawAuxiliary();

    };
    // 循环绘制路口
    SVGDraw.prototype.draw = function() {
        $("#mask").remove();
        var roadList = this.options.roads.filter(function(road) {
            return !road.auxiliary;
        });

        //计算路口中心点到当前道路横道线的距离
        var distance = {};
        var roadLen = roadList.length;

        if (roadLen == 2) {
            distance[0] = distance[1] = 0;
        }else {
            for (var i = 0; i < roadLen; i++) {
                var prevRoad1 = roadList[i - 1];
                var nextRoad1 = roadList[i + 1];
                if (i === 0) {
                    prevRoad1 = roadList[roadLen - 1];
                }else if (i == roadLen - 1) {
                    nextRoad1 = roadList[0];
                }
                distance[i] = getDistance(prevRoad1, roadList[i], nextRoad1);
            }
        }

        //作图
        for (var j = 0; j < roadLen; j++) {
            var prevDist = distance[j - 1],
                crntDist = distance[j],
                nextDist = distance[j + 1];

            var prevRoad = roadList[j - 1],
                nextRoad = roadList[j + 1];

            if (j === 0) {
                prevRoad = roadList[roadLen - 1];
                prevDist = distance[roadLen - 1];
            }else if (j == roadLen - 1) {
                nextRoad = roadList[0];
                nextDist = distance[0];
            }
            // 一字型路口只有一条斑马线
            if (roadLen == 2 && j === 1) {
                CROSS_HEIGHT = 0;
            }
            this.parseRoad(
                this.svg,
                roadList[j],
                prevRoad,
                nextRoad,
                prevDist,
                crntDist
            );
        }
        maskDiv()
    };
    // 绘制辅道分支
    SVGDraw.prototype.drawAuxiliary = function() {
        var ele = this.ele;
        var roadList = this.options.roads;
        // 找出宿主分支，并获取宿主分支的相关坐标
        for (var i = 0; i < roadList.length; i++) {
            if (roadList[i].auxiliary) {
                var hostRoad = roadList.find(function(item) {
                    return item.angle === roadList[i].angle && !item.auxiliary;
                });
                var hostRoadCoordinate = this.coordinate.find(function(item) {
                    return item.roadId === hostRoad.id;
                });
                this.parseAuxiliary(roadList[i], hostRoadCoordinate);
            }
        }
        window.crossRes = this.options;
        window.crossRes.roads.forEach(function(val, i, arr) {
            delete arr[i].element;
        });
    };

    SVGDraw.prototype.draw1 = function(x, y, scale) {
        var cross = this.options;
        var ele = this.ele;
        $("#mask").remove();
        var roadList = cross.roads.filter(function(road) {
            return !road.auxiliary;
        });
        this.svg.html('')
        //计算路口中心点到当前道路横道线的距离
        var distance = {};
        var roadLen = roadList.length;
        if (roadLen == 2) {
            distance[0] = distance[1] = 0;
        }else {
            for (var i = 0; i < roadLen; i++) {
                var prevRoad1 = roadList[i];
                var nextRoad1 = roadList[i];

                if (i === 0) {
                    var p = roadList[roadLen - 1];
                    prevRoad1 = p.auxiliary ? roadList[roadLen - 2] : p;
                } else if (i === 1) {
                    var p = roadList[0];
                    prevRoad1 = p.auxiliary ? roadList[roadLen - 1] : p;
                } else {
                    prevRoad1 = roadList[i - 1].auxiliary
                        ? roadList[i - 2]
                        : roadList[i - 1];
                }

                if (i === roadLen - 1) {
                    nextRoad1 = roadList[0];
                } else {
                    nextRoad1 = roadList[i + 1];
                }

                if (roadList[i].auxiliary) {
                    distance[i] =
                        (getLanesWidth(prevRoad1.exit) +
                            prevRoad1.medianWidth / 2) *
                        SCALE;
                } else {
                    distance[i] = getDistance(prevRoad1, roadList[i], nextRoad1);
                }
            }
        }

        //作图
        for (var j = 0; j < roadLen; j++) {
            var prevDist = distance[j];
            var crntDist = distance[j];
            var nextDist = distance[j];
            var prevRoad = roadList[j];
            // var color="";
            if (j !== 0) {
                prevDist = distance[j - 1];
                prevRoad = roadList[j - 1];
            } else {
                prevDist = distance[roadLen - 1];
                prevRoad = roadList[roadLen - 1];
            }
            var nextRoad = roadList[j];
            if (j !== roadLen - 1) {
                nextDist = distance[j + 1];
                nextRoad = roadList[j + 1];
            } else {
                nextDist = distance[0];
                nextRoad = roadList[0];
            }
            // 一字型路口只有一条斑马线
            if (roadLen == 2 && j === 1) {
                CROSS_HEIGHT = 0;
            }
            this.parseRoad(
                this.svg,
                roadList[j],
                prevRoad,
                nextRoad,
                prevDist,
                crntDist
            ); //color
        }
        maskDiv()
        this.drawAuxiliary();
    };

    SVGDraw.prototype.getCross = function() {
        return this.options;
    };

    //绘制路口
    SVGDraw.prototype.parseRoad = function(
        svg,
        road,
        prevRoad,
        nextRoad,
        prevDist,
        distance
    ) {
        //color
        //定义变量W为svg画布宽度的一半
        var W = CANVAS_WIDTH / 2;
        //定义变量W为svg画布高度的一半
        var H = CANVAS_HEIGHT / 2;
        //重新设置斑马线高度
        if (0 === road.sidewalk) {
            //CROSS_HEIGHT = 0;
        }
        //上一道路出口道路宽度
        var pExitWidth =
            (getLanesWidth(prevRoad.exit) + prevRoad.medianWidth / 2) * SCALE;
        //当前路口出口道路宽度
        var exitWidth =
            (getLanesWidth(road.exit) + road.medianWidth / 2) * SCALE;
        //当前路口入口道路宽度
        var entrWidth =
            (getLanesWidth(road.entrance) + road.medianWidth / 2) * SCALE;
        //下个路口入口道路宽度
        // var nEntrWidth = (getLanesWidth(nextRoad.entrance) +
        //     nextRoad.medianWidth / 2) * SCALE;
        //路的宽度
        var width =
            (getLanesWidth(road.exit) +
                getLanesWidth(road.entrance) +
                road.medianWidth) *
            SCALE;
        //路的高度
        var height = getLaneHeight();
        //当前路口左上角点的坐标
        var leftTopX = getLeftTopX(
            W,
            road.angle,
            entrWidth,
            getLaneHeight(),
            distance
        );
        var leftTopY = getLeftTopY(
            H,
            road.angle,
            entrWidth,
            getLaneHeight(),
            distance
        );
        //前一路口右下角点的坐标
        var rightBottomX = getRightBotomX(
            W,
            prevRoad.angle,
            pExitWidth,
            prevDist
        );
        var rightBottomY = getRightBotomY(
            H,
            prevRoad.angle,
            pExitWidth,
            prevDist
        );
        //当前路口左下角点的坐标
        var leftBottomX = getLeftBotomX(W, road.angle, entrWidth, distance);
        var leftBottomY = getLeftBotomY(H, road.angle, entrWidth, distance);
        //当前路口右下角点的坐标
        var rightPresentBottomX = getRightBotomX(
            W,
            road.angle,
            exitWidth,
            distance
        );
        var rightPresentBottomY = getRightBotomY(
            H,
            road.angle,
            exitWidth,
            distance
        );
        //计算前一路口出口右边线直线方程X偏移量
        var offsetX1 = getOffsetX(
            prevRoad.angle,
            rightBottomX - W,
            H - rightBottomY
        );
        //计算当前路口入口左边线直线方程X偏移量
        var offsetX2 = getOffsetX(road.angle, leftBottomX - W, H - leftBottomY);
        //计算路口转角控制点X坐标
        var contrPX = getIntersectionX(
            W,
            prevRoad.angle,
            offsetX1,
            H - rightBottomY,
            road.angle,
            offsetX2,
            H - leftBottomY
        );
        //计算路口转角控制点Y坐标
        var contrPY = getIntersectionY(
            H,
            prevRoad.angle,
            offsetX1,
            H - rightBottomY,
            road.angle,
            offsetX2,
            H - leftBottomY
        );
        //右转渠化起始角度
        var channelStartAngle = getChannelStartAngle(road.angle);
        //右转渠化终止角度
        var channelEndAngle = getChannelEndAngle(prevRoad.angle);
        if (Math.PI < channelStartAngle - channelEndAngle) {
            channelStartAngle = channelStartAngle - 2 * Math.PI;
        }
        //右转渠化半径
        var channelRadian = getChannelRadian(
            W,
            H,
            prevRoad.angle,
            road.angle,
            contrPX - W,
            H - contrPY,
            leftBottomX - W,
            H - leftBottomY,
            rightBottomX - W,
            H - rightBottomY,
            0
        );
        //右转渠化当前路口左下角（起始点）X
        var channelStartX = getChannelStartX(
            W,
            prevRoad.angle,
            road.angle,
            contrPX - W,
            channelRadian
        );
        //右转渠化当前路口左下角（起始点）Y
        var channelStartY = getChannelStartY(
            H,
            prevRoad.angle,
            road.angle,
            H - contrPY,
            channelRadian
        );
        //右转渠化前一路口右下角（终点）X
        var channelEndX = getChannelEndX(
            W,
            prevRoad.angle,
            road.angle,
            contrPX - W,
            channelRadian
        );
        //右转渠化前一路口右下角（终点）Y
        var channelEndY = getChannelEndY(
            H,
            prevRoad.angle,
            road.angle,
            H - contrPY,
            channelRadian
        );
        //右转渠化半径调整
        channelRadian = modifyChannelRadian(
            W,
            H,
            prevRoad.angle,
            road.angle,
            contrPX - W,
            H - contrPY,
            channelStartX - W,
            H - channelStartY,
            channelEndX - W,
            H - channelEndY,
            leftBottomX - W,
            H - leftBottomY,
            rightBottomX - W,
            H - rightBottomY,
            channelRadian
        );
        //右转渠化外圈起始角度（弧度）
        var channelOutStartAngle = getChannelOutStartAngle(
            channelStartAngle,
            channelRadian
        );
        //右转渠化外圈终止角度（弧度）
        var channelOutEndAngle = getChannelOutEndAngle(
            channelEndAngle,
            channelRadian
        );
        //右转渠化圆心X
        var circleCenterX = getCircleCenterX(
            W,
            prevRoad.angle,
            road.angle,
            contrPX - W,
            channelRadian
        );
        //右转渠化圆心Y
        var circleCenterY = getCircleCenterY(
            H,
            prevRoad.angle,
            road.angle,
            H - contrPY,
            channelRadian
        );
        //右转渠化当前路口左下角（外圈起始点）X
        var channelOutStartX = getChannelOutStartX(
            W,
            road.angle,
            channelStartX - W,
            channelRadian
        );
        //右转渠化当前路口左下角（外圈起始点）Y
        var channelOutStartY = getChannelOutStartY(
            H,
            road.angle,
            H - channelStartY,
            channelRadian
        );
        //右转渠化前一路口右下角（外圈终点）X
        var channelOutEndX = getChannelOutEndX(
            W,
            prevRoad.angle,
            channelEndX - W,
            channelRadian
        );
        //右转渠化前一路口右下角（外圈终点）Y
        var channelOutEndY = getChannelOutEndY(
            H,
            prevRoad.angle,
            H - channelEndY,
            channelRadian
        );
        //计算两路口夹角
        var prevAngle = prevRoad.angle;
        var crntAngle = road.angle;
        if (prevAngle > crntAngle) {
            crntAngle = crntAngle + 360;
        }
        //绘制中心路口
        drawCenter(
            svg,
            rightBottomX,
            rightBottomY,
            leftBottomX,
            leftBottomY,
            rightPresentBottomX,
            rightPresentBottomY,
            contrPX,
            contrPY,
            W,
            H
        );

        //保存原有色int方向
        var roadDirection = road.direction;
        //判断road每个角度属于哪个方向
        if (road.angle >= -22.5 && road.angle <= 22.5) {
            if ("4" === road.direction) {
                road.direction = "北";
            }
        } else if (road.angle >= 67.5 && road.angle <= 112.5) {
            if ("1" === road.direction) {
                road.direction = "东";
            }
        } else if (road.angle >= 157.5 && road.angle <= 202.5) {
            if ("3" === road.direction) {
                road.direction = "南";
            }
        } else if (road.angle >= 247.5 && road.angle <= 292.5) {
            if ("2" === road.direction) {
                road.direction = "西";
            }
        } else if (road.angle > 22.5 && road.angle < 67.5) {
            if ("5" === road.direction) {
                road.direction = "东北";
            }
        } else if (road.angle > 112.5 && road.angle < 157.5) {
            if ("7" === road.direction) {
                road.direction = "东南";
            }
        } else if (road.angle > 202.5 && road.angle < 247.5) {
            if ("8" === road.direction) {
                road.direction = "西南";
            }
        } else {
            if ("6" === road.direction) {
                road.direction = "西北";
            }
        }
        //根据每一个road信息创建一个G元素
        this.rectRoad = svg.append("g").attr({
            transform:
                "translate(" +
                leftTopX +
                "," +
                leftTopY +
                ")rotate(" +
                road.angle +
                ")",
            id: road.id,
            name: road.name,
            directions: road.direction
        });

        road.element = this.rectRoad;
        this.coordinate.push({
            roadId: road.id,
            leftTopX: leftTopX,
            leftTopY: leftTopY,
            leftBottomX: leftBottomX,
            leftBottomY: leftBottomY,
            rightBottomX: rightBottomX,
            rightBottomY: rightBottomY,
            contrPX: contrPX,
            contrPY: contrPY,
            channelEndX: channelEndX,
            channelEndY: channelEndY
        });
        //给每条分支text分配位置
        var roadX, roadY;
        if (road.angle >= 215 && road.angle < 270) {
            roadX = leftTopX - 160;
            roadY = leftTopY - 40;
        } else if (road.angle > 135 && road.angle < 215) {
            roadX = leftTopX - 130;
            roadY = leftTopY + 140;
        } else if (road.angle > 90 && road.angle < 180) {
            roadX = leftTopX - 60;
            roadY = leftTopY + 140;
        } else {
            roadX = leftTopX + 10;
            roadY = leftTopY;
        }
        this.rectRoad.append("text").attr({
                    x: CROSS_CHANNELEVELZ,
                    y: -CROSS_CHANNEVERTICALZ * 3
                }).style({
            fill: "#FFF",
            "font-size": "20px"
        })
        .text(road.name);
        //添加指北针
        svg.append("image").attr({
            width: 40,
            height: 50,
            "xlink:href": "../img/westLog.png",
            transform: "translate(740,-350) scale(2, 1.5)"
        });

        //将g元素添加一个矩形
        //添加道路
        this.rectRoad.append("rect").attr({
            width: width,
            height: height,
            fill: "#527c88"
        });
        //绘制进口车道
        drawEntrance(road, getLaneHeight(), this); //color
        //绘制中线
        drawMedian(road, entrWidth);
        //排序每一组Exit
        sortExit(road);
        //绘制出口车道
        drawExit(road, entrWidth + (road.medianWidth / 2) * SCALE);
        //绘制斑马线
        drawCross(
            road,
            width,
            entrWidth - (road.medianWidth / 2) * SCALE,
            getLanesWidth(road.entrance) * SCALE,
            (getLanesWidth(road.entrance) + road.medianWidth) * SCALE,
            this
        );

        $(".bran" + road.name).remove();
        $("#topContain3").append(
            `<label class="bran${road.name}" style="display:none">${road.name}：&nbsp;&nbsp; <button class="layui-btn-sm layui-btn-radius layui-btn-primary" id=cancle${road.name}>打开</button>&nbsp;&nbsp;<button class="layui-btn-sm layui-btn-radius layui-btn-normal" id="open${road.name}" >取消</button>      </label>`
        );
        if ($(".branch" + road.name).length > 0) {
        } else {
            if (road.sidewalk == 1) {
                $("#topContain3").append(
                    '<form class="layui-form branch' +
                        road.name +
                        ' action=""><div class="layui-form-item" style="margin-bottom:0"><label class="layui-form-label" style="text-align:left;">' +
                        road.name +
                        '</label><div class="layui-input-block" style="padding:9px"><input type="checkbox" lay-filter="test"  name="' +
                        road.name +
                        '"  id="check' +
                        road.name +
                        '" title="打开"  > </div> </div></form>'
                );
            } else {
                $("#topContain3").append(
                    '<form class="layui-form branch' +
                        road.name +
                        ' action=""><div class="layui-form-item" style="margin-bottom:0"><label class="layui-form-label" style="text-align:left;">' +
                        road.name +
                        '</label><div class="layui-input-block" style="padding:9px"><input type="checkbox" lay-filter="test"  name="' +
                        road.name +
                        '"  id="check' +
                        road.name +
                        '" title="打开" checked > </div> </div></form>'
                );
            }
        }
        layui.use("form", function() {
            var form = layui.form;

            form.on("checkbox(test)", function(data) {
                if (data.elem.checked == false) {
                    $("#open" + data.elem.name).trigger("click");
                } else if (data.elem.checked == true) {
                    $("#cancle" + data.elem.name).trigger("click");
                }
            });
        });
        //$("#topContain3").unbind("click");

        //绘制右转渠化和左转待转区
        drawChanne(
            road,
            crntAngle,
            prevAngle,
            rightBottomX,
            rightBottomY,
            leftBottomX,
            leftBottomY,
            svg,
            getLanesWidth(road.entrance) * SCALE,
            contrPX,
            contrPY,
            channelStartAngle,
            channelEndAngle,
            channelRadian,
            channelStartX,
            channelStartY,
            channelEndX,
            channelEndY,
            channelOutStartAngle,
            channelOutEndAngle,
            circleCenterX,
            circleCenterY,
            channelOutStartX,
            channelOutStartY,
            channelOutEndX,
            channelOutEndY
        );
        //进口增加减少道路
        eventEntranceButton(road, this);
        // //出口增加减少道路
        eventExitButton(road, width, this);
        //灯组事件
        lightGroup(road, height, this);
        //添加删除二次行人灯
        pedestrianLightsDiv(
            this,
            road,
            entrWidth - (road.medianWidth / 2) * SCALE
        );
        //判断行人灯事件
        judgementCross(this, road, entrWidth - (road.medianWidth / 2) * SCALE);
        //重新设置斑马线高度
        CROSS_HEIGHT = 6 * SCALE;
    };

    //绘制辅道分支
    SVGDraw.prototype.parseAuxiliary = function(road, hostRoadCoordinate) {
        //路的宽度
        var width =
            (getLanesWidth(road.exit) + getLanesWidth(road.entrance)) * SCALE;
        //路的高度
        var height =
            getLaneHeight() +
            CROSS_HEIGHT +
            (hostRoadCoordinate.leftBottomX - hostRoadCoordinate.rightBottomX);
        // 按理说这里是要计算获得坐标的，先忽略吧
        // 北、南 - channelEndX,leftTopY
        // 东、西 - leftTopX,channelEndY
        var translateX = hostRoadCoordinate.channelEndX,
            translateY = hostRoadCoordinate.leftTopY;

        if (road.angle === 90 || road.angle === 270) {
            translateX = hostRoadCoordinate.leftTopX;
            translateY = hostRoadCoordinate.channelEndY;
        }

        this.rectRoad = this.svg.append("g").attr({
            transform:
                "translate(" +
                translateX +
                "," +
                translateY +
                ")rotate(" +
                road.angle +
                ")",
            id: road.id,
            name: road.name,
            directions: road.direction
        });

        road.element = this.rectRoad;
        var dis = (hostRoadCoordinate.contrPY - hostRoadCoordinate.leftBottomY);
        if (road.angle === 90) {
            dis = hostRoadCoordinate.leftBottomX - hostRoadCoordinate.contrPX;
        } else if (road.angle === 180) {
            dis = hostRoadCoordinate.leftBottomY - hostRoadCoordinate.contrPX;
        } else if (road.angle === 270) {
            dis = hostRoadCoordinate.contrPX - hostRoadCoordinate.leftBottomX;
        }
        var rectHeight = getLaneHeight() + dis;
        var linePath = "M0 " + rectHeight + " v-" + dis + " M" + width + " " + rectHeight + " v-" + dis;
        this.rectRoad.append("rect").attr({
            width: width,
            height: rectHeight,
            fill: "#527c88"
        });
        // console(this.svg, 'leftTop', hostRoadCoordinate.leftTopX, hostRoadCoordinate.leftTopY)
        // 画斑马线到插到主路路段的边框
        var dis = hostRoadCoordinate.contrPY - hostRoadCoordinate.rightBottomY;
        this.rectRoad.append("path").attr({
            stroke: "white",
            "stroke-width": "5",
            d: linePath,
            // fill:
        });
        drawEntrance(road, getLaneHeight(), this);
        drawCross(road, width);
        //进口增加减少道路
        eventEntranceButton(road, this);
        //灯组事件
        lightGroup(road, rectHeight, this);
    };

    /**************************************绘制路口********************************************/
    //绘制进口车道
    function drawEntrance(road, laneHeight, p) {
        //color
        if (
            "undefined" === typeof road.entrance ||
            "undefined" === typeof road.entrance.lanes ||
            road.entrance.lanes.length === 0
        ) {
        } else {
            road.element.append("line").attr({
                x1: 0,
                y1: 0,
                x2: 0,
                y2: laneHeight - CROSS_HEIGHT,
                stroke: "white",
                "stroke-width": 4
            });
            var x = getLanesWidth(road.entrance) * SCALE;
            var laneg = road.element.append("g");
            for (var i = 0; i < road.entrance.lanes.length; i++) {
                var lane1 = laneg.append("line").attr({
                    x1: x,
                    y1: 0,
                    x2: x,
                    y2: laneHeight - CROSS_HEIGHT,
                    stroke: "white",
                    "stroke-width": 4,
                    number: road.entrance.lanes[i].number,
                    id: road.entrance.lanes[i].id
                });
                var x1 = x;
                x = x + -road.entrance.lanes[i].width * SCALE;
                var x2 = x;
                //进口分线
                road.element.append("line").attr({
                    x1: x1,
                    y1: laneHeight - CROSS_HEIGHT,
                    x2: x2,
                    y2: laneHeight - CROSS_HEIGHT,
                    stroke: "white",
                    "stroke-width": 5
                });

                var arrowX = (x2 - x1) / 2 + x1;
                var ARROW_PATH_GROUP = [
                    // "Definition Path",
                    PATH_LEFTARROW, //绘制左转箭头
                    PATH_STRAIGHTARROW, //绘制直行箭头
                    PATH_RIGHTARROW, //绘制右转箭头
                    PATH_STRAIGHTORLEFTARROW, //绘制前方可直行或左转箭头
                    PATH_STRAIGHTORRIGHTARROW, //绘制前方可直行或右转箭头
                    PATH_FORWARDTURNARROW, //绘制指示前方掉头箭头
                    PATH_TURNLEFTORTURNARROW, //绘制指示前方可左转或掉头
                    PATH_STRAIGHTLEFTRIGHT, //可直行或左右转
                    PATH_STRAIGHTORTURNAROUNDARROW, //绘制指示前方可直行或掉头
                    PATH_LEFTORRIGHTTURNARROW //绘制前方道路仅可左右转弯
                    // PATH_LEFTORLEFTARROW,//绘制左弯或需向左合流箭
                    // PATH_RIGHTORRIGHTARROW//绘制右弯或需向右合流箭
                ];
                //绘制箭头
                var arrowG = road.element.append("g");
                var rect = arrowG.append("rect").attr({
                    width: road.entrance.lanes[i].width * SCALE * 4,
                    height: 290,
                    fill: "#527c88",
                    stroke: "#527c88",
                    "strke-width": 2,
                    opacity: 0,
                    transform:
                        "translate(" +
                        (arrowX - 6) +
                        "," +
                        (laneHeight - getEntrArrowP()) +
                        ") rotate(0) scale(" +
                        (6 === road.entrance.lanes[i].direction
                            ? "0.14"
                            : "0.16") +
                        ",0.15)"
                });
                var Arrow1 = arrowG.append("path").attr({
                    d: ARROW_PATH_GROUP[road.entrance.lanes[i].direction - 1],
                    transform:
                        "translate(" +
                        arrowX +
                        "," +
                        (laneHeight - getEntrArrowP()) +
                        ") rotate(0) scale(" +
                        (6 === road.entrance.lanes[i].direction
                            ? "0.14"
                            : "0.16") +
                        ",0.15)",
                    fill: "white", //color
                    stroke: "white", //color
                    "stroke-width": 2,
                    class: "arrows1"
                });
                //绘制箭头
                var arrowG2 = road.element.append("g");
                if (road.entrance.lanes[i].preDirection >= 1) {
                    var rect2 = arrowG2.append("rect").attr({
                        width: road.entrance.lanes[i].width * SCALE * 5,
                        height: 290,
                        fill: "#527c88",
                        stroke: "#527c88",
                        "strke-width": 2,
                        opacity: 0,
                        transform:
                            "translate(" +
                            (arrowX - 8) +
                            "," +
                            25 +
                            ") rotate(0) scale(" +
                            (6 === road.entrance.lanes[i].direction
                                ? "0.14"
                                : "0.16") +
                            ",0.15)"
                    });
                }
                var Arrow2 = arrowG2.append("path").attr({
                    d:
                        ARROW_PATH_GROUP[
                            road.entrance.lanes[i].preDirection - 1
                        ],
                    transform:
                        "translate(" +
                        arrowX +
                        "," +
                        (laneHeight - 335) +
                        ") rotate(0) scale(" +
                        (6 === road.entrance.lanes[i].preDirection
                            ? "0.14"
                            : "0.16") +
                        ",0.15)",
                    fill: "white", //color
                    stroke: "white", //color
                    "stroke-width": 2
                });

                arrowG.index = i;
                arrowG2.index = i;
                // var roadIndex1 = road.entrance.lanes[i].direction;
                // var roadIndex2 = road.entrance.lanes[i].preDirection;
                // var arry = road.entrance.lanes;
                //绘制特殊道路
                eventDraw(road, arrowG.index, arrowX, x1, x2);
                //箭头点击事件
                // eventArrow(
                //     arrowG,
                //     road,
                //     p,
                //     arrowG.index,
                //     1,
                //     roadIndex1,
                //     Arrow1
                // );
                // //箭头点击事件
                // eventArrow(
                //     arrowG2,
                //     road,
                //     p,
                //     arrowG2.index,
                //     2,
                //     roadIndex2,
                //     Arrow2
                // );
                // //道路点击事件
                // eventRoad(road, laneg, lane1, arry, p);
            }
        }
    }

    //绘制中央隔离带
    function drawMedian(road, x) {
        //中线颜色
        var lColor = "";
        //中线宽度
        var lWidth = road.medianWidth * SCALE;
        var xW;
        var strokeW;
        if (0 === road.medianType) {
            xW = x + lWidth / 2;
            strokeW = 4;
            for (var i = 0; i < 6; i++) {
                road.element.append("circle").attr({
                    cx: x,
                    cy: getLaneHeight() - 75 - i * 50,
                    r: lWidth / 2,
                    "stroke-width": 3,
                    stroke: "#527c88",
                    fill: "white"
                });
            }
        } else if (2 === road.medianType) {
            xW = x + lWidth / 2;
            strokeW = 4;
        } else if (3 === road.medianType) {
            xW = x;
            strokeW = lWidth;
        } else if (4 === road.medianType) {
            xW = x + lWidth / 2;
            strokeW = 4;
            for (var j = 0; j < 7; j++) {
                road.element.append("line").attr({
                    x1: x + lWidth / 2,
                    y1: getLaneHeight() - CROSS_HEIGHT - 25 - 50 * j,
                    x2: x - lWidth / 2,
                    y2: getLaneHeight() - CROSS_HEIGHT - 50 * j,
                    stroke: "white",
                    "stroke-width": 4,
                    fill: "white"
                });
            }
        }
        road.element.append("line").attr({
            x1: xW,
            y1: 0,
            x2: xW,
            y2: getLaneHeight() - CROSS_HEIGHT,
            stroke: "white",
            "stroke-width": strokeW
        });
        road.element.append("line").attr({
            x1: x - lWidth / 2,
            y1: 0,
            x2: x - lWidth / 2,
            y2: getLaneHeight() - CROSS_HEIGHT,
            stroke: "white",
            "stroke-width": 4
        });
    }

    //排序每一组Exit
    function sortExit(road) {
        if (
            "undefined" === typeof road.exit ||
            "undefined" === typeof road.exit.lanes ||
            road.exit.lanes.length === 0
        ) {
        } else {
            for (var i = 0; i < road.exit.lanes.length; i++) {
                var a = 0;
                for (var j = i + 1; j < road.exit.lanes.length; j++) {
                    if (road.exit.lanes[i].number > road.exit.lanes[j].number) {
                        a = road.exit.lanes[i];
                        road.exit.lanes[i] = road.exit.lanes[j];
                        road.exit.lanes[j] = a;
                    }
                }
            }
        }
    }

    //绘制出口车道
    function drawExit(road, startX) {
        if (
            "undefined" === typeof road.exit ||
            "undefined" === typeof road.exit.lanes ||
            road.exit.lanes.length === 0
        ) {
        } else {
            var x = startX;
            var x1 = x;
            x = x + road.exit.lanes[0].width * SCALE;
            var x2 = x;
            var i = 0;
            for (; i < road.exit.lanes.length - 1; i++) {
                exit(road, x, x1, x2, i, 24.5);
                x1 = x;
                x = x + road.exit.lanes[i + 1].width * SCALE;
                x2 = x;
            }
            exit(road, x, x1, x2, i, 0);
        }
    }

    //出口车道
    function exit(road, x, x1, x2, i, style) {
        var curLane = road.exit.lanes[i];
        road.element.append("line").attr({
            x1: x,
            y1: 0,
            x2: x,
            y2: getLaneHeight() - CROSS_HEIGHT,
            stroke: "white",
            "stroke-width": 3,
            number: curLane.number,
            id: curLane.id,
            "stroke-dasharray": style
        });
        var arrowX = (x2 - x1) / 2 + x1;
        if (2 === curLane.direction) {
            road.element.append("path").attr({
                d: PATH_STRAIGHTARROW,
                transform:
                    "translate(" +
                    arrowX +
                    "," +
                    (getLaneHeight() - getExitArrowP()) +
                    ") rotate(180) scale(0.16,0.15)",
                fill: "white",
                stroke: "white",
                "stroke-width": 2
            });
        }
        drawExitLaneTypeMarker(road, i, arrowX, x1, x2);
    }
    function drawExitLaneTypeMarker(road, index, arrowX, x1, x2) {
        var curLaneType = road.exit.lanes[index].type;
        var callbackMaps = {
            1: function(){},
            2: bus,
            3: tide,
            4: reversible,
            7: nonMotorVehicle,
        };

        callbackMaps[curLaneType || 1] && callbackMaps[curLaneType || 1]()

        function bus() {
            road.element.append("text")
                .text("用专交公")
                .attr({
                    transform:
                    "translate(" + arrowX + "," + getLaneHeight() / 4.4 + ")",
                    textLength: "120"
                })
                .style({
                    "font-size": "14px",
                    fill: "white",
                    "writing-mode": "tb-rl",
                    "font-weight": "bold"
                });
        }

        function tide() {
            var k = getLaneHeight() - CROSS_HEIGHT;
            var d1 = x1 + SPECIALENDPOINTS;
            var d2 = x2 - SPECIALENDPOINTS;
            var d3 = x1 + SPECIALSTARTINGPOINT;
            var d4 = x2 - SPECIALSTARTINGPOINT;
            drawTidalLane(road, k, d1 - 3);
            drawTidalLane(road, k, d2 + 3);
            drawTidalLane(road, k, d3 + 3);
            drawTidalLane(road, k, d4 - 3);
        }
        function reversible() {
            var d3 = x1 + SPECIALSTARTINGPOINT;
            var d4 = x2 - SPECIALSTARTINGPOINT;
            drawReverseVariable(road, d3);
            drawReverseVariable(road, d4);
        }
        function nonMotorVehicle() {
            road.element.append("image").attr({
                y: -15,
                width: BIKE_WIDTH,
                height: BIKE_HEIGHT,
                "xlink:href": "png/bike.png",
                transform:
                    "translate(" +
                    arrowX +
                    "," +
                    getLaneHeight() / 2.8 +
                    ") " +
                    "rotate(90)scale(1.8,1)"
            });
        }
    }

    //绘制斑马线
    function drawCross(road, roadWidth, midX, entrW, medianW, again) {
        if (road.sidewalk === 0) {
            return;
            //alert("Not sidewalk!");
        }
        if (!road.entrance) {
            return;
        }
        //定义斑马线数量
        var CROSS_CNT =
            road.entrance.lanes.length * 3 + road.exit.lanes.length * 3;
        //计算斑马线间距
        var dist = roadWidth / CROSS_CNT;
        var x = 0;
        for (var i = 0; i <= CROSS_CNT; i++) {
            road.element.append("line").attr({
                x1: x,
                y1: getLaneHeight() - CROSS_HEIGHT,
                x2: x,
                y2: getLaneHeight(),
                fill: "white",
                stroke: "white",
                "stroke-width": 5
            });
            x = x + dist;
        }
    }

    //添加删除二次行人灯
    function pedestrianLightsDiv(p, road, midX) {
        var that = this;
        var ispedest = true;
        var lWidth = road.medianWidth * SCALE;

        var pedestRect = road.element.append("rect").attr({
            x: midX,
            y: getLaneHeight() - CROSS_HEIGHT,
            width: lWidth,
            height: CROSS_HEIGHT,
            fill: "white",
            opacity: 0.8
        });
        // pedestRect.on("click", function () {
        //     var x= p.svg.attr('tx');
        //     var y= p.svg.attr('ty');
        //     var scale= p.svg.attr('tscale');
        //     road.sidewalk = 2;
        //     p.draw1(x,y,scale);
        //     ispedest = false;
        // });

        setTimeout(function() {
            var roadname = "cancle" + road.name;
            $("#cancle" + road.name).bind("click", function() {
                var x = p.svg.attr("tx");
                var y = p.svg.attr("ty");
                var scale = p.svg.attr("tscale");
                road.sidewalk = 2;
                p.draw1(x, y, scale);
                ispedest = false;
            });
        }, 100);
    }

    //判断行人灯事件
    function judgementCross(p, road, midX) {
        var again = p;
        if (2 === road.sidewalk) {
            //二次过街行人灯事件
            //中线宽度
            var lWidth = road.medianWidth * SCALE;
            var light = road.element.append("rect").attr({
                x: midX,
                y: getLaneHeight() - CROSS_HEIGHT,
                width: lWidth,
                height: CROSS_HEIGHT,
                fill: "#ff546b"
            });
            // $('#check'+road.name).attr("checked",false);
            // light.on("click", function () {
            //     var x= p.svg.attr('tx');
            //     var y= p.svg.attr('ty');
            //     var scale= p.svg.attr('tscale');
            //     road.sidewalk = 1;
            //     p.draw1(x,y,scale);
            // });

            setTimeout(function() {
                $("#open" + road.name).bind("click", function() {
                    var x = p.svg.attr("tx");
                    var y = p.svg.attr("ty");
                    var scale = p.svg.attr("tscale");
                    road.sidewalk = 1;
                    p.draw1(x, y, scale);
                });
            }, 100);
        }
    }

    //绘制圆弧转角
    function drawLine(
        rightBottomX,
        rightBottomY,
        leftBottomX,
        leftBottomY,
        contrPX,
        contrPY,
        svg
    ) {
        svg.append("path").attr({
            d:
                "M " +
                rightBottomX +
                "," +
                rightBottomY +
                " Q " +
                contrPX +
                "," +
                contrPY +
                " " +
                leftBottomX +
                "," +
                leftBottomY +
                " ",
            fill: "none",
            stroke: "white",
            "stroke-width": 4
        });
    }

    //绘制右转渠化
    function drawRightChannelization(
        rightBottomX,
        rightBottomY,
        leftBottomX,
        leftBottomY,
        svg,
        contrPX,
        contrPY,
        channelStartAngle,
        channelEndAngle,
        channelRadian,
        channelStartX,
        channelStartY,
        channelEndX,
        channelEndY,
        channelOutStartAngle,
        channelOutEndAngle,
        circleCenterX,
        circleCenterY,
        channelOutStartX,
        channelOutStartY,
        channelOutEndX,
        channelOutEndY
    ) {
        //绘制路口转角
        svg.append("path").attr({
            d:
                "M " +
                rightBottomX +
                "," +
                rightBottomY +
                " Q " +
                contrPX +
                "," +
                contrPY +
                " " +
                leftBottomX +
                "," +
                leftBottomY +
                " ",
            fill: "none",
            stroke: "white",
            "stroke-width": 4
        });

        //右转渠化内圈
        var arc = d3.svg
            .arc()
            .startAngle(channelStartAngle)
            .endAngle(channelEndAngle)
            .innerRadius(channelRadian)
            .outerRadius(channelRadian);
        svg.append("path").attr({
            d: arc,
            transform: "translate(" + circleCenterX + "," + circleCenterY + ")",
            fill: "none",
            stroke: "white",
            "stroke-width": 4
        });
        var arcOut = d3.svg
            .arc()
            .startAngle(channelOutStartAngle)
            .endAngle(channelOutEndAngle)
            .innerRadius(channelRadian)
            .outerRadius(channelRadian + CROSS_CHANNELWIDTH);
        svg.append("path").attr({
            d: arcOut,
            transform: "translate(" + circleCenterX + "," + circleCenterY + ")",
            fill: "#527c88",
            stroke: "white",
            "stroke-width": 4
        });

        // 绘制右转渠化上的斑马线
        var arcCenterR = channelRadian + CROSS_CHANNELWIDTH / 2;
        var arcCenterL = 35 / arcCenterR // 35长斑马线的弧度数
        var arcCenterStartAngle = channelOutStartAngle + (channelOutEndAngle-channelOutStartAngle) / 2
        var arcCenterEndAngle = arcCenterStartAngle + arcCenterL
        var arcCenter = d3.svg.arc()
            .startAngle(arcCenterStartAngle)
            .endAngle(arcCenterEndAngle)
            .innerRadius(arcCenterR)
            .outerRadius(arcCenterR);
        svg.append("path")
            .attr({
                "d": arcCenter,
                "transform": "translate(" + circleCenterX + "," +
                circleCenterY + ")",
                "fill": "#527c88",
                "stroke": "white",
                "stroke-width": 4
            });

        //绘制覆盖线
        svg.append("line").attr({
            x1: channelStartX,
            y1: channelStartY,
            x2: channelOutStartX,
            y2: channelOutStartY,
            fill: "none",
            stroke: "#527c88",
            "stroke-width": 5
        });
        svg.append("line").attr({
            x1: channelEndX,
            y1: channelEndY,
            x2: channelOutEndX,
            y2: channelOutEndY,
            fill: "none",
            stroke: "#527c88",
            "stroke-width": 4
        });
    }

    //绘制左转待转区
    function drawLeftWaitingArea(road, medianW) {
        //构造默认线性生成器
        var svgline = d3.svg.line();
        //指定x存取器为：取每个数据元素的x属性的值
        svgline.x(function(d) {
            return d.x;
        });
        //指定y存取器为：取每个数据元素的y属性的值
        svgline.y(function(d) {
            return d.y;
        });
        svgline.interpolate("monotone");
        road.element
            .append("path")
            .attr({
                //生成路径数据
                d: function() {
                    return svgline(PATH_LEFTWAITINGAREADOTTED);
                },
                transform:
                    "translate(" +
                    (medianW + CROSS_HASWAITINGZONE) +
                    "," +
                    getLaneHeight() +
                    ")rotate(100) "
            })
            .style({
                //path颜色：steelblue
                stroke: "white",
                //path粗细：5
                "stroke-width": 3,
                "stroke-dasharray": 5,
                //path填充：white
                fill: "none"
            });
        var data = PATH_LEFTWAITINGAREASOLID;
        //构造默认线性生成器
        var line = d3.svg.line();
        //指定x存取器为：取每个数据元素的x属性的值
        line.x(function(d) {
            return d.x;
        });
        //指定y存取器为：取每个数据元素的y属性的值
        line.y(function(d) {
            return d.y;
        });
        line.interpolate("monotone");
        road.element
            .append("path")
            .attr({
                //生成路径数据
                d: function() {
                    return line(data);
                },
                transform:
                    "translate(" +
                    (medianW + CROSS_HASWAITINGZONE) +
                    "," +
                    getLaneHeight() +
                    ")rotate(100) "
            })
            .style({
                //path颜色：steelblue
                stroke: "white",
                //path粗细：5
                "stroke-width": 4,
                //"stroke-dasharray": 6,
                //path填充：white
                fill: "none"
            });
        road.element
            .append("path")
            .attr({
                d: PATH_LEFTARROW,
                transform:
                    "translate(" +
                    (medianW - CROSS_HASWAITINGZONEARROW) +
                    "," +
                    (getLaneHeight() + CROSS_HASWAITINGZONEARROWHEIGHT) +
                    ") rotate(-30) scale(0.15,0.1)"
            })
            .style({
                fill: "white",
                stroke: "white",
                "stroke-width": 2
            });
    }

    //调用圆弧转角、右转渠化、左转待转区
    function drawChanne(
        road,
        crntAngle,
        prevAngle,
        rightBottomX,
        rightBottomY,
        leftBottomX,
        leftBottomY,
        svg,
        medianW,
        contrPX,
        contrPY,
        channelStartAngle,
        channelEndAngle,
        channelRadian,
        channelStartX,
        channelStartY,
        channelEndX,
        channelEndY,
        channelOutStartAngle,
        channelOutEndAngle,
        circleCenterX,
        circleCenterY,
        channelOutStartX,
        channelOutStartY,
        channelOutEndX,
        channelOutEndY
    ) {
        var intersection = crntAngle - prevAngle;
        if (!road.entrance.canalizations || !road.entrance.canalizations.length) {
            //圆弧转角
            drawLine(
                rightBottomX,
                rightBottomY,
                leftBottomX,
                leftBottomY,
                contrPX,
                contrPY,
                svg
            );
        } else if (1 === road.entrance.canalizations.length) {
            if (1 === road.entrance.canalizations[0].diversion) {
                //绘制左转待转区
                drawLeftWaitingArea(road, medianW);
                //绘制圆弧转角
                drawLine(
                    rightBottomX,
                    rightBottomY,
                    leftBottomX,
                    leftBottomY,
                    contrPX,
                    contrPY,
                    svg
                );
            } else if (2 === road.entrance.canalizations[0].diversion) {
                //两路口夹角小于180度，圆弧转角、右转渠化
                if (180 > intersection) {
                    //绘制右转渠化
                    drawRightChannelization(
                        rightBottomX,
                        rightBottomY,
                        leftBottomX,
                        leftBottomY,
                        svg,
                        contrPX,
                        contrPY,
                        channelStartAngle,
                        channelEndAngle,
                        channelRadian,
                        channelStartX,
                        channelStartY,
                        channelEndX,
                        channelEndY,
                        channelOutStartAngle,
                        channelOutEndAngle,
                        circleCenterX,
                        circleCenterY,
                        channelOutStartX,
                        channelOutStartY,
                        channelOutEndX,
                        channelOutEndY
                    );
                } else {
                    //绘制圆弧转角
                    drawLine(
                        rightBottomX,
                        rightBottomY,
                        leftBottomX,
                        leftBottomY,
                        contrPX,
                        contrPY,
                        svg
                    );
                }
            } else {
                //绘制圆弧转角
                drawLine(
                    rightBottomX,
                    rightBottomY,
                    leftBottomX,
                    leftBottomY,
                    contrPX,
                    contrPY,
                    svg
                );
            }
        } else {
            for (var i = 0; i < road.entrance.canalizations.length; i++) {
                if (2 === road.entrance.canalizations[i].diversion) {
                    //两路口夹角小于180度，圆弧转角、右转渠化
                    if (180 > intersection) {
                        //绘制右转渠化
                        drawRightChannelization(
                            rightBottomX,
                            rightBottomY,
                            leftBottomX,
                            leftBottomY,
                            svg,
                            contrPX,
                            contrPY,
                            channelStartAngle,
                            channelEndAngle,
                            channelRadian,
                            channelStartX,
                            channelStartY,
                            channelEndX,
                            channelEndY,
                            channelOutStartAngle,
                            channelOutEndAngle,
                            circleCenterX,
                            circleCenterY,
                            channelOutStartX,
                            channelOutStartY,
                            channelOutEndX,
                            channelOutEndY
                        );
                    } else {
                        //绘制圆弧转角
                        drawLine(
                            rightBottomX,
                            rightBottomY,
                            leftBottomX,
                            leftBottomY,
                            contrPX,
                            contrPY,
                            svg
                        );
                    }
                } else {
                    //绘制左转待转区
                    drawLeftWaitingArea(road, medianW);
                }
            }
        }
    }

    //绘制道路中心
    function drawCenter(
        svg,
        rightBottomX,
        rightBottomY,
        leftBottomX,
        leftBottomY,
        rightPresentBottomX,
        rightPresentBottomY,
        contrPX,
        contrPY,
        W,
        H
    ) {
        svg.append("path").attr({
            d:
                "M " +
                rightPresentBottomX +
                " " +
                rightPresentBottomY +
                "    L" +
                leftBottomX +
                " " +
                leftBottomY +
                "    Q" +
                contrPX +
                " " +
                contrPY +
                ", " +
                rightBottomX +
                " " +
                rightBottomY +
                " Q" +
                rightBottomX +
                " " +
                rightBottomY +
                ", " +
                W +
                " " +
                H +
                " Z",
            fill: "#527c88",
            stroke: "#527c88",
            "stroke-width": 2
        });
    }

    //绘制潮汐车道
    function drawTidalLane(road, k, d) {
        road.element.append("line").attr({
            x1: d,
            y1: 0,
            x2: d,
            y2: k,
            fill: "#fbad10",
            stroke: " #fbad10",
            "stroke-width": 1.5,
            "stroke-dasharray": "10 3"
        });
    }

    //绘制逆向可变车道
    function drawReverseVariable(road, x) {
        road.element.append("line").attr({
            x1: x,
            y1: 0,
            x2: x,
            y2: getLaneHeight() - CROSS_HEIGHT,
            fill: "#52de7c",
            stroke: " #52de7c",
            "stroke-width": 3
        });
    }

    //绘制可变车道
    function drawVariableLane(
        road,
        CROSS_CNT,
        dist,
        POSITION,
        POSITION2,
        x,
        d,
        v
    ) {
        for (var i = 0; i <= CROSS_CNT; i++) {
            //noinspection JSSuspiciousNameCombination
            road.element
                .append("line")
                .attr({
                    x1: POSITION,
                    y1: x,
                    y2: POSITION2 + x,
                    stroke: "white",
                    "stroke-width": 2
                })
                .attr({
                    transform: "translate(" + d + "," + v + ")"
                });
            x = x + dist;
        }
    }

    function eventRoad(road, laneg, lane1, arry, p) {
        var elem = road.element;
        var s = d3.select(road.element[0][0]);
        s.on("click", function(data, index) {
            var p1 = p;
            var x1 = -35;
            var x2 = -30;
            var y1 = 35;
            var y2 = 0;
            var reduce = elem.append("image");
            var add = elem.append("image");
            var arry1 = road.entrance.lanes;
            var direction1 = 2;
            var direction3 = 0;
            addReduceRoad(
                road,
                elem,
                p1,
                x1,
                x2,
                arry1,
                direction1,
                direction3,
                y1,
                y2
            );
        });
    }

    //绘制特殊道路
    function eventDraw(road, H, arrowX, x1, x2) {
        var k = getLaneHeight() - CROSS_HEIGHT;
        //默认为普通车道
        if (road.entrance.lanes[H].type === undefined) {
            road.entrance.lanes[H].type = "1";
        }
        //小于出口车道将会将右转渠化删除
        for (
            var laneIndex = 0;
            laneIndex < road.entrance.lanes.length;
            laneIndex++
        ) {
            if (laneIndex < H) {
                var OP = road.entrance.lanes[laneIndex].type.split(",");
                for (var i = 0; i < OP.length; i++) {
                    if (OP[i] == "6") {
                        OP.splice(i, 1);
                        judgeLanesType(road);
                    }
                }
                road.entrance.lanes[laneIndex].type = OP.join(",");
            }
        }
        var arrowDiversion = road.entrance.lanes[H].type.split(",");
        for (var i = 0; i < arrowDiversion.length; i++) {
            //绘制公交车道
            if ("2" === arrowDiversion[i]) {
                road.element
                    .append("text")
                    .text("用专交公")
                    .attr({
                        transform:
                            "translate(" +
                            arrowX +
                            "," +
                            getLaneHeight() / 1.8 +
                            ")rotate(180)", // "dy": -50,
                        textLength: "120" //间隔
                    })
                    .style({
                        "font-size": "14px",
                        fill: "white",
                        "writing-mode": "tb-rl",
                        "font-weight": "bold"
                    });
            }
            //绘制自行车道
            var bikeY = -15;
            var bikeH = 2.8;
            if ("7" === arrowDiversion[i]) {
                road.element.append("image").attr({
                    y: bikeY,
                    width: BIKE_WIDTH,
                    height: BIKE_HEIGHT,
                    "xlink:href": "png/bike.png",
                    transform:
                        "translate(" +
                        arrowX +
                        "," +
                        getLaneHeight() / bikeH +
                        ") " +
                        "rotate(90)scale(1.8,1)"
                });
            }
            var d1 = x1 + SPECIALENDPOINTS;
            var d2 = x2 - SPECIALENDPOINTS;
            var d3 = x1 + SPECIALSTARTINGPOINT;
            var d4 = x2 - SPECIALSTARTINGPOINT;
            //调用绘制潮汐车道
            if ("3" === arrowDiversion[i]) {
                drawTidalLane(road, k, d1 - 8);
                drawTidalLane(road, k, d2 + 10);
                drawTidalLane(road, k, d3 - 5);
                drawTidalLane(road, k, d4 + 5);
            }

            //调用逆向可变车道
            if ("4" === arrowDiversion[i]) {
                drawReverseVariable(road, d3 - 6);
                drawReverseVariable(road, d4 + 6);
            }
            //调用可变车道
            if ("5" === arrowDiversion[i]) {
                var CROSS_CNT = 39; //定义线数量
                var dist = 8; //计算线间距
                var x = 0;
                var POSITION = 4; //线尺长度
                var eventDraw = 5; //偏移量
                var POSITION2 = POSITION;
                //纵坐标为v1
                var v1 = 0;
                drawVariableLane(
                    road,
                    CROSS_CNT,
                    dist,
                    POSITION,
                    POSITION2,
                    x,
                    d3 - 7,
                    v1
                );
                //纵坐标为v2
                drawVariableLane(
                    road,
                    CROSS_CNT,
                    dist,
                    POSITION,
                    -POSITION2,
                    x,
                    d2 + 7,
                    eventDraw
                );
            }
            //判断第一条道为右转渠化
            if (H === road.entrance.lanes.length - 1) {
                if ("6" === arrowDiversion[i]) {
                    if (road.entrance.canalizations.length === 0) {
                        road.entrance.canalizations.push({
                            diversion: 2,
                            type: 2
                        });
                    }
                }
            }
        }
    }

    /**************************************点击事件********************************************/
    //箭头点击事件
    function eventArrow(
        Arrow,
        road,
        again,
        temp,
        typeArrow,
        roadIndex,
        Arrow1
    ) {
        var LANETYPE = [
            "ordinaryLane",
            "busLane",
            "tidalLane",
            "variableLane",
            "reverseVariableLane",
            "turnRightOnly",
            "non-motorVehicleLane",
        ];
        Arrow.each(function() {
            var c = road.entrance.lanes[temp].direction;
            var s = d3.select(this);
            var types = road.entrance.lanes[temp].type;
            s.on("click", function(data, index) {

                Arrow1.attr("fill", "red");
                //创建 一个id为addArrow的div(道路弹窗)
                roadPopups();
                var div = document.getElementById("addArrow");
                //显示车道选中状态
                addLaneTurnActiveClass(roadIndex);
                $(".laneTurn label").css(
                    "transform",
                    "scale(0.75, 0.75) rotate(" + (road.angle - 180) + "deg)"
                );
                if (document.getElementById("addArrow") === Object) {
                    return 0;
                } else {
                    document.getElementById("mask").style.cssText =
                        "position:absolute;z-index:0;display:block;";
                    document.getElementById("addArrow").style.cssText =
                        "position:absolute;z-index:0;display:block;";
                    var x, y;
                    if (d3.event.pageX || d3.event.pageY) {
                        x = d3.event.pageX;
                        y = d3.event.pageY;
                    } else if (d3.event.clientX || d3.event.clientY) {
                        x =
                            d3.event.clientX +
                            document.body.scrollLeft +
                            document.documentElement.scrollLeft;
                        y =
                            d3.event.clientY +
                            document.body.scrollTop +
                            document.documentElement.scrollTop;
                    }
                    document.getElementById("addArrow").style.left = x + "px";
                    document.getElementById("addArrow").style.top = y + "px";
                    //取消
                    document.getElementById("cancelLane").onclick = function() {
                        Arrow1.attr("fill", "white");
                        document.body.removeChild(div);
                        road.entrance.lanes[temp].type = types;
                        road.entrance.lanes[temp].direction = c;
                        document.getElementById("mask").style.cssText =
                            "position:absolute;z-index:0;display:none;";
                    };
                    //关闭div事件
                    document.getElementById(
                        "channelAttrBar"
                    ).onclick = function() {
                        Arrow1.attr("fill", "white");
                        document.body.removeChild(div);
                        road.entrance.lanes[temp].type = types;
                        road.entrance.lanes[temp].direction = c;
                        document.getElementById("mask").style.cssText =
                            "position:absolute;z-index:0;display:none;";
                    };
                    if (typeArrow === 1) {
                        d3.selectAll(".laneArrow").on("click", function() {
                            road.entrance.lanes[temp].direction = this.value;
                            $(".laneTurn div").on("click", function() {
                                $(".laneTurnActive").removeClass(
                                    "laneTurnActive"
                                );
                                $(this).attr("class", "laneTurnActive");
                            });
                            keepLane(again);
                        });
                    } else if (typeArrow === 2) {
                        d3.selectAll(".laneArrow").on("click", function() {
                            road.entrance.lanes[temp].preDirection = this.value;
                            var that = this;
                            $("label").on("click", function() {
                                $(".laneTurnActive").removeClass(
                                    "laneTurnActive"
                                );
                                $("#arrowLane" + that.value).attr(
                                    "class",
                                    "laneTurnActive"
                                );
                            });
                            keepLane(again);
                        });
                    }

                    //大于1的车道禁用右转专用
                    if (temp < road.entrance.lanes.length - 1) {
                        document.getElementById("turnRightOnly").disabled =
                            "disabled";
                        judgeLanesType(road);
                    }
                    //特殊车道
                    $('input[name="specialType"]').on("click", function() {
                        var OP = road.entrance.lanes[temp].type.split(",");
                        if (
                            document.getElementById(LANETYPE[this.value - 1])
                                .checked === true
                        ) {
                            if (
                                document.getElementById(LANETYPE[5]).checked ===
                                    true &&
                                document.getElementById(LANETYPE[6]).checked ===
                                    true
                            ) {
                                alert("可变车道和右转专用不能同时选择！");
                                return false;
                            }
                            OP.push(this.value + "");
                        } else {
                            for (var i = 0; i < OP.length; i++) {
                                if (OP[i] === this.value + "") {
                                    //如果删除的为7就将右转渠化给删除
                                    if (OP[i] === "6") {
                                        judgeLanesType(road);
                                    }
                                    OP.splice(i, 1);
                                }
                            }
                        }
                        road.entrance.lanes[temp].type = OP.join(",");
                    });

                    //基本车道
                    $('input[name="basicType"]').on("click", function() {
                        var OP = road.entrance.lanes[temp].type.split(",");
                        //选中的数值清空
                        OP = [];
                        //选中效果清空
                        for (var j = 3; j < LANETYPE.length; j++) {
                            document.getElementById(
                                LANETYPE[j]
                            ).checked = false;
                        }
                        for (var i = 0; i < OP.length; i++) {
                            if (OP[i] !== this.value + "") {
                                if (OP[i] === "6") {
                                    judgeLanesType(road); //如果删除的为7就将右转渠化给删除
                                }
                                OP.splice(i, 1);
                            } else {
                                if (OP[i] === "6") {
                                    judgeLanesType(road); //如果删除的为7就将右转渠化给删除
                                }
                                OP.splice(i, 1);
                            }
                        }
                        OP.push(this.value + "");
                        road.entrance.lanes[temp].type = OP.join(",");
                    });
                    for (
                        var laneIndex = 0;
                        laneIndex < road.entrance.lanes.length;
                        laneIndex++
                    ) {
                        if (road.entrance.lanes.length - 1 > laneIndex) {
                            var OP = road.entrance.lanes[laneIndex].type.split(
                                ","
                            );
                            for (var i = 0; i < OP.length; i++) {
                                if (OP[i] == "6") {
                                    document.getElementById(
                                        "turnRightOnly"
                                    ).checked = false;
                                    OP.splice(i, 1);
                                    judgeLanesType(road);
                                }
                            }

                            road.entrance.lanes[laneIndex].type = OP.join(",");
                        }
                    }
                    //添加选中效果
                    d3.selectAll(".basicLane").each(function() {
                        var OP = road.entrance.lanes[temp].type.split(",");
                        for (var i = 0; i < OP.length; i++) {
                            console.log(OP[i], this.value);

                            if (OP[i] === this.value + "") {
                                document.getElementById(
                                    LANETYPE[this.value - 1]
                                ).checked = true;
                            }
                        }
                        road.entrance.lanes[temp].type = OP.join(",");
                    });
                    keepLane(again);

                }
                //无操作点保存退出
                document.getElementById("keepLane").onclick = function() {
                    again.draw();
                    document.body.removeChild(div);
                };
            });
        });
    }

    // 显示车道转向箭头选中的状态
    function addLaneTurnActiveClass(number) {
        for (var i = 0; i < 10; i++) {
            $("#arrowLaner" + parseInt(i)).removeClass("laneTurnActive");
        }
        $("#arrowLaner" + parseInt(number)).attr("class", "laneTurnActive");
    }

    //删除右转渠化
    function judgeLanesType(road) {
        if (road.entrance.canalizations === undefined) {
            return 0;
        }
        for (var cann = 0; cann < road.entrance.canalizations.length; cann++) {
            if (road.entrance.canalizations[cann].diversion === 2) {
                road.entrance.canalizations.splice(
                    cann,
                    road.entrance.canalizations.length
                );
            }
        }
    }

    //通道设置保存取消
    function keepLane(again) {
        //保存
        let div = document.getElementById("addArrow");
        document.getElementById("keepLane").onclick = function() {
            again.draw();
            document.body.removeChild(div);
        };
    }

    //增减道路
    function addReduceRoad(
        road,
        elem,
        p1,
        x1,
        x2,
        arry,
        direction,
        direction2,
        y1,
        y2
    ) {
        var CROSS_REDUCRADDROAD = 22;
        var reduce = elem.append("g");
        var add = elem.append("g");
        for (var i = 0; i < road.entrance.lanes.length; i++) {
            var I = i + 1;
            reduce.append("image").attr({
                width: CROSS_REDUCRADDROAD,
                height: CROSS_REDUCRADDROAD,
                x: x2 + CROSS_REDUCRADDROAD * I + 4,
                y: y2 - CROSS_REDUCRADDROAD,
                "stroke-width": 3,
                stroke: "#000",
                fill: "white",
                id: I,
                "xlink:href": "png/reduce.png"
            });
            add.append("image").attr({
                width: CROSS_REDUCRADDROAD,
                height: CROSS_REDUCRADDROAD,
                x: x2 + CROSS_REDUCRADDROAD * I + 4,
                y: y2 - CROSS_REDUCRADDROAD * 2,
                "stroke-width": 3,
                stroke: "#000",
                fill: "white",
                id: I,
                "xlink:href": "png/addroad.png"
            });
        }

        //减少道路
        reduce[0][0].childNodes.forEach(function(data, index) {
            var s = d3.select(data);
            s.on("click", function() {
                // var x=p1.svg[0][0].attributes[7].value.split('(')[1].split(',')[0];
                // var y=p1.svg[0][0].attributes[7].value.split('(')[1].split(',')[1].split(')')[0];
                // var scale=p1.svg[0][0].attributes[7].value.split('(')[2].split(')')[0];
                var x = p1.svg.attr("tx");
                var y = p1.svg.attr("ty");
                var scale = p1.svg.attr("tscale");
                arry.splice(arry.length - data.id, 1);
                p1.draw1(x, y, scale);
            });
        });
        //增加道路
        //
        add[0][0].childNodes.forEach(function(data, index) {
            var s = d3.select(data);
            s.on("click", function() {
                arry.splice(arry.length + 1 - data.id, 0, {
                    number: data.id + 1 + "",
                    width: 3.5,
                    id: "", //新建id为空
                    direction: direction,
                    preDirection: direction2,
                    type: "1"
                });
                // var x=p1.svg[0][0].attributes[7].value.split('(')[1].split(',')[0];
                // var y=p1.svg[0][0].attributes[7].value.split('(')[1].split(',')[1].split(')')[0];
                // var scale=p1.svg[0][0].attributes[7].value.split('(')[2].split(')')[0];
                var x = p1.svg.attr("tx");
                var y = p1.svg.attr("ty");
                var scale = p1.svg.attr("tscale");
                p1.draw1(x, y, scale);
            });
        });
    }

    //进口增加减少道路
    function eventEntranceButton(road, p1) {
        if (
            "undefined" === typeof road.entrance ||
            "undefined" === typeof road.entrance.lanes ||
            road.entrance.lanes.length === 0
        ) {
        } else {
            var x1 = -35;
            var x2 = -35;
            var y1 = 35;
            var y2 = 0;
            var reduce = road.element.append("image");
            var add = road.element.append("image");
            var arry1 = road.entrance.lanes;
            var direction1 = 2;
            var direction3 = 0;
            //addReduceRoad(road, reduce, add, p1, x1, x2, arry1, direction1, direction3, y1, y2);
        }
    }

    //出口增加减少道路
    function eventExitButton(road, width, p2) {
        if (
            "undefined" === typeof road.exit ||
            "undefined" === typeof road.exit.lanes ||
            road.exit.lanes.length === 0
        ) {
        } else {
            var x3 = width + 5;
            var x4 = width + 5;
            var y3 = 35;
            var y4 = 0;
            var reduce = road.element.append("image");
            var add = road.element.append("image");
            var arry2 = road.exit.lanes;
            var direction2 = 2;
            var direction4 = 0;
            //addReduceRoad(road, reduce, add, p2, x3, x4, arry2, direction2, direction4, y3, y4);
        }
    }

    //灯组事件
    function lightGroup(road, height, again) {
        if (!road.entrance) {
            return 0;
        }
        if ("undefined" === typeof road.entrance.lights) {
            return 0;
        } else {
            for (var i = 0; i < road.entrance.lights.length; i++) {
                for (var p = 1; p <= 8; p++) {
                    if (road.entrance.lights[i].type === p) {
                        var maginType = "./img/chart" + p + ".png";
                        //调用信号组属性
                        imageAttribute(road, height, again, maginType, i);
                    }
                }
            }
        }
    }

    //信号组属性
    function imageAttribute(road, height, again, maginType, index) {
        if ("undefined" === typeof road.entrance.lanes) {
            return 0;
        }
        var x;
        if (road.entrance.lanes.length === 0) {
            x = 0;
        } else {
            x =
                getLanesWidth(road.entrance.lanes) * SCALE -
                road.entrance.lanes[road.entrance.lanes.length - 1].width *
                    SCALE;
        }
        road.element.append("image").attr({
            width: ARROW_LIGHTSW,
            height: ARROW_LIGHTSH,
            x: CROSS_ARROWLIGHTPOSITION * (road.entrance.lanes.length - index),
            y: height,
            "xlink:href": maginType,
            transform: "translate(" + x + ")"
        });
    }
    
    