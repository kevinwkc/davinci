import { createApp } from 'vue'
import './style.css'

import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

import Home from './views/Home.vue'
import AI from './views/AI.vue'
import Detect from './views/Detect.vue'
import Tableau from './views/Tableau.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path:'/', name: 'Home', component: Home},
    {path:'/detect', name: 'Detect', component: Detect},
    {path:'/ai', name: 'AI', component: AI},
    {path:'/tableau', name: 'Tableau', component: Tableau}
  ]
})
createApp(App)
.use(router)
.mount('#app')
