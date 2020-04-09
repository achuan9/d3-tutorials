import Pie from "./Pie";
import * as d3 from "d3";

const data = [
    {signal: 'red', second: 30},
    {signal: 'yellow', second: 3},
    {signal: 'green', second: 25},
]

const updateData = {signal: 'green', second: 8}

export default {
    render: function (wrapperDom) {
        const p = new Pie(wrapperDom, data)
        // setTimeout(() => {
        //     p.start(updateData)
        // }, 2000);

    }
}