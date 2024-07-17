
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import {App} from "vue";

export const publicRoutes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'home',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'homeIndex',
        component: () => import('../homePage/index.vue'),
        children:[
            {
                path:'fabric',
                name:'Fabric',
                component:() => import('../fabric/index.vue')
            },
            {
                path:'knova',
                name:'Knova',
                component:() => import('../knova/index.vue')
            },
            {
                path:'leafer',
                name:'Leafer',
                component:() => import('../leafer/index.vue')
            },
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: publicRoutes
});

/* 初始化路由表 */
export function resetRouter() {
    router.getRoutes().forEach((route) => {
        const { name } = route;
        if (name) {
            router.hasRoute(name) && router.removeRoute(name);
        }
    });
}
/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
    app.use(router);
};