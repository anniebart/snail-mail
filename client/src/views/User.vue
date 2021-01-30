<template>
  <div id="user">
      <nav>
          <router-link to='/inbox'>inbox</router-link>
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
    display: flex;
    justify-content: center;

}

a {
    margin-top: 10%;
}
</style>