<template>
  <div class="home">
    <div class="hero">
      <img class="snail" src="../assets/SNAIL.svg">
      <h1>bringing communication back to a snail’s pace</h1>
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
}

.hero {
  width: 100vw;
  overflow: hidden;
  height: calc(100vh - 118px);
  background-color: #9FBCC1;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
