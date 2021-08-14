<template>
     <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <p>{{ mail }}</p>
      </div>
      <div id="contacts--social">
        <div><a :href="twitter" ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/> Twitter </a> </div>
        <div><a :href="instagram" > <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/> Instagram </a></div>
        <div><a :href="linkedin" > <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/> LinkedIn </a></div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
   </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    logoURL: String
  },
  data () {
    return {
      mail: 'Contact Email: benjaminsinyard@gmail.com',
      mention: '2021 | Benjamin Sinyard',
      twitter: 'https://twitter.com/BeebStreem',
      instagram: 'https://www.instagram.com/bensinyard/',
      linkedin: 'https://www.linkedin.com/in/benjamin-sinyard-817017178/'
    }
  }
}
</script>

<style scoped>
#container{
  color:white;
  background-color:#710117;
  align-items:center;
  padding-bottom: 1%;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social a{
    text-decoration: none;
    color: inherit;
}

#mentions p {
  font-size:0.5em;
}

@media screen and (max-width: 600px) {
  #contacts{
    display:inline-block;
  }
  #contacts--social{
    padding: 1%;
    width: 100%;
  }
  #contacts--social a{
   padding: 10px;
   margin:0 auto;
  }
  #contacts--contact{
  text-align:center;
  }
}
</style>
