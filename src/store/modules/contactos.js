import Hash from 'object-hash'
// import axios from 'axios'
import firebase from './../../firebaseConfig'

// initial state
const state = {
  usersReferers: {}
}

let ref = firebase.db.ref('contactos/')

// getters
const getters = {
  countContacs: state => {
    return Object.keys(state.usersReferers).length
  }
}

// actions
const actions = {
  fetchContacts ({ commit }, { self }) {
    // axios.get('http://localhost:3000/contactos')
    // .then(function (response) {
    //   commit('FETCH_CONTACTS', response.data)
    // })
  },
  getFirebaseData (context) {
    ref.on('value', function (snapshot) {
      context.commit('FETCH_CONTACTS', snapshot.val())
    })
  }
}

// mutations
const mutations = {
  addUserReferer (state, contacto) {
    if (contacto.firstName) {
      state.usersReferers[Hash(contacto)] = contacto
      firebase.db.ref('contactos/' + Hash(contacto)).set(contacto)
      return state
    }
  },
  // FETCH_CONTACTS (state, contacto) {
  //   state.usersReferers = contacto
  // },
  FETCH_CONTACTS (state, contactos) {
    state.usersReferers = contactos
  },
  deleteUserReferer (state, { id }) {
    // const contacto = state.usersReferers.find(contacto => contacto.id === id)
    // state.usersReferers.splice(state.usersReferers.indexOf(contacto), 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
