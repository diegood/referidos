import { getField, updateField } from 'vuex-map-fields'

const state = {
  form: {
    firstName: '',
    lastName: '',
    company: '',
    email: ''
  }
}

const getters = {
  getField
}

const mutations = {
  updateField
}

export default {
//   namespaced: true,
  state,
  getters,
  mutations
}
