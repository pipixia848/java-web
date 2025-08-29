/*
    导入创建路由对象需要的函数
 */
import {createRouter, createWebHistory} from 'vue-router'

// 导入.vue 组件
import Home from './components//Home.vue'
import List from './components//List.vue'


// 创建一个路由对象
const routes = createRouter({
    // 固定写法，用于记录路由的历史
    history: createWebHistory(),

    // 用于定义多个不同的路径和组件之间的对应关系
    routes: [
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/list',
            component:List,
        }

    ]
})

// 向外暴露路由
export default routes