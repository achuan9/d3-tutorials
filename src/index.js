


import PieSecond from "./pie-second";
import crossing from "./crossing";
import SpaceTimeDiagram from "./space-time-diagram";

const Render = {
    moduleList: [],
    install: function (module) {
        const f = function () {
            module.render.apply(this, arguments)
        }
        this.moduleList.push(f)
    }
}


Render.install(PieSecond)
Render.install(crossing)
Render.install(SpaceTimeDiagram)




document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('content')
    Render.moduleList.map(module => module(wrapper))
})
