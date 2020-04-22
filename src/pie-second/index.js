import Pie from "./Pie";
import * as d3 from "d3";

const data = [
    { signal: 'red', second: 30 },
    { signal: 'yellow', second: 5 },
    { signal: 'green', second: 25 },
]

const updateData = { signal: 'green', second: 8 }

export default {
    render: function (wrapperDom) {
        // const p = new Pie({ wrapper: wrapperDom, data, outerRadius: 100, innerRadius: 50 })
        // p.start(data[2], 23)
    }
}