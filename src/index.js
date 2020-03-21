import part1 from "./bar-chart/part1";
import part2 from "./bar-chart/part2";
import part3Render from "./bar-chart/part3";
import part4 from "./bar-chart/part4";



function render(target) {
    const nodeMap = { part1, part2, part4 }
    if (target === 3) {
        part3Render()
    } else {
        $('content').appendChild(nodeMap[`part${target}`])

    }
}

function $(id) {
    return document.getElementById(id)
}
document.addEventListener('DOMContentLoaded', function () {
    const btnWrapper = $('barChart')
    btnWrapper.addEventListener('click', function (e) {
        const { tagName, dataset } = e.target
        tagName === 'BUTTON' && render(+dataset.target)

    })
})


