<script setup lang="ts">
import {onMounted} from "vue";
import {konvaInit} from "./index.ts";

onMounted(() =>{
  konvaInit()
})
</script>

<template>
  <!--<a-empty />-->
  <h1 class="text-4xl">详情查看本地 react-image-editor </h1>
  <div style="width: 100%;height: 500px" id="KonvaBox">
    <!--<canvas id="konva_canvas"></canvas>-->
  </div>
</template>

<style scoped>

</style>