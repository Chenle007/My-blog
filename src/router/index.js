import Vue from 'vue'
import VueRouter from 'vue-router'
// import homeRouter from './home'
// import messageRouter from './message';
// import aboutRouter from "./about";

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'welcome',
        component:()=>import('../views/Welcome/welcome')
    },
    {
        path: '/home',
        name:'home',
        component:()=>import('../views/Home/home')
    },
    {
        path: '/message',
        name:'message',
        component:()=>import('../views/Message/message')
    },
    {
        path: '/about',
        name:'about',
        component:()=>import('../views/About/about')
    }
]
const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})
export default router

// export default new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes:[
//         homeRouter,
//         messageRouter,
//         aboutRouter
//     ]
// })
