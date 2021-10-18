<script>
export default {
  name: 'Contact',
  data () {
    return {
      contact_title: 'ASK Housing',
      contact_phone: '+90 999 99 99'
    }
  }
}
</script>

<template>
<div class="contact">
  <div class="logo">
    <img src="../assets/icons/contact.png">
  </div>
  <div class="contact_title">
    <h3>{{ contact_title }}</h3>
  </div>
  <div class="contact_phone">
    <img src="../assets/icons/phone.png" width="25">
    <h5>{{ contact_phone }}</h5>
  </div>
  <div class="contact_button">
    <button>Contact the estate agent</button>
  </div>
</div>
</template>

<style>
.contact {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px;
  gap: 20px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.25);
  margin-bottom: 400px;
}

.contact .contact_phone {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.contact .contact_button button {
  display: inline-flex;
  align-items: center;
  font-weight: bolder;
  border: none;
  transition: all 0.2s ease-in-out 0s, background 0.3s;
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  background-color: rgb(92, 10, 255);
}
.contact .contact_button button:hover {
  background-color: rgb(178, 146, 243);
}
</style>
