<template>
  <div id="nav">
    <Nav :logoURL="logoURL" />
  </div>
  <router-view/>
  <div id="footer">
    <Footer/>
  </div>

</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Logo from '@/assets/my_logo.png'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
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
  margin:0;
  padding:0;
}
body{
  background-color:lightgrey;
  margin:0;
  height:100%;
}

</style>
