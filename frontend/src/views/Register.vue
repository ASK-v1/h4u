<script>
import Nav from '../components/Nav.vue'
import Links from '../components/SocialLinks.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Register',
  components: { Nav, Links },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      showError: false
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    ...mapActions(['registerUser']),
    async register () {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        phone: this.phone
      }
      try {
        await this.registerUser(data)
        this.$router.push('login')
      } catch (error) {
        this.showError = true
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div class="Register">
    <div class="register_nav">
      <Nav />
    </div>
    <div class="error" v-if="this.showError"><h3>Email is invalid or already taken</h3></div>
    <form class="form_register" @submit.prevent="register">
      <div class="form_title">
        <h1>Register</h1>
      </div>
      <div class="form_row">
        <div>
          <input type="text" name="firstName" v-model="firstName" placeholder="First name" required>
        </div>
        <div>
          <input type="text" name="LastName" v-model="lastName" placeholder="Last name" required>
        </div>
        <div>
          <input type="email" name="email" v-model="email" placeholder="Email" required>
        </div>
        <div>
          <input type="tel" name="phone" v-model="phone" placeholder="Phone" required>
        </div>
        <div>
          <input type="password" name="password" v-model="password" placeholder="Password" required>
        </div>
        <div>
          <button class="button_register" type="submit">Register</button>
        </div>
      </div>
    </form>
    <div class="register_login">
      <router-link to="/login" class="login">Login</router-link>
    </div>
    <div class="register_links">
      <Links />
    </div>
  </div>
</template>

<style>
.form_register {
  margin-top: 3%;
  margin-bottom: 6%;
  text-align: center;
}

.form_register .form_row {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.form_register .form_title {
  margin-bottom: 80px;
}

.form_register h1 {
  display: inline-block;
  font-size: 24px;
  padding: 15px;
  border-bottom: 3px solid #00ffff;
}

.form_register input {
  color:  #5f5f5f;
  box-sizing: border-box;
  width: 260px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
}

.form_register .button_register {
  background-color: #00ffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 50px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  border: none;
  cursor: pointer;
}

.form_register .button_register:hover {
  background-color: #77ffff;
}

.register_login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.register_login .login {
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

.register_login .login:hover {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}

.error {
  color: red;
  text-align: center;
  margin-top: 3%;
}
</style>
