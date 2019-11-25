import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { projects } from '../data/data'

export default new Vuex.Store({
  state: {
    projects: projects
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProjects(state) {
      return state.projects
    }
  }
})
