<template>
    <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact Me</router-link>
          <router-link to="/photography">Photography Portfolio</router-link>
          <router-link to="/projects">Project Portfolio</router-link>
          <font-awesome-icon icon="bars" />
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    logoURL: String
  }
}
</script>

<style scoped>
nav {
  overflow: hidden;
  background-color: #710117;
}

nav a {
  line-height: 3em;
  float: left;
  display:block;
  padding: 5px;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ecd5bb;
}

</style>
