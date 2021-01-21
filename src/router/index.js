import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRoutes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name:'home',
        component: () => import('../views/home/home')
    },
    {
        path: '/functions',
        name: 'functions',
        component: () => import('../views/functions/functions')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about/about')
    },
    {
        path: '/fast-connect',
        name: 'fast-connect',
        component: () => import('../views/fast-connect/fast-connect')
    }
]

const createRouter = () => new VueRouter({
    routes: constantRoutes,
    mode: 'history'
})

const router = createRouter()

export default router