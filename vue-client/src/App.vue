<template>
  <div id="page-container">
      <div id="content-wrap">
    <div id="nav">
      <Nav :logoURL="logoURL" />
    </div>

      <router-view/>
    </div>
    <div id="footer">
      <Footer/>
    </div>

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
}
body, html{
  background-color:white;
  margin: 0;
  height: 100%;
}
#content-wrap{
  min-height: 100%;
  height: 100%;
}
#page-container{
  position: relative;
  min-height: 100vh;
}
#footer{
  overflow:hidden;
  background-color:#000000;
  height: 100%;
  width: 100%;
  clear: both;
}

</style>
