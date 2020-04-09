import Pie from "./Pie";
import * as d3 from "d3";

const data = [
    {signal: 'red', second: 30},
    {signal: 'yellow', second: 3},
    {signal: 'green', second: 25},
]

export default {
    render: function (wrapperDom) {
        Pie(wrapperDom, data)

    }
}