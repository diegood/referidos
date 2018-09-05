import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser (state, user) {
      let newUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }
      state.user = newUser
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true, { root: true })
      commit('clearError', { root: true })
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => { commit('setUser', user.user) }
        )
        .catch(
          error => {
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true, { root: true })
      commit('clearError', { root: true })
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => { commit('setUser', user.user) }
        )
        .catch(
          error => {
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            console.log(error)
          }
        )
    },
    signUserInGoogle ({commit}) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
          user => { commit('setUser', user.user) }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserInFacebook ({commit}) {
      commit('setLoading', true, { root: true })
      commit('clearError', { root: true })
      firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(
          user => { commit('setUser', user.user) }
        )
        .catch(
          error => {
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            console.log(error)
          }
        )
    },
    signUserInTwitter ({commit}) {
      commit('setLoading', true, { root: true })
      commit('clearError', { root: true })
      firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
        .then(
          user => { commit('setUser', user.user) }
        )
        .catch(
          error => {
            commit('setLoading', false, { root: true })
            commit('setError', error, { root: true })
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    resetPasswordWithEmail ({ commit }, payload) {
      const { email } = payload
      commit('setLoading', true, { root: true })
      firebase.auth().sendPasswordResetEmail(email)
      .then(
        () => {
          commit('setLoading', false, { root: true })
          console.log('Email Sent')
        }
      )
      .catch(
        error => {
          commit('setLoading', false, { root: true })
          commit('setError', error, { root: true })
          console.log(error)
        }
      )
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
