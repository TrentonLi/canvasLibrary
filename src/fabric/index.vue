<script setup lang="ts">
import {
  clear, Controls, handleDragOver, handleDragStart, handleDrop,
  init
} from "./index.ts";
import {onMounted} from "vue";


onMounted(() =>{
  init()
})
</script>

<template>
  <a-row class="grid-demo">
    <a-col class="menu" :span="4">
      <a-list :bordered="false">
        <template #header>
          <span class="cursor">Fabric Controls</span>
        </template>
        <div class="itemList">
          <a-tooltip v-for="ite in Controls" :content="ite.intro" background-color="#3491FA">
            <a-avatar
                @click="clear(ite.intro)"
                @dragstart="handleDragStart($event, ite.key)"
                :draggable="ite.key!=='Clear'"
                class="cursor item"
                :key="ite.key"
                :size="64"
                shape="square">
              <component :is="ite.icon"/>
            </a-avatar>
          </a-tooltip>
        </div>
      </a-list>
    </a-col>
    <a-col class="canvas" :span="20">
      <div id="canvasBox"
           @drop="handleDrop"
           @dragover="handleDragOver"
           style="width: 100%">
        <canvas id="fabric_canvas"></canvas>
      </div>
    </a-col>
  </a-row>
</template>

<style scoped src="./index.css"></style>