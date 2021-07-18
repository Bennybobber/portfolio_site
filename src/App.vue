<template>
  <div id="nav">
    <Nav :logoURL="logoURL" />
  </div>
  <router-view/>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Logo from '@/assets/my_logo.png'
export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      logoURL: Logo
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Coolvetica_b",Helvetica,sans-serif;
}
body{
  background-color: #ffffff;
  margin:0;
}

</style>
