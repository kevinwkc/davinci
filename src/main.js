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
    {path:'/davinci', name: 'Home', component: Home},
    {path:'/davinci/detect', name: 'Detect', component: Detect},
    {path:'/davinci/ai', name: 'AI', component: AI},
    {path:'/davinci/tableau', name: 'Tableau', component: Tableau}
  ]
})



import { createStore } from 'vuex'


import {map} from "lodash/fp";
import {range} from 'itertools';
import { randomInt } from 'mathjs';
// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {

    randInt({commit, state}, {a,b,n}) {
      var r= map((i) => randomInt(a,b),[...range(n)])
      //console.log(n)
      //console.log(r)
      return r
    },
    hello({commit, state}){
      console.log("hello")
      return [40, 20, 12]
    }
    
  }
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store).use(router).mount('#app')




//console.log(randInt(1,5,10))
