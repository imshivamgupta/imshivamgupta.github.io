import firebase from 'firebase'

const state = {
  token: null,
  user: '',
  userStatus: '',
  error: '',
}

const getters = {
  token: (state) => state.token,
  user: (state) => state.user,
  userStatus: (state) => state.userStatus,
  error: (state) => state.error,
}

const mutations = {
  token(state, payload) {
    state.token = payload
  },
  user(state, payload) {
    state.user = payload
  },
  userStatus(state, payload) {
    state.userStatus = payload
  },
  error(state, payload) {
    state.error = payload
  },
}

const actions = {
  signInWithFirebase({ commit }) {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((response) => {
        commit('token', response.credential.accessToken)
        commit('user', response.user)
        commit('userStatus', 'logged')
        console.log('response', response)
      })
      .catch((error) => {
        commit('userStatus', 'failed')
        commit('error', error.message)
        console.log('error', error)
      })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
