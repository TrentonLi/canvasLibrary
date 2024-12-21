<script setup lang="ts">
import {onMounted} from "vue";
import {leaferInit,dragAdd,drop} from "./index.ts";

onMounted(() =>{
  leaferInit()
})
const handleEls = [
  {
    name: '矩形',
    tag:'Rect',
    icon: 'icon-rect',
  },
  {
    name: '圆形',
    tag:'Ellipse',
    icon: 'icon-ellipse',
  },
  {
    name: '直线',
    tag:'line',
    icon: 'icon-line',
  },
  {
    name: '多边形',
    tag:'Polygon',
    icon: 'icon-polygon',
  },
  {
    name: '多角星',
    tag:'Star',
    icon: 'icon-star',
  },
  {
    name: '图片',
    tag:'Image',
    icon: 'icon-img',
  },
  {
    name: '文本',
    tag:'Text',
    icon: 'icon-text',
  },
]
</script>

<template>
  <div class="flex">
    <div class="w-1/5">
      <div class="text-3xl text-center text-red-500">操作栏</div>
      <div class="flex justify-around flex-wrap">
        <div class="cursor-pointer w-20 h-20 bg-red-200 text-center leading-[80px] mb-2"
             draggable="true"
             @dragstart="dragAdd(menu.tag)"
             v-for="menu in handleEls" :key="menu.tag">
          {{menu.name}}
        </div>
      </div>
    </div>
    <div class="w-4/5">
      <div class="text-3xl text-center text-red-500">画布</div>
      <div class="h-[600px]" @dragover.prevent @drop="drop($event)" id="leaferCanvas"></div>
    </div>
  </div>
</template>

<style scoped>

</style>