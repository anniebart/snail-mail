<template>
  <div id="login">
      <register-form :title="title" :buttonName="buttonName">
          <label for="email">Email</label>
          <input name="email" v-model="email" type="email" placeholder="example@email.com">
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="password">
      </register-form>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'
export default {
name: 'Login',
components: {
    RegisterForm
},
data(){
    return {
        email: '',
        password: '',
        title: 'Log In',
        buttonName: 'log in'
    }
}
}
</script>

<style>
#login {
    display: flex;
    justify-content: center;
}

label {
    font-size: 20px;
}
input {
    margin: 8px 0;
    display: block;
    font-size: 20px;
    padding: 4px;
    border-radius: 30px;
    border: none;
}

#form-box {
    margin-top: 40px;
    background-color: #E4E5E7;
    padding: 40px 80px 80px 80px;
    border-radius: 30px;
    box-shadow: #1b2a39cb 2px 2px 8px;
}
h1 {
    margin-bottom: 20px;
}

</style>