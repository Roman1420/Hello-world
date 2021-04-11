export default {
  namespaced: true,
  state: {
    currentTab: 'MainTab',
    wrongAnswers: 1
  },
  mutations: {
    SET_CURRENT_TAB: function(state, value) {
      state.currentTab = value
    }
  },
  actions: {
    async setCurrentTab(context, value) {
      context.commit('SET_CURRENT_TAB', value)
    }
  },
}