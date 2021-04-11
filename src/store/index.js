import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import school from './school';

export default new Vuex.Store({
  namespaced: true,
  state: {
    currentPage: 'School',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    school,
  }
})