<script>
export default {
  name: 'Signup'
}
</script>

<template>
  <div class="Signup">
    <form class="form-signup" method="post" action="#">
      <div class="form-title">
        <h1>Sign Up</h1>
      </div>
      <div class="form-row">
        <label>
          <input type="text" name="name" placeholder="First name">
        </label>
        <label>
          <input type="text" name="name" placeholder="Last name">
        </label>
        <label>
          <input type="email" name="email" placeholder="Email">
        </label>
        <label>
          <input type="tel" name="phone" maxlength="14" placeholder="Phone">
        </label>
        <label>
          <input type="password" name="password" placeholder="Password">
        </label>
        <label>
          <button class="button_register" type="submit">Register</button>
        </label>
      </div>
    </form>
  </div>
</template>

<style>
.form-signup{
  margin-top: 3%;
}

.form-signup .form-row {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.form-signup .form-title{
  margin-bottom: 80px;
}

.form-signup h1{
  display: inline-block;
  font-size: 24px;
  padding: 15px;
  border-bottom: 3px solid #00ffff;
}

.form-signup input{
  color:  #5f5f5f;
  box-sizing: border-box;
  width: 260px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
}

.form-signup .button_register{
  background-color: #00ffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 100px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  border: none;
  cursor: pointer;
}

.form-signup .button_register:hover {
  background-color: #77ffff;
}

</style>
