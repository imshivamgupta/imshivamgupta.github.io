import firebase from 'firebase'
import { db } from '@/FirebaseInit'
// import { doc, onSnapshot, collection, query, where } from 'firebase/firestore'

const state = {
  token: null,
  user: '',
  userStatus: '',
  error: '',
  caseStudies: []
}

const getters = {
  token: (state) => state.token,
  user: (state) => state.user,
  userStatus: (state) => state.userStatus,
  error: (state) => state.error
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
  }
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
  async fetchCaseStudies({ state }) {
    const dataBase = await db.collection('case-studies')
    const dbResults = await dataBase.get()
    dbResults.forEach((doc) => {
      if (!state.caseStudies.some((post) => post.id === doc.id)) {
        const data = {
          id: doc.id,
          title: doc.data().title,
          desc: doc.data().desc,
          img: doc.data().img
        }
        state.caseStudies.push(data)
      }
    })
    console.log(state)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
