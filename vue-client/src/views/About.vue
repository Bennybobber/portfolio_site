<template>
  <div id="about">
    <div id="introduction">
      <div id="introContent">
        <h1>Who Am I?</h1>
        <p>I'm Benjamin Sinyard (He/They), a Software Engineer who's always been interested in electronics.
            it simply started off with taking apart electronics as a child to "investigate" them,
            and then over time it developed into me wanting to understand how they worked... and then
            boom I began to learn to program at around the age of 11.
        </p>
      </div>
    </div>
    <h2> Languages </h2>
    <p> I have knowledge in a range of programming languages, some more than others and I am always interested
      in diversifying my knowledge in new languages. </p>
    <div>
    <div id="languagesTable">
      <table class="table table-hover table-dark table-striped" >
        <thead class="thread-dark">
          <tr>
            <th scope="col"> Name </th>
            <th scope="col"> Experience </th>
            <th scope="col"> Enjoyment Rating </th>
            <th scope="col"> Details </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rowData" :key="row.languageName">
            <th scope="row"> {{ row.languageName }} </th>
            <td> {{ row.experience }} </td>
            <td> {{ row.rating }} </td>
            <td> {{ row.addtional }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
      languageName: '',
      experience: '',
      rating: '',
      addtional: '',
      rowData: []
    }
  },
  created () {
    axios({
      method: 'get',
      url: 'http://localhost:9000/languages'
    })
      .then((response) => {
        this.populateExperience(response.data.languages)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    populateExperience: function (languages) {
      // populates the experience table
      for (const key in languages) {
        var row = {
          languageName: languages[key].name,
          experience: languages[key].experience,
          rating: languages[key].rating,
          addtional: languages[key].details
        }
        this.rowData.push(row)

        this.languageName = ''
        this.experience = ''
        this.rating = ''
        this.addtional = ''
      }
      for (const key in this.rowData) {
        console.log(this.rowData[key].languageName)
      }
    }
  }
}
</script>
<style>
#about{
  text-align: center;
}
#introduction{
  background-color:#e9ecef;
  width: 100%;
  padding: 5%;
}
#introContent{
  color: black;
  text-align: left;
  width: 75%;
  margin: 0 auto;
}
#languagesTable{
  width: 75%;
  margin: 0 auto;
}

</style>
