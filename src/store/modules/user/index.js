const state = {
  darkMode: false,
}

const getters = {
  darkMode: (state) => state.darkMode,
}

const mutations = {
  darkMode(state, payload) {
    state.darkMode = payload
  },
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
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
