import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import {setupRouter} from "./router/router.ts";

const setupApp = async () => {
    const app = createApp(App);
    // 创建路由
    setupRouter(app);
    app.use(ArcoVue)
        .use(ArcoVueIcon)
        .mount('#app');
};

setupApp().then()