<template>
  <div class="home">

  </div>
  <div class="introduction">
  <div class="left">
    <h1> Hello, I'm Beb! I'm a Software Engineer, who loves to do photography in their spare time! </h1>
    <div class="socials">
    <a href="https://twitter.com/BeebStreem" ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/> BeebStreem </a> |
    <a href="https://www.instagram.com/bensinyard/" > <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/> bensinyard </a> |
    <a href="https://www.linkedin.com/in/benjamin-sinyard-817017178/" > <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/> Benjamin Sinyard </a>
    </div>
  </div>
  <div class="Profileimage">
    <img
      :src='profilePic'
      class="logo"
      title="Image produced by @WitchStix (instagram)"
      alt="Light pink ribbon in the shape of a cross, with the name 'Benjamin Sinyard' across from left to right. Computer inbetween the first and last name"
    >

  </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Logo from '@/assets/my_logo.png'
import profilePic from '@/assets/test.png'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      logoURL: Logo,
      profilePic: profilePic
    }
  }
}
</script>
<style scoped>
  .logo{
    display: inline-block;
    width: 50%;
    vertical-align: middle;
    padding: 5px;

  }

  .introduction{
    width: 100%;
    display: flex;
    background-color: lightgray;
  }
  .left{
    width: 50%;
    flex: left;
    border-right: solid;
    word-wrap: break-word;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;

  }
  .socials a{
    font-weight: bold;
    text-decoration: none;
    color: inherit;
  }
  .logoURL{
    width: 100%;
    flex: right;

  }
</style>>
