<template>
  <div class="home">
    <div class="hero">
      <!-- <img class="snail" src="../assets/SNAIL.svg"> -->
      <img class="hero-img" src="../assets/Hero-snail.png">
      <div class="hero-text">
        <h1>bringing communication back to a snail’s pace</h1>
        <router-link to='/signup'><button>sign up</button></router-link>
      </div>
      
    </div>
    <section>

    </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  }
}
</script>
<style scoped>

@keyframes snailPace {
  from {
    transform: translate(0px);
  }
  to {
    transform: translate(calc(100vw - 55px));
}
}

body {
  overflow: hidden;
  width: 100vw;
}
.home {
  display: flex;
  justify-content: center;
}
h1 {
  max-width: 30vw;
  color: #1B2A39;
   font-weight: 700;
  
}
.hero-text {
  margin-right: 10%;
}

.hero {
  width: 100vw;
  overflow: hidden;
  height: calc(100vh - 70px);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-img {
 height: 50vw;
max-height: 80%;
}
.snail {
height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  animation: snailPace 25s infinite linear forwards;
}
button {
  font-size: 32px;
}

@media (max-width: 760px){
  h1 {
    font-size: 24px;
  }
}
</style>
