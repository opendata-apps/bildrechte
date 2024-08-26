import Vue from 'vue'
import Vuex from 'vuex'
import level1 from './assets/level1.json'
import level2 from './assets/level2.json'
import level3 from './assets/level3.json'

// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_queries_level1: level1,
    all_queries_level2: level2,
    all_queries_level3: level3,
    result_level1: 0,
    result_level2: 0,
    result_level3: 0
  },

  // getters are functions
  getters: {
    getLevel1: state => state.all_queries_level1,
    getLevel2: state => state.all_queries_level2,
    getLevel3: state => state.all_queries_level3,
    getResultLevel1: state => state.result_level1,
    getResultLevel2: state => state.result_level2,
    getResultLevel3: state => state.result_level3
  },
  mutations: {
    set_level1 (state, n) {
      state.result_level1 = n
    },
    set_level2 (state, m) {
      state.result_level2 = m
    },
    set_level3 (state, n) {
      state.result_level3 = n
    }
  }
})
