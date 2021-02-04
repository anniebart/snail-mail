<template>
<div id="app">
 <header>
   <router-link to='/'>
   <div class="logo-block">
     <img src="./assets/SNAIL.svg" alt="minimalist illustration of a snail">
     <h1>snail</h1>
   </div></router-link>
 </header>
  <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Sen';


}
header {
  border-bottom: 2px solid #1B2A39;
  
}

button {
  background-color: white;
  color: #1B2A39;
  border: 2px solid #1B2A39;
  font-family: Sen;
  font-size: 16px;
  padding: 12px 32px;
  transition: 0.3s;
}

button:hover {
  color: white;
  background-color: #1B2A39;
  transform: scale(0.98);
}

.logo-block h1 {
  margin-bottom: 0;
}

.logo-block {
 
  display: flex;
  align-items: center;
  padding: 16px;

}
h1 {
  font-weight: 700;
}

a {
  text-decoration: none;
   color: #1B2A39;
}

input:focus {
  border: 2px solid #5BCBCA;
}



</style>
