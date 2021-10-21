<script>
import Nav from '../components/Nav.vue'
import Links from '../components/SocialLinks.vue'

export default {
  name: 'Login',
  components: { Nav, Links }
}
</script>

<template>
  <div class="Login">
    <div class="login_nav">
      <Nav />
    </div>
    <form class="form_login">
      <div class="form_title">
        <h1>Login</h1>
      </div>
      <div class="form_row">
        <label>
          <input type="email" name="email" placeholder="Email address">
        </label>
        <label>
          <input type="password" name="password" placeholder="Password">
        </label>
        <label>
          <button class="button_login" type="submit">Login</button>
        </label>
      </div>
    </form>
    <div class="login_register">
      <h5>No account?</h5>
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
  padding: 10px 111px;
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
  margin-bottom: 19%;
  gap: 10px;
}

.login_register .register {
  background-color: #ffffff;
  border: solid 1px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 102px;
  cursor: pointer;
  border-color: rgb(0, 0, 0);
  text-decoration: none;
  color: black;
}

.login_register .register:hover {
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
</style>
