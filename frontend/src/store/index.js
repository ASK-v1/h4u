import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default createStore({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    userData: {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_user (state, userData) {
      state.userData = userData
    },
    logout (state) {
      state.status = ''
      state.token = ''
      state.userData = ''
    }
  },
  actions: {
    async loginUser ({ commit }, user) {
      commit('auth_request')
      const req = await axios.post('http://localhost:3000/users/login', user)
      const data = req.data
      localStorage.setItem('token', data.token)
      axios.defaults.headers.common.Authorization = data.token
      commit('auth_success', data.token)
      commit('auth_user', data.userData)
      return req.data
    },
    async registerUser ({ commit }, user) {
      commit('auth_request')
      const req = await axios.post('http://localhost:3000/users/register', user)
      return req.data
    },
    async logoutUser ({ commit }) {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common.Authorization
    },
    async getSearch ({ commit }, name) {
      const req = await axios.get(`http://localhost:3000/houses/${name}`)
      return req.data
    },
    async getHouse ({ commit }, id) {
      const req = await axios.get(`http://localhost:3000/houses/house/${id}`)
      return req.data
    },
    async save ({ commit }, user) {
      const req = await axios.put(`http://localhost:3000/houses/house/${user.houseId}`, user)
      return req.data
    },
    async updateSave ({ commit }, userId) {
      const req = await axios.get(`http://localhost:3000/users/account/save/${userId}`)
      const data = req.data
      commit('auth_user', data.userData)
      return req.data
    },
    async delete ({ commit }, user) {
      const req = await axios.delete(`http://localhost:3000/users/account/delete/${user.userId}/${user.houseId}`)
      return req.data
    },
    async getRoom ({ commit }, filter) {
      const req = await axios.get(`http://localhost:3000/houses/filterRoom/${filter.room}/${filter.cityName}`)
      return req.data
    },
    async getPrice ({ commit }, filter) {
      const req = await axios.get(`http://localhost:3000/houses/filterPrice/${filter.price}/${filter.cityName}`)
      return req.data
    },
    async getArea ({ commit }, filter) {
      const req = await axios.get(`http://localhost:3000/houses/filterArea/${filter.area}/${filter.cityName}`)
      return req.data
    },
    async getType ({ commit }, filter) {
      const req = await axios.get(`http://localhost:3000/houses/filterType/${filter.type}/${filter.cityName}`)
      return req.data
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.userData
  },
  plugins: [createPersistedState()]
})
