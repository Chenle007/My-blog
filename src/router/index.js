import Vue from 'vue'
import VueRouter from 'vue-router'

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
    },
    {
        path: '/login',
        name: 'login',
        component:()=>import('../views/Login/login')
    }
]
const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})
export default router

