<script>
import Nav from '../components/Nav.vue'
import Links from '../components/SocialLinks.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Account',
  components: { Nav, Links },
  async mounted () {
    await this.check()
  },
  computed: {
    ...mapGetters(['user', 'isLoggedIn'])
  },
  methods: {
    async check () {
      if (!this.isLoggedIn) this.$router.push('login')
    },
    ...mapActions(['fetchUser', 'logoutUser']),
    async logout () {
      try {
        await this.logoutUser()
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div class="account">
    <div class="home_nav">
      <Nav />
    </div>
    <div class="info">
      <div class="personal">
        <h2>Account</h2>
        <img src="../assets/icons/account.png">
      </div>
      <div class="name">
        <p>Name</p>
        <h4>{{ user.firstName }}</h4>
      </div>
      <div class="phone">
        <p>Phone</p>
        <h4>{{ user.phone }}</h4>
      </div>
      <div class="email">
        <p>Email address</p>
        <h4>{{ user.email }}</h4>
      </div>
    </div>
    <div class="account_buttons">
        <a href="/account/save" class="account_button_save">Saved Houses</a>
        <button class="account_button_logout" @click="logout">Log out</button>
    </div>
    <div class="account_links">
      <Links />
    </div>
  </div>
</template>

<style>
.account .info{
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  text-align: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  gap: 40px;
}

.account .info .personal{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 10px;
}

.account .account_buttons {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  margin-right: 43%;
  margin-left: 43%;
  gap: 120px;
}

.account .account_buttons .account_button_logout {
  background-color: white;
  border: solid 1px;
  font-family: Arial;
  font-weight: bold;
  font-size: small;
  padding: 10px;
  cursor: pointer;
  border-color: rgb(0, 0, 0);
}

.account .account_buttons a {
  background-color: #00ffff;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.88);
  font-family: Arial;
  font-weight: bold;
  font-size: small;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  color: black;
}

.account .account_buttons .account_button_logout:hover {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}

.account .account_buttons a:hover {
  background-color: #77ffff;
  cursor: pointer;
}
</style>
