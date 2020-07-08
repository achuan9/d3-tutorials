
import "./style.css";
import demo1 from "./demo1";
import custom from "./custom";
import Signal from "./signal";

const s = new Signal('solid', [], [false, false, true])
console.log(s);



export default {
    render: function (wrapper) {
        // wrapper.appendChild(demo1)
        wrapper.appendChild(custom)
    }
}