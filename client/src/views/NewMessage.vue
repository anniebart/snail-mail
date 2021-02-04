<template>
  <div id="new-message">
      <register-form :title='title' buttonName="submit">
          <div>
        <label for="speed">pick your sending speed:</label>
        <select name="speed" id="speed">
            <option value="2hours">courier</option>
            <option value="24hrs">express</option>
            <option value="48hrs">priority</option>
            <option value="120"> first class</option>
            <option value="280">cargo</option>
        </select>
           <input type="text" placeholder="To:" @keydown="queryUsers(query)" v-model="query">
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
        title: 'new message',
        query: ''
    }
},
methods: {
    queryUsers(query){
        this.query = query
        setTimeout(function(){console.log(query)}, 1000)
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
    border: 2px solid #5BCBCA;
}

textarea {
    height: 30vh;
    width: 400px;
    border: none;
    border-radius: 20px;
    padding: 8px;
    font-size: 18px;
    font-family: Sen, sans-serif;
}
textarea:focus {
    outline: none;
    border: 2px solid #5BCBCA;
}

select {
    background-color: white;
    border: none;
    padding: 4px;
    font-size: 18px;
    font-family: Sen, sans-serif;
    margin-left: 8px;
    outline: none;
    border-radius: 30px;
}
/* select:focus {
    border: 2px solid #6FC39F;
} */



</style>