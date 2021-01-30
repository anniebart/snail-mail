<template>
  <div id="user">
      <nav>
          <router-link to='/inbox'>inbox</router-link>
          <router-link to='/newmessage'> <div class="new"><img src="../assets/add-icon.svg">new message</div></router-link>
          <router-link to='/archivedinbox'> archived</router-link>
      </nav>
      <main>
          <div class="content-box">
              hi
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
    position: fixed;
    left: 0;
    width: 25vw;
    min-width: 200px;
    background-color: #E4E5E7;
    height: 100%;
   

}
main {
    padding-left: 25vw;

}

nav a {
    margin-top: 20%;
    display: block;
    text-align: center;
    color: #1B2A39;
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
    padding: 20px;
}
</style>