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
        this.$router.push('login')
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
        <img src="../assets/icons/account.png">
      </div>
      <div class="name">
        <p>Name</p>
        <h4>{{ this.user.firstName }}</h4>
      </div>
      <div class="phone">
        <p>Phone</p>
        <h4>{{ this.user.phone }}</h4>
      </div>
      <div class="email">
        <p>Email address</p>
        <h4>{{ this.user.email }}</h4>
      </div>
    </div>
    <div class="account_buttons">
        <button class="account_button_save" type="submit">Saved Houses</button>
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

.account .account_buttons {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  margin-right: 43%;
  margin-left: 43%;
  gap: 120px;
}

.account .account_button_logout {
  font-family: Arial;
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
  border-color: #ff7777;
}
.account .account_button_save {
  font-family: Arial;
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
  border-color: #77ffff;
}
</style>
