<template>
  <div id="user">
      <nav>
          <router-link to='/inbox'>inbox</router-link>
          <router-link to='/newmessage'> <div class="new"><img src="../assets/add-icon.svg">new message</div></router-link>
          <router-link to='/archivedinbox'> archived</router-link>
      </nav>
      <main>
         
          <div class="content-box">
              you have a few unread messages
          </div>
      </main>
  </div>
</template>

<script>

export default {
    name: 'User'
}
</script>

<style>
nav {
    position: absolute;
    left: 0;
    width: 25vw;
    min-width: 200px;
    background-color: #23282E;
    height: 100%;
    
   

}
main {
    padding-left: 25vw;
    min-height: 100vh;
    background-color: white;;

}

nav a {
    margin-top: 25%;
    display: block;
    text-align: center;
  color: #F7F7F8;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    align-items: center;
    
}
img {
    height: 24px;
   margin-right: 8px;
}
.new {
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-box {
    padding-top: 10%;
    display: flex;
    justify-content: center;

}
</style>