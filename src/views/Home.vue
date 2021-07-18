<template>
  <div class="home">
    <img
      :src='logoURL'
      class="logo"
      title="Image produced by @WitchStix (instagram)"
      alt="Light pink ribbon in the shape of a cross, with the name 'Benjamin Sinyard' across from left to right. Computer inbetween the first and last name"
    >
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/assets/my_logo.png'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      logoURL: Logo
    }
}
};
</script>
<style scoped>
  .logo{
    max-width: 100%;
  }
</style>>