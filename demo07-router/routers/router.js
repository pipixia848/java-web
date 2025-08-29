// 导入创建路由的相关方法

import {createRouter, createWebHistory} from 'vue-router'
import Home from "../components/Home.vue";
import Add from "../components/Add.vue";
import List from "../components/List.vue";
import ShowDetail from "../components/showDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path:'/showDetail/:id/:language',
          component:ShowDetail,
        },
        {
          path: '/',
          component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/list',
            component: List
        }
    ]
})

// 全局前置守卫
router.beforeEach((to, from, next) =>{
    next();
})

// 全局后置守卫
router.afterEach(() =>{

})


export default router