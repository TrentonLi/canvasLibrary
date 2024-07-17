<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter()
const routes = [
  {
    key:'1',
    title:'Fabric',
    path:'fabric'
  },
  {
    key:'2',
    title:'Knova',
    path:'knova'
  },
  {
    key:'3',
    title:'Leafer',
    path:'leafer'
  }
]
const handleTabChange = (key:string) =>{
  const route = routes.find(route => route.key === key);
  if (route) {
    router.push(route.path);
  }
}
</script>

<template>
  <div class="demo">
    <a-row class="grid-demo">
      <a-col :span="24">
        <div style="display: flex;align-items: center">
          <icon-face-smile-fill :style="{fontSize:'24px'}" :rotate="180"/>
          <div style="color: red;font-size: 24px">CANVAS库demo</div>
        </div>
      </a-col>
      <a-divider />
    </a-row>
    <a-tabs size="large" type="text" @change="handleTabChange" default-active-key="1">
      <a-tab-pane v-for="ite in routes" :key="ite.key" :title="ite.title">
      </a-tab-pane>
    </a-tabs>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.demo{
  margin: 0 auto;
  padding: 1rem;
  font-size: 20px;
}
</style>