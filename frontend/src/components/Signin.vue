<script>
export default {
  name: 'Signin'
}
</script>

<template>
  <div class="Signin">
    <form class="form-signin" method="post" action="#">
      <div class="form-title">
        <h1>Sign In</h1>
      </div>
      <div class="form-row">
        <label>
          <input type="email" name="email" placeholder="Email address">
        </label>
        <label>
          <input type="password" name="password" placeholder="Password">
        </label>
        <label>
          <button class="button_signin" type="submit">Sign in</button>
        </label>
      </div>
    </form>

  </div>
</template>

<style>
.form-signin {
  margin-top: 3%;
  text-align: center;
}

.form-signin .form-row {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.form-signin .form-title {
  margin-bottom: 80px;
}

.form-signin h1 {
  display: inline-block;
  font-size: 24px;
  padding: 15px;
  border-bottom: 3px solid #00ffff;
}

.form-signin input {
  color:  #5f5f5f;
  box-sizing: border-box;
  width: 260px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 12px;
  border: 1px solid #dbdbdb;
}

.form-signin .button_signin {
  background-color: #00ffff;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 100px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px, rgba(0, 0, 0, 0.05) 0px 2px 15px;
  border: none;
  cursor: pointer;
}
.form-signin .button_signin:hover {
  background-color: #77ffff;
}

</style>
