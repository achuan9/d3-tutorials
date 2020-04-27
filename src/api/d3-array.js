const data = [
    { id: '2', name: '小红', age: 20 },
    { id: '10', name: '小明', age: 18 },
    { id: '40', name: '小绿', age: 24 },
    { id: '3', name: '小蓝', age: 22 },
    { name: '小忽', age: 21 },
]



const log = (key, value) => console.log(`${key}:`, value)
console.log('=======================================')
console.log('------------------ids------------------')
console.log(data.map(item => item.id))
console.log('------------------ages-----------------')
console.log(data.map(item => item.age))
console.log('=======================================')

/** Statistics 基本的统计类方法 */

/**
 * * d3.min(array[, accessor]) 求数组最小值
 * * d3.max(array[, accessor]) 求数组最大值
 * 
 *  - 是以自然排序进行
 * 
 */

const min0 = d3.min([]);
log('min0', min0); // undefined

const min1 = d3.min(data);
log('min1', min1); // {id: '2', name: '小红', age: 20}

const min2 = d3.min(data, datum => datum.age);
log('min2', min2); // 18

const min3 = d3.min(data, datum => datum.id)
log('min3', min3); // '10'


/**
 * * d3.extent(array[, accessor]) 求数组的取值范围
 * 
 */


const extent0 = d3.extent([]);
log('extent0', extent0); // [undefined, undefined]

const extent1 = d3.extent(data);
log('extent1', extent1); // [{id: '2', name: '小红', age: 20},{id: '2', name: '小红', age: 20},]

const extent2 = d3.extent(data, datum => datum.age);
log('extent2', extent2); // [18, 24]

const extent3 = d3.extent(data, datum => datum.id);
log('extent3', extent3); // ["10", "40"]



/**
 * * d3.sum(array[, accessor]) 求和
 * 
 */

const sum0 = d3.sum([]);
log('sum0', sum0); // 0

const sum1 = d3.sum(data);
log('sum1', sum1); // 0

const sum2 = d3.sum(data, datum => datum.age);
log('sum2', sum2); // 84

const sum3 = d3.sum(data, datum => datum.id);
log('sum3', sum3); // 55



/**
 * * d3.mean(array[, accessor]) 求平均值
 * 
 */

const mean0 = d3.mean([]);
log('mean0', mean0); // undefined

const mean1 = d3.mean(data);
log('mean1', mean1); // undefined

const mean2 = d3.mean(data, datum => datum.age);
log('mean2', mean2); // 21 = 84 / 4

const mean3 = d3.mean(data, datum => datum.id);
log('mean3', mean3); // 13.75 = 55 / 4



/**
 * * d3.median(array[, accessor]) 求中位数
 * 
 *  - 中位数：一个数组按顺序排列，中间位置的那个数即为中位数，如果中间位置有2个数，则是他们的和除以2。
 *  - 快速找出中位数在数组中的下标: (arr.length - 1) / 2 。如果下表为小数x.y，则为第 x 与 第x + 1 项的和除以2
 * 
 */

const median0 = d3.median([]);
log('median0', median0); // undefined

const median1 = d3.median(data);
log('median1', median1); // undefined

const median2 = d3.median(data, datum => datum.age);
log('median2', median2); // 21

const median3 = d3.median(data, datum => datum.id);
log('median3', median3); // 6.5




/**
 * * d3.quantile(array, p[, accessor]) 求分位数
 * 
 * p = 0.25 即第一个四分位数
 * p = 0.5 即中位数
 * p = 0.75 即三个四分位数
 */

const quantile0 = d3.quantile([3, 4, 4, 4, 7, 10, 11, 12, 14, 16, 17, 18], 0.25);
log('quantile0', quantile0); // 4

const quantile1 = d3.quantile(data, 0.2);
log('quantile1', quantile1); // NaN

const quantile2 = d3.quantile(data, 0.25, datum => datum.age);
log('quantile2', quantile2); // 18

const quantile3 = d3.quantile(data, 0.5, datum => datum.id);
log('quantile3', quantile3); // 40


/**
 * * d3.variance(array[, accessor]) 无偏估计方差
 * 
 */

const variance0 = d3.variance([]);
log('variance0', variance0); // undefined

const variance1 = d3.variance(data);
log('variance1', variance1); // undefined

const variance2 = d3.variance(data, datum => datum.age);
log('variance2', variance2); // 4.999999999999998

const variance3 = d3.variance(data, datum => datum.id);
log('variance3', variance3); // 318.9166666666667




/**
 * * d3.deviation(array[, accessor]) 标准差
 * 
 */

const deviation0 = d3.deviation([]);
log('deviation0', deviation0); // undefined

const deviation1 = d3.deviation(data);
log('deviation1', deviation1); // undefined

const deviation2 = d3.deviation(data, datum => datum.age);
log('deviation2', deviation2); // 2.2360679774997894

const deviation3 = d3.deviation(data, datum => datum.id);
log('deviation3', deviation3); // 17.858238061652855


/** Search 查找类方法 */

/**
 * * d3.scan(array[, comparator]) 扫描
 * 
 * 对指定的数组执行线性扫描, 根据指定的比较器返回最小元素的索引
 * comparator 则默认为 ascending(升序)
 */

const scan0 = d3.scan([]);
log('scan0', scan0); // undefined

const scan1 = d3.scan(data, (a, b) => a.age - b.age);
log('scan1', scan1); // 1

const scan2 = d3.scan(data, (a, b) => d3.ascending(a.age, b.age));
log('scan2', scan2); // 1


/**
 * * d3.bisectLeft(array, x[, lo[, hi]])
 * * d3.bisect(array, x[, lo[, hi]])
 * * d3.bisectRight(array, x[, lo[, hi]])
 * 
 * 获取 x 在已有 array 中的插入位置 i（保证array依然有序）
 * lo 和 hi 参数用来在 array 中指定一个查找子集
 * 
 * 如果 x 已经存在 array 中, 则插入点会在已有的元素前面(arrBisectLeft), 如果用的 bisectRight 则在元素的后面(bisectRight0)
 * 
 * 假设 v 为原数组中的值：
 * v < x 的值包含在 array.slice(lo, i) 中(左半部分), 
 * v >= x 的值包含在 array.slice(i, hi) 中(右半部分)
 * 
 * 
 */

const arrBisect = [1, 2, 3, 4, 5]
const bisect = d3.bisect(arrBisect, 2);  // 1
arrBisect.splice(bisect, 0, '插入1个元素'); // [1, "插入1个元素", 2, 3, 4, 5]

const arrBisectLeft = [1, 2, 3, 4, 5]
const bisectLeft0 = d3.bisectLeft(arrBisectLeft, 2); // 1
arrBisectLeft.splice(bisectLeft0, 0, '插入1个元素'); // arrBisectLeft: [1, "插入1个元素", 2, 3, 4, 5]

const arrBisectRight = [1, 2, 3, 4, 5]
const bisectRight0 = d3.bisectRight(arrBisectRight, 2); // 2
arrBisectRight.splice(bisectRight0, 0, '插入1个元素'); // arrBisectRight: [1, 2, "插入1个元素", 3, 4, 5]



/**
 * * d3.bisector(accessor) 
 * * d3.bisector(comparator) 
 * 
 * * bisector.left(array, x[, lo[, hi]])
 * * bisector.right(array, x[, lo[, hi]])
 * 
 * 前面的 d3.bisect 只能处理基础数据类型组成的数组，
 * 而此函数根据指定的 accessor 或 comparator 返回一个新的二分查找对象，
 * 也就是这个方法可以被用来二等分对象数组
 * 
 */
const sortDataLeft = data.sort((a, b) => a.age - b.age)
const sortDataRight = [...sortDataLeft]

const bisectorLeft = d3.bisector(d => d.age).left(sortDataLeft, 20);
log('bisectorLeft', bisectorLeft); // 1
sortDataLeft.splice(bisectorLeft, 0, '插入1个元素')
log('sortDataLeft', sortDataLeft); // [{id: "10", name: "小明", age: 18}, "插入1个元素", {id: "2", name: "小红", age: 20}, ...]

const bisectorRight = d3.bisector(d => d.age).right(sortDataRight, 20);
log('bisectorRight', bisectorRight); // 2
sortDataRight.splice(bisectorRight, 0, '插入1个元素')
log('sortDataRight', sortDataRight); // [{id: "10", name: "小明", age: 18}, {id: "2", name: "小红", age: 20}, "插入1个元素", ...]


/**
 * * d3.ascending(a, b)
 * 如果 a 小于 b 则返回 -1, 如果 a 大于 b 返回 1 否则返回 0.
 * 
 * * d3.descending(a, b)
 * 如果 a 大于 b 则返回 -1, 如果 a 小于 b 返回 1 否则返回 0.
 * 
 */


/** Transformations 数组变换类方法, 生成新的数组 */

/**
 * *  d3.cross(a, b[, reducer])  返回两个数组 a 和 b 的 Cartesian product(笛卡尔积)
 * 
 * 对于 a 中的每个元素 i 以及数组 b 中的每个元素 j, 
 * 有序的调用指定的 reducer 函数, 元素 i 和 j 作为 reducer 的两个参数. 
 * 如果没有指定 reducer 则默认为每一个组创建一个包含两个元素的二元数组:
 * 
 */

const crossArr1 = [1, 2, 3];
const crossArr2 = ['a', 'b', 'c'];
const cross0 = d3.cross(crossArr1, crossArr2)
log('cross0', cross0) // [[1, "a"], [1, "b"], [1, "c"], [2, "a"], [2, "b"], [2, "c"], [3, "a"], [3, "b"], [3, "c"]]


const cross1 = d3.cross(crossArr1, crossArr2, (i, j) => i + j)
log('cross1', cross1) // ["1a", "1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"]


/**
 * * d3.merge(arrays) 合并
 * 
 * 传入一个数组，合并他们
 */

const mergeArr1 = [1, 3, 4];
const mergeArr2 = ['a', 'b', 3];
log('merge', d3.merge([mergeArr1, mergeArr2])); // [1, 3, 4, "a", "b", 3]


/**
 * * d3.pairs(array[, reducer]) 成对合作
 * 
 * 默认：数组中的每两个相邻的元素组成一个新的数组，最终生成一个二维数组
 * 
 * 如果定义了 reducer, 则向 reducer函数传入第 i 项和 i + 1 项 作为参数
 * 将返回值作为最终数组的元素
 * 
 */

const pairsArr = [1, 3, 4];
const pairs0 = d3.pairs(pairsArr)
log('pairs0', pairs0); // [[1, 3],[3, 4]]

const pairs1 = d3.pairs(pairsArr, (a, b) => a + b)
// 分别返回 1 + 3 , 3 + 4 , 最终数组是 [4, 7]
log('pairs1', pairs1);


/**
 * * d3.permute(array, indexes) 重新排列
 * 
 * 按照传入的 indexes 下标数组对array重新排列
 * 如果 indexes.length < array.length
 * 则忽略 indexes 中没有列出的项
 */

const permuteArr = [1, 2, 3, 4, 5]
const permute0 = d3.permute(permuteArr, [2, 1, 0])
log('permute0', permute0); // [3, 2, 1]


/**
 * * d3.shuffle(array[, lo[, hi]]) 打乱顺序
 * 
 */
// 源码
function shuffle(array, i0, i1) {
    var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
        t,
        i;

    while (m) {
        i = Math.random() * m-- | 0;
        t = array[m + i0];
        array[m + i0] = array[i + i0];
        array[i + i0] = t;
    }

    return array;
}
const shuffleArr = [1, 2, 3, 4, 5];
log('shuffle0', d3.shuffle(shuffleArr));



/**
 * * d3.ticks(start, stop, count)
 * 
 * 在 start 和 stop (包含)之间返回大约 count + 1 个等间隔的数组序列, 每个值都是 10 的 1, 2 或 5 的次幂
 */


log("0-1, 1", d3.ticks(0, 1, 1)) // [0, 1]
log("0-1, 2", d3.ticks(0, 1, 2)) // [0, 0.5, 1]
log("0-1, 3", d3.ticks(0, 1, 3)) // [0, 0.5, 1]

log("0-3, 1", d3.ticks(0, 3, 1)) // [0, 2]
log("0-3, 2", d3.ticks(0, 3, 2)) // [0, 2]
log("0-3, 3", d3.ticks(0, 3, 3)) // [0, 1, 2, 3]

log("0-9, 1", d3.ticks(0, 9, 1)) // [0]
log("0-9, 2", d3.ticks(0, 9, 2)) // [0, 5]
log("0-9, 5", d3.ticks(0, 9, 5)) // [0, 2, 4, 6, 8]

log("0-9999, 1", d3.ticks(0, 9999, 1)) // [0]
log("0-9999, 2", d3.ticks(0, 9999, 2)) // [0, 5000]
log("0-9999, 5", d3.ticks(0, 9999, 5)) // [0, 2000, 4000, 6000, 8000]


/**
 * * d3.tickIncrement(start, stop, count) 步长 （刻度之间的差值）
 * 
 * 与 d3.tickStep 类似, 但是要求 start 总是小于等于 step, 
 * 
 * 如果给定的 start, stop 以及 count 计算出来的步长小于 1 时则对步长求反.
 * 
 * 这个方法永远保证返回一个整数提供给 d3.ticks, 避免浮点数达到精确表示的目的.
 */

 
log("0-1, 1", d3.tickIncrement(0, 1, 1)) // 1
log("0-1, 2", d3.tickIncrement(0, 1, 2)) // -2
log("0-1, 3", d3.tickIncrement(0, 1, 3)) // -2

log("0-3, 1", d3.tickIncrement(0, 3, 1)) // 2
log("0-3, 2", d3.tickIncrement(0, 3, 2)) // 2
log("0-3, 3", d3.tickIncrement(0, 3, 3)) // 1

log("0-9, 1", d3.tickIncrement(0, 9, 1)) // 10
log("0-9, 2", d3.tickIncrement(0, 9, 2)) // 5
log("0-9, 5", d3.tickIncrement(0, 9, 5)) // 2

log("0-9999, 1", d3.tickIncrement(0, 9999, 1)) // 10000
log("0-9999, 2", d3.tickIncrement(0, 9999, 2)) // 5000
log("0-9999, 5", d3.tickIncrement(0, 9999, 5)) // 2000



/**
 * * d3.tickStep(start, stop, count) 步长 （刻度之间的差值）
 * 
 * 会计算一个 10 的 1, 2 或 5 的次幂 的舍入值.
 * 要注意的是因为 IEEE 754 浮点数的存储原因, 
 * 返回的值可能不精确. 使用 d3-format 可以将其转换为人类友好的值.
 * 
 */

 
log("0-1, 1", d3.tickStep(0, 1, 1)) // 1
log("0-1, 2", d3.tickStep(0, 1, 2)) // 0.5
log("0-1, 3", d3.tickStep(0, 1, 3)) // 0.5

log("0-3, 1", d3.tickStep(0, 3, 1)) // 2
log("0-3, 2", d3.tickStep(0, 3, 2)) // 2
log("0-3, 3", d3.tickStep(0, 3, 3)) // 1

log("0-9, 1", d3.tickStep(0, 9, 1)) // 10
log("0-9, 2", d3.tickStep(0, 9, 2)) // 5
log("0-9, 5", d3.tickStep(0, 9, 5)) // 2

log("0-9999, 1", d3.tickStep(0, 9999, 1)) // 10000
log("0-9999, 2", d3.tickStep(0, 9999, 2)) // 5000
log("0-9999, 5", d3.tickStep(0, 9999, 5)) // 2000



/**
 * * d3.range([start, ]stop[, step])  范围（返回等差数列）
 * 
 * 会计算一个 10 的 1, 2 或 5 的次幂 的舍入值.
 * 要注意的是因为 IEEE 754 浮点数的存储原因, 
 * 返回的值可能不精确. 使用 d3-format 可以将其转换为人类友好的值.
 * 
 */

log("range1", d3.range(0, 1, 1)) // [0]
log("range2", d3.range(0, 1, 0.5)) // [0, 0.5]
log("range3", d3.range(0, 1, 0.2)) // [0, 0.2, 0.4, 0.6000000000000001, 0.8]
log("range3", d3.range(0, 1, 0.2)) // [0, 0.2, 0.4, 0.6000000000000001, 0.8]

