import * as fabric from 'fabric'
import {ref} from "vue";

const _canvas = ref()
const init = () => {
    const CanvasWidth = document.getElementById('canvasBox')?.offsetWidth
    _canvas.value = new fabric.Canvas('fabric_canvas', {
        width: CanvasWidth,
        height: 610,
        selection: true,
        allowTouchScrolling: true // 允许触摸滚动
    })
}
const Controls = [
    {
        key: 'Clear',
        intro: 'Clear',
        icon: `icon-delete`
    },
    {
        key: 'Text',
        intro: 'Text',
        icon: `icon-language`
    },
    {
        key: 'Image',
        intro: 'Image',
        icon: `icon-file-image`
    },
    {
        key: 'Triangle',
        intro: 'Triangle',
        icon: `icon-caret-up`
    },
    {
        key: 'Star',
        intro: 'Five-pointed star',
        icon: `icon-star`
    },
    {
        key: 'Circle',
        intro: 'Circle',
        icon: `icon-info-circle-fill`
    },

]
const handleDragStart = (event: DragEvent, ite: any) => {
    event.dataTransfer?.setData('text/plain', JSON.stringify(ite));
};
const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text/plain');
    if (data) {
        const key = JSON.parse(data);
        const canvasElement = document.getElementById('fabric_canvas');
        if (canvasElement) {
            const rect = canvasElement.getBoundingClientRect();
            // 计算相对于 fabric_canvas 的 X 和 Y 坐标
            const relativeX = event.clientX - rect.left;
            const relativeY = event.clientY - rect.top;
            dragAdd(key, relativeX, relativeY);
        }
    }
};
const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
};
const clear = (intro: string) => {
    if (intro === 'Clear') _canvas.value.clear()
}
const dragAdd = (key: string, X: number, Y: number) => {
    switch (key) {
        case 'Image':
            const imgUrl = `https://static.wetab.link/user-wallpaper/zh/6641594c4804264217a7c4b8/6641594c4804264217a7c4b8.jpg?t=1721022282797`
            console.log(`${key}_${X}_${Y}:${imgUrl}`)
            break;
        case 'Text':
            console.log(`key--${key}_${X}_${Y}`)
            const model = new fabric.FabricText(key, {
                left: X,
                top: Y,
            })
            _canvas.value.add(model)
            break;
        case 'Star':

            // 计算五角星的顶点
        function createStarPoints(centerX: number, centerY: number, spikes: number, outerRadius: number, innerRadius: number) {
            let points = [];
            let angle = Math.PI / spikes;

            for (let i = 0; i < 2 * spikes; i++) {
                let radius = (i % 2 === 0) ? outerRadius : innerRadius;
                let x = centerX + Math.cos(i * angle) * radius;
                let y = centerY + Math.sin(i * angle) * radius;
                points.push({x: x, y: y});
            }
            return points;
        }

            // 创建五角星对象
            const starPoints = createStarPoints(0, 0, 5, 50, 25);
            const star = new fabric.Polygon(starPoints, {
                left: X,
                top: Y,
                fill: 'yellow',
                stroke: 'black',
                strokeWidth: 1,
                originX: 'center',
                originY: 'center'
            });
            _canvas.value.add(star)
            break;
        case 'Circle':
            const circle = new fabric.Circle({
                radius: 30, // 圆的半径
                top: Y, // 距离容器顶部 20px
                left: X, // 距离容器左侧 20px
                fill: 'pink' // 填充 粉色
            })
            _canvas.value.add(circle)
            break;
    }
}

export {
    Controls, handleDrop, handleDragOver, handleDragStart,
    init, dragAdd, clear
}