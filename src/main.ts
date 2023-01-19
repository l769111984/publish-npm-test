import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import routes from './route'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')