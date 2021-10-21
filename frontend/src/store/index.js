import { createStore } from 'vuex'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async Register ({ dispatch }, form) {
      await axios.post('users', form)
    }
  }
})
