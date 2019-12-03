import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { projects } from "../data/data";

export default new Vuex.Store({
  state: {
    projects: [],
    filter_tech: []
  },
  mutations: {
    SET_TECH(state, payload) {
      state.filter_tech = payload;
    },
    INIT_TECH(state, payload) {
      state.filter_tech = payload;
    },
    SET_DEFAULT_FILTERS(state) {
      state.filter_tech = this.getters.getTechs;
    },
    LOAD_PROJECTS(state, payload) {
      state.projects = payload;
    }
  },
  actions: {
    setTech({ commit }, payload) {
      commit("SET_TECH", payload);
    },
    initTech({ commit }, payload) {
      commit("INIT_TECH", payload);
    },
    setDefaultFilters({ commit }) {
      commit("SET_DEFAULT_FILTERS");
    },
    loadProjects({ commit }, payload) {
      let urledProjects = [];

      urledProjects = projects.map(p => {
        p.urled = p.title.replace(/ /g, "-").toLocaleLowerCase();
        return p;
      });

      commit("LOAD_PROJECTS", urledProjects);
    }
  },
  modules: {},
  getters: {
    getProjects(state) {
      return state.projects;
    },
    getProject: state => projectTitle => {
      let project = state.projects.find(p => p.urled == projectTitle);

      return project;
    },
    getTechs(state) {
      let techs = [];

      state.projects.forEach(project => {
        project.tech.forEach(t => {
          if (!techs.includes(t)) {
            techs.push(t);
          }
        });
      });

      return techs;
    },
    getFilteredTech(state) {
      return state.filter_tech;
    }
  }
});
