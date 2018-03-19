import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    mode: 'history'
})
