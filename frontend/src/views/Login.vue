<script>
import Nav from '../components/Nav.vue'
import Links from '../components/SocialLinks.vue'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'

export default {
  name: 'Login',
  components: { Nav, Links, Signin, Signup },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<template>
  <div class="login_nav">
    <Nav />
  </div>
  <div class="login_signin" v-if="!isOpen">
    <Signin />
    <span>No account?</span>
    <label>
      <button class="login_button" @click="toggle()">Register</button>
    </label>
  </div>
  <div class="login_signup" v-if="isOpen">
    <Signup />
    <span>Already registered?</span>
    <label>
      <button class="login_button" @click="toggle()">Sign in</button>
    </label>
  </div>
  <div class="login_links">
    <Links />
  </div>
</template>

<style>
.login_links {
  margin-top: 20%;
}

.login_signin, .login_signup {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 40px;
}

.login_button {
  background-color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 100px;
  cursor: pointer;
  border-color: rgb(0, 0, 0);
}

.login_button:hover {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
</style>
