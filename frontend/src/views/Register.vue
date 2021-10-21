<script>
import Nav from '../components/Nav.vue'
import Links from '../components/SocialLinks.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Register',
  components: { Nav, Links },
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['Register']),
    async submit () {
      await this.Register(this.form)
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="Register">
    <div class="register_nav">
      <Nav />
    </div>
    <form class="form_register" @submit.prevent="submit">
      <div class="form_title">
        <h1>Register</h1>
      </div>
      <div class="form_row">
        <label>
          <input type="text" name="firstName" v-model="form.firstName" placeholder="First name">
        </label>
        <label>
          <input type="text" name="LastName" v-model="form.lastName" placeholder="Last name">
        </label>
        <label>
          <input type="email" name="email" v-model="form.email" placeholder="Email">
        </label>
        <label>
          <input type="tel" name="phone" v-model="form.phone" placeholder="Phone">
        </label>
        <label>
          <input type="password" name="password" v-model="form.password" placeholder="Password">
        </label>
        <label>
          <button class="button_register" type="submit">Register</button>
        </label>
      </div>
    </form>
    <div class="register_login">
      <h5>Already registered?</h5>
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
  padding: 10px 102px;
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
  margin-bottom: 10%;
  gap: 10px;
}

.register_login .login {
  background-color: #ffffff;
  border: solid 1px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 111px;
  cursor: pointer;
  border-color: rgb(0, 0, 0);
  text-decoration: none;
  color: black;
}

.register_login .login:hover {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
</style>
