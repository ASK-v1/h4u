<script>
import Nav from '../components/Nav.vue'
import Links from '../components/SocialLinks.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: { Nav, Links },
  data () {
    return {
      email: '',
      password: '',
      showError: false
    }
  },
  async mounted () {
    await this.check()
    window.scrollTo(0, 0)
  },
  methods: {
    async check () {
      if (this.$store.getters.isLoggedIn) this.$router.push('account')
    },
    ...mapActions(['loginUser']),
    async login () {
      const data = {
        email: this.email,
        password: this.password
      }
      try {
        await this.loginUser(data)
        this.$router.push('account')
      } catch (error) {
        this.showError = true
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div class="Login">
    <div class="login_nav">
      <Nav />
    </div>
    <div class="error" v-if="this.showError"><h3>Incorrect email or password</h3></div>
    <form class="form_login" @submit.prevent="login">
      <div class="form_title">
        <h1>Login</h1>
      </div>
      <div class="form_row">
        <div>
          <input type="email" name="email" placeholder="Email address" v-model="email" required>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" v-model="password" required>
        </div>
        <div>
          <button class="button_login" type="submit">Login</button>
        </div>
      </div>
    </form>
    <div class="login_register">
      <router-link to="/register" class="register">Register</router-link>
    </div>
    <div class="login_links">
      <Links />
    </div>
  </div>
</template>

<style>
.form_login {
  margin-top: 3%;
  margin-bottom: 6%;
  text-align: center;
}

.form_login .form_row {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.form_login .form_title {
  margin-bottom: 80px;
}

.form_login h1 {
  display: inline-block;
  font-size: 24px;
  padding: 15px;
  border-bottom: 3px solid #00ffff;
}

.form_login input {
  color:  #5f5f5f;
  box-sizing: border-box;
  width: 260px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
}

.form_login .button_login {
  background-color: #00ffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 50px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  border: none;
  cursor: pointer;
}

.form_login .button_login:hover {
  background-color: #77ffff;
}

.login_register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.login_register .register {
  background-color: #ffffff;
  border: solid 1px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 100px;
  cursor: pointer;
  border-color: rgb(0, 0, 0);
  text-decoration: none;
  color: black;
}

.login_register .register:hover {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}

.error {
  color: red;
  text-align: center;
  margin-top: 3%;
}
</style>
