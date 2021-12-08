import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Houses from '../views/Houses.vue'
import House from '../views/House.vue'
import Save from '../views/Save.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/houses/:cityName/:page',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/houses/house/:houseId',
    name: 'House',
    component: House
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/account/save',
    name: 'Save',
    component: Save
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
