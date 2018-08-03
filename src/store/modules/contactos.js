import Hash from 'object-hash'
// initial state
const state = {
  usersReferers: {}
}

// getters
const getters = {}

// actions
const actions = {
  getAllContacts ({ commit }) {
    // aca hay que opneter el modelo desde el server
    // dabase.getContactos(products => {
    //   commit('setContacto', products)
    // })
  }
}

// mutations
const mutations = {
  addUserReferer (state, contacto) {
    if (contacto.firstName) {
      state.usersReferers[Hash(contacto)] = contacto
    }
  },
  setUsersReferers (state, contacto) {
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
