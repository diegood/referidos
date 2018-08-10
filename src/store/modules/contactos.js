import Hash from 'object-hash'
import axios from 'axios'
// initial state
const state = {
  usersReferers: {}
}

// getters
const getters = {
  countContacs: state => {
    return Object.keys(state.usersReferers).length
  }
}

// actions
const actions = {
  fetchContacts ({ commit }, { self }) {
    axios.get('http://localhost:3000/contactos')
    .then(function (response) {
      commit('FETCH_CONTACTS', response.data)
    })
  }
}

// mutations
const mutations = {
  addUserReferer (state, contacto) {
    if (contacto.firstName) {
      state.usersReferers[Hash(contacto)] = contacto
    }
  },
  FETCH_CONTACTS (state, contacto) {
    state.usersReferers = contacto
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
