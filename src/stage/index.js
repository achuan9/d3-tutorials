
import { STAGES } from "./data";
import Stage from "./Stage";


const svg = new Stage(STAGES[1], 110)
document.getElementById('content').appendChild(svg.node())

// for (const item of STAGES) {
//     const svg = new Stage(item, 110)
//     document.getElementById('content').appendChild(svg.node())

// }





