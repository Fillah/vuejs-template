// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import { store } from './store/store'
import axios from 'axios'
import loadingComponent from './components/loadingbar/loadingbar'
Es6Promise.polyfill()

Vue.component('loading-bar', loadingComponent)

console.log('loadingComponent', loadingComponent.methods)

Vue.prototype.$axios = axios.create()
Vue.prototype.$axios.interceptors.request.use(
    function (config) {
        config.baseURL = 'https://localhost:44300'
        config.withCredentials = true
        config.headers.Authorization = window['userCredentials']
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

router.beforeEach((to, from, next) => {
    loadingComponent.methods.start()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.global.user) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

router.afterEach(() => {
    loadingComponent.methods.stop()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
