<template>
  <div id="signup">
      <register-form :title="title" :buttonName="buttonName" :buttonAction='registerUser'>
          <label for="email">Email</label>
          <input name="email" v-model="email" type="email" placeholder="example@email.com">
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="password" v-model="password">
      </register-form>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'
import AuthenticationService from '../services/AuthenticationService.js'
export default {

name: 'SignUp',
components: {
    RegisterForm
},
data(){
    return {
       email: '',
       password: '',
       title: 'Sign Up',
       buttonName: 'sign up',
       buttonAction: function(){}
    }
},
methods: {
    async registerUser(){
         try{
            const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
           
            this.error = null
           
            this.$store.dispatch('setUser', response.data.user);
            this.$store.dispatch('setToken', response.data.token);
            this.$router.push({name:'User'});
           }
           catch(err){
               this.error = err.response.data.error
           }
    }
}


}
</script>

<style>
#signup {
    display: flex;
    justify-content: center;
}

</style>