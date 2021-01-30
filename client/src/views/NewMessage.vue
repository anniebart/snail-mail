<template>
  <div id="new-message">
      <register-form :title='title' buttonName="submit">
          <div>
           <input type="text" placeholder="To:">
          <input type="text" placeholder="subject line (optional)">
          <textarea placeholder="write your message here"></textarea></div>
      </register-form>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'

export default {
  components: { RegisterForm },
name: 'New Message',
data(){
    return {
        title: 'new message'
    }
}
}
</script>

<style>
#new-message {
    display: flex;
    justify-content: center;
}
input {
    width: 400px;
    outline: none;
}

input:focus {
    border: 2px solid #6FC39F;
}

textarea {
    height: 30vh;
    width: 400px;
    border: none;
    border-radius: 20px;
    padding: 4px;
    font-family: Sen, sans-serif;
}
textarea:focus {
    outline: none;
    border: 2px solid #6FC39F;
}



</style>