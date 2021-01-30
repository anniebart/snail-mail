<template>
  <div id="form-box">
          <h1>{{title}}</h1>
            <slot> </slot>
          <button @click='buttonAction'>{{buttonName}}</button>
      </div>
</template>

<script>
export default {
name: 'RegisterForm',
data(){
    return {
     
    }
},
props: {
    title: String,
    buttonName: String,
    buttonAction: Function
},


}
</script>

<style scoped>


</style>