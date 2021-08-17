<template>
  <div class="about">
    <h1>Who Am I?</h1>
    <p>I'm Benjamin Sinyard (He/They), a Software Engineer who's always been interested in electronics.
      it simply started off with taking apart electronics as a child to "investigate" them,
      and then over time it developed into me wanting to understand how they worked... and then
      boom I began to learn to program at around the age of 11.
    </p>
    <h2> Languages </h2>
    <p> I have knowledge in a range of programming languages, some more than others and I am always interested
      in diversifying my knowledge in new languages. </p>
    <h2> {{ fetch_status }} </h2>
    <table id="languagesTable">
      <tr>
        <th> Name </th>
        <th> Experience </th>
        <th> Enjoy </th>
      </tr>
       <tr>
      <td>Python</td>
      <td>8 years</td>
      <td>10/10</td>
     </tr>
     <tr>
      <td>C++</td>
      <td>3 years</td>
      <td>7/10</td>
     </tr>
     <tr>
      <td>C#</td>
      <td>3 years</td>
      <td>9/10</td>
     </tr>
     <tr>
      <td>Node.js</td>
      <td>1 years</td>
      <td>3/10</td>
     </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
export default {
  name: 'About',
  components: {
  },
  data () {
    return {
      name: 'Ben',
      overview: "Hello, I'm Ben! I'm a Software Engineer, who loves to do photography in their spare time!",
      fetch_status: 'fetching'
    }
  },
  created () {
    axios({
      method: 'get',
      url: 'http://localhost:9000/'
    })
      .then((response) => {
        this.fetch_status = 'success'
        console.log(response.data)
      })
      .catch((error) => {
        this.fetch_status = 'failed'
      })
  }
}
</script>
<style>
#about{
  text-align: center;
  padding: 5%;
  width: 50%;
}
</style>
