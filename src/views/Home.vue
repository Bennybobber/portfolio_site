<template>
  <div class="introduction">
      <img
        :src='profilePic'
        class="logo"
        title="Profile Image Of Benjamin Sinyard"
        alt="Round picture of Ben from the neck up, with a small multi-coloured border"
      >
      <h1> Hello, I'm Beb! I'm a Software Engineer, who loves to do photography in their spare time! </h1>
      <div class="socials">
        <h2> Social Media Contacts: </h2>
        <a aria-label="Go to Ben's twitter page" href="https://twitter.com/BeebStreem" ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/> BeebStreem </a> |
        <a aria-label="Go to Ben's instagram page" href="https://www.instagram.com/bensinyard/" > <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/> bensinyard </a> |
        <a aria-label="Go to Ben's linkedin profile page" href="https://www.linkedin.com/in/benjamin-sinyard-817017178/" > <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/> Benjamin Sinyard </a>
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
    height:100%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: lightgray;
    text-align: center;
    margin:0 auto;
    font-size: 18px;
    word-wrap: break-word;
    width: 50%;
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
  }
  .introduction img{
    width: 50%;
  }
}
</style>>
