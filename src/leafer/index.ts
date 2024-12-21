import { Leafer, Rect,Ellipse,Line,Polygon,Star,Image,Text } from 'leafer-ui'
import {ref} from "vue";

const leaferContent = ref()
export const leaferInit = () => {
    leaferContent.value = new Leafer({ view: 'leaferCanvas' })
}
//矩形
const rect = new Rect({
    x: 80,
    y: 80,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})
//圆形
const ellipse = new Ellipse({
    width: 100,
    height: 100,
    draggable: true,
    fill: "rgb(50,205,121)"
})
//直线
const line = new Line({
    width: 100,
    strokeWidth: 5,
    draggable: true,
    stroke: 'rgb(50,205,121)'
})
//多边形
const polygon = new Polygon({
    width: 100,
    height: 100,
    sides: 3,
    draggable: true,
    fill: 'rgb(50,205,121)'
})
//多角星
const star = new Star({
    width: 100,
    height: 100,
    draggable: true,
    corners: 5,
    fill: 'rgb(50,205,121)'
})
//图片
const image = new Image({
    url: 'https://img2.wallspic.com/previews/8/1/6/9/7/179618/179618-zhi_zhu_xia-chao_ji_ying_xiong-dian_shi-spider_man_no_way_home-zhi_zhu_xia_hui_jia-500x.jpg',
    draggable: true
})
//文字
const text = new Text({
    fill: 'rgb(50,205,121)',
    draggable: true,
    fontSize:20,
    text: 'Welcome to LeaferJS',
})
const keyValArray = [
    {
        tag:'Rect',
        content:rect
    },
    {
        tag:'Ellipse',
        content:ellipse
    },
    {
        tag:'line',
        content:line
    },
    {
        tag:'Polygon',
        content:polygon
    },
    {
        tag:'Star',
        content:star
    },
    {
        tag:'Image',
        content:image
    },
    {
        tag:'Text',
        content:text
    },
]

const state = ref()
const dragAdd = (key:string) =>{
    //const getCont = keyValArray.find(item => item.tag === key)
    //leaferContent.value.add(getCont?.content)
    state.value = keyValArray.find(item => item.tag === key)
}
const drop = (event:DragEvent) =>{
    event.preventDefault()
    leaferContent.value.add(state.value?.content)
}
export {
    dragAdd,leaferContent,drop
}