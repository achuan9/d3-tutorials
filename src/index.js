


// import Axis from "./axis";
// import PieTimer from "./pie-timer";
import crossing from "./crossing";
// import SpaceTimeDiagram from "./space-time-diagram";
// import API from "./api";

const Render = {
    moduleList: [],
    install: function (module) {
        const f = function () {
            module.render.apply(this, arguments)
        }
        this.moduleList.push(f)
    }
}

// Render.install(Axis)

// Render.install(PieTimer)
Render.install(crossing)
// Render.install(SpaceTimeDiagram)
// Render.install(API)




document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('content')
    Render.moduleList.map(module => module(wrapper))
})
