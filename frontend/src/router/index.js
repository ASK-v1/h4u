import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Houses from '../views/Houses.vue'
import House from '../views/House.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/house',
    name: 'House',
    component: House
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
