const state = {
  darkMode: true
}

const getters = {
  getDarkMode: (state) => state.darkMode
}

const mutations = {
  darkMode(state, payload) {
    state.darkMode = payload
  }
}

const actions = {
  toggleDarkMode({ commit, getters }) {
    if (getters.getDarkMode) {
      localStorage.setItem('darkMode', false)
      commit('darkMode', false)
    } else {
      localStorage.setItem('darkMode', true)
      commit('darkMode', true)
    }
  },
  init({ commit, getters }) {
    const item = JSON.parse(localStorage.getItem('darkMode'))
    commit('darkMode', item)
    console.log(item, getters.getDarkMode)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
