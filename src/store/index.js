import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { projects } from '../data/data'

export default new Vuex.Store({
  state: {
    projects: projects,
    filter_tech: []
  },
  mutations: {
    'SET_TECH'(state, payload) {
      state.filter_tech = payload;
    },
    'INIT_TECH'(state, payload) {
      state.filter_tech = payload;
    },
    'SET_DEFAULT_FILTERS'(state) {
      state.filter_tech = this.getters.getTechs;
    }
  },
  actions: {
    setTech({commit}, payload) {
        commit('SET_TECH', payload);
    },
    initTech({commit}, payload) {
      commit('INIT_TECH', payload);
    },
    setDefaultFilters({commit}) {
      commit('SET_DEFAULT_FILTERS');
    }
  },
  modules: {
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
    getTechs(state) {
        let techs = [];

        state.projects.forEach(project => {
          project.tech.forEach(t => {
            if (!techs.includes(t)) {
              techs.push(t)
            }
          })
        })

        return techs;
    },
    getFilteredTech(state) {
      return state.filter_tech;
    }
  }
})
