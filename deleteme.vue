methods: {
  ...mapActions(['randInt'])
},

import axios from 'axios'
import { createApp } from 'vue'
import { createStore } from 'vuex'

import {app} from 'main'

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
  }
})
app.use(store)
