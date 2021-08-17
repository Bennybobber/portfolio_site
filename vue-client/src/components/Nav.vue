<template>
    <div class = "topNav" id="myTopNav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact Me</router-link>
          <router-link to="/photography">Photography Portfolio</router-link>
          <router-link to="/projects">Project Portfolio</router-link>
          <router-link to="" class="icon">
            <font-awesome-icon v-on:click="burger"  icon="bars" />
          </router-link>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    logoURL: String
  },
  methods: {
    burger: function (event) {
      var x = document.getElementById('myTopNav')
      if (x.className === 'topNav') {
        x.className += ' responsive'
      } else {
        x.className = 'topNav'
      }
    }
  }
}
</script>

<style scoped>
.topNav {
  overflow: hidden;
  background-color: #710117;
}

.topNav a {
  float: left;
  display:block;
  color: white;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
}

.topNav a:hover{
  background-color:#fadadd;
  color:black;
}

.topNav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topNav a{display:none;}
  .topNav a.router-link-exact-active {
    display:block;
  }
  .topNav .icon {
    float: right;
    display: block;
    color:white;
  }
}

@media screen and (max-width: 600px) {
  .topNav.responsive {position: relative;}
  .topNav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topNav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

.topNav a.router-link-exact-active {
  color: #789ee9;
  font-weight: bold;
}
.topNav a.router-link-exact-active:hover {
  color: black;
}

</style>
