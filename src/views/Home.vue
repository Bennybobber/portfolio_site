<template>
  <div class="main-content"  v-bind:style="{ backgroundImage: 'url(' + backgroundPic + ')' }">
  <div class="introduction">
      <img
        :src='profilePic'
        class="logo"
        title="Profile Image Of Benjamin Sinyard"
        alt="Round picture of Ben from the neck up, with a small multi-coloured border"
      >
      <h1> {{ overview }} </h1>
      <div class="socials">
        <h2> Social Media Contacts: </h2>
        <a aria-label="Go to Ben's twitter page" href="https://twitter.com/BeebStreem" ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/> BeebStreem </a> |
        <a aria-label="Go to Ben's instagram page" href="https://www.instagram.com/bensinyard/" > <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/> bensinyard </a> |
        <a aria-label="Go to Ben's linkedin profile page" href="https://www.linkedin.com/in/benjamin-sinyard-817017178/" > <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/> Benjamin Sinyard </a>
      </div>
  </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Logo from '@/assets/my_logo.png'
import profilePic from '@/assets/test.png'
import background from '@/assets/background.jpg'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      logoURL: Logo,
      profilePic: profilePic,
      backgroundPic: background,
      name: 'Ben',
      overview: "Hello, I'm Ben! I'm a Software Engineer, who loves to do photography in their spare time!"
    }
  }
}
</script>
<style scoped>
  .main-content{
    min-height: 100vh;
    margin:0 auto;
    object-fit: fill;
    background-size:100% 100%;
    padding-top: 5%;
  }
  .logo{
    padding: 5px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left:auto;
    margin-right:auto;

  }

  .introduction{
    display:flex;
    flex-flow: column;
    padding: 5%;
    background-color: white;
    border-radius: 25px;
    text-align: center;
    font-size: 18px;
    word-wrap: break-word;
    position: relative;
    width: 50%;
    margin: 0 auto;
  }
  .introduction img{
    width: 20%;
  }
  .left{
    border-right: solid;
    word-wrap: break-word;
    text-align: center;
  }
  .socials a{
    font-weight: bold;
    text-decoration: none;
    color: inherit;
  }

  .socials h2{
    padding-top: 5%;
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
  .introduction{
    width: 100%;
    font-size: 14px;
    margin-right: 20px;
    padding: 0px;
    border-radius: 0px;
  }
  .introduction img{
    width: 50%;
  }
   .main-content{
     padding:0;
     background-size: 0 0;
   }
}
</style>>
