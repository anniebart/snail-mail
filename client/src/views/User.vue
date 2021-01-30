<template>
  <div id="user">
      <nav>
          <router-link to='/inbox'>inbox</router-link>
          <router-link to='/newmessage'> new message</router-link>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'User'
}
</script>

<style>
nav {
    position: fixed;
    left: 0;
    width: 25vw;
    min-width: 200px;
    background-color: #E4E5E7;
    height: 100%;
   

}

nav a {
    margin-top: 10%;
    display: block;
    text-align: center;
    
}
</style>