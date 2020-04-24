import PieTimer from "./PieTimer";

const data = [
    { signal: 'red', second: 30 },
    { signal: 'yellow', second: 5 },
    { signal: 'green', second: 25 },
]



export default {
    render: function (wrapperDom) {
        const p = new PieTimer({ wrapper: wrapperDom, data, outerRadius: 100, innerRadius: 50 })
        // p.start(data[1], 4)
        // setTimeout(() => {
        //     p.stop()
        // }, 3000);
        // setTimeout(() => {
        //     p.start(data[2], 20)
        // }, 5000);
    }
}