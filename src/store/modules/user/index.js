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
    if (getters.darkMode) {
      localStorage.setItem('darkMode', false)
      commit('darkMode', false)
    } else {
      localStorage.setItem('darkMode', true)
      commit('darkMode', true)
    }
    console.log('ss')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
