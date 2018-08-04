import { getField, updateField } from 'vuex-map-fields'

const state = {
  form: {
    firstName: '',
    lastName: '',
    tel: '',
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
  state,
  getters,
  mutations
}
