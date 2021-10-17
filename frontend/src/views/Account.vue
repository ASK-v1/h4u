<script>
import Nav from '../components/Nav.vue'
import Links from '../components/SocialLinks.vue'

export default {
  name: 'Account',
  components: { Nav, Links },
  data () {
    return {
      name: 'ASK',
      email: 'ask@gmail.com',
      phone: '+90 999 99 99'
    }
  }
}
</script>

<template>
  <div class="home_nav">
    <Nav />
  </div>
  <div class="account">
    <div class="personal">
      <img src="../assets/icons/account.png">
    </div>
    <div class="name">
      <p>Name</p>
      <h4>{{ name }}</h4>
    </div>
    <div class="phone">
      <p>Phone</p>
      <h4>{{ phone }}</h4>
    </div>
    <div class="email">
      <p>Email address</p>
      <h4>{{ email }}</h4>
    </div>
    <label>
      <button class="button_save" type="submit">Saved Houses</button>
    </label>
    <label>
      <button class="button_logout" type="submit">Log out</button>
    </label>
    <div class="delete">
      <label>
        <h3>Delete account</h3>
        <p>If you no longer wish to use your account, you can easily delete it.</p>
        <button class="button_delete" type="submit">Delete Account</button>
      </label>
    </div>
  </div>
  <div class="account_links">
    <Links />
  </div>
</template>

<style>
.account {
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.account .name {
  margin-top: 2%;
  margin-bottom: 1%;
}

.account .phone {
  margin-bottom: 1%;
}

.account .email {
  margin-bottom: 5%;
}

.account .button_save {
  background-color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  padding: 10px 75px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  border-color: #77ffff;
}

.account .button_logout {
  margin-top: 2%;
  background-color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 95px;
  cursor: pointer;
  border-color: #77ffff;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}

.account .button_delete {
  background-color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 70px;
  cursor: pointer;
  border-color: #ff0000;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
}
.account .delete {
  margin-top: 5%;
}

.delete p {
  margin-bottom: 1%;
}

.account_links {
  margin-top: 10%;
}

</style>
