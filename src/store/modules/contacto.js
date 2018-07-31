// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllContacts ({ commit }) {
    // aca hay que opneter el modelo desde el server
    // shop.getContacto(products => {
    //   commit('setContacto', products)
    // })
  },
  addContacts ({ state, commit }, contacto) {
    state.all.push({
      company: contacto.company,
      email: contacto.email,
      firstName: contacto.firstName,
      lastName: contacto.lastName
    })
  }
}

// mutations
const mutations = {
  agregarContacto (state, contacto) {
    state.all.push({
      company: contacto.company,
      email: contacto.email,
      firstName: contacto.firstName,
      lastName: contacto.lastName
    })
  },
  setProducts (state, contacto) {
    state.all = contacto
  },
  deleteContacto (state, { id }) {
    const contacto = state.all.find(contacto => contacto.id === id)
    state.all.splice(state.all.indexOf(contacto), 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
