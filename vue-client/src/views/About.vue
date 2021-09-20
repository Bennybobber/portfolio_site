<template>
  <div id="about">
    <div id="introduction">
      <div id="introContent">
        <div id="introParagraph">
        <h1>Who Am I?</h1>
        <p>I'm Benjamin Sinyard (He/They), a Software Engineer who's always been interested in electronics.
            it simply started off with taking apart electronics as a child to "investigate" them,
            and then over time it developed into me wanting to understand how they worked... and then
            boom I began to learn to program at around the age of 11.
        </p>
        </div>
        <img
          :src='profilePic'
          id="profilePic"
          title="Profile Image Of Benjamin Sinyard"
          alt="Round picture of Ben from the neck up, with a small multi-coloured border"
        >
      </div>
    </div>
    <div id="tableBlock">
    <h1> Languages </h1>
    <p> I have knowledge in a range of programming languages, some more than others and I am always interested
      in diversifying my knowledge in new languages. Below is a table that summerises languages that I have had some experience with either through
      projects at home, or education. </p>
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
      <div id="education">
        <h1> Education </h1>
        <h2> All Saints Catholic Highschool (2010-2015)</h2>
        <p> 8 A* - C grades at GCSE including mathematics, english language, electornics and computer science. Please feel free to inquire for more details </p>
        <h2> All Saints Catholic Sixth Form (2015-2017)</h2>
        <table class="table table-hover table table-dark table-sm table-striped" >
          <thead class="thread-dark">
            <tr>
              <th scope="col"> Qualification Name </th>
              <th scope="col"> Grade </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"> Computer Science </th>
              <td> C </td>
            </tr>
            <tr>
              <th scope="row"> Electronics: Systems and Control </th>
              <td> C </td>
            </tr>
            <tr>
              <th scope="row">AS Business Studies </th>
              <td> C </td>
            </tr>
          </tbody>
      </table>
      <h2> Sheffield Hallam University 2017-2022 </h2>
      <p> BSC Honors Software Engineering, currently in final year and on course to pass with a 1st </p>
      </div>
      <div id="experience">
        <h1> Experience </h1>
        <h2> Egress Technologies 2020-2021 </h2>
        <p> I secured a placement year with Egress technologies working on their Workspace platform. This was an excellent experience as it gave me
          working experience working as part of an agile team. I got to learn in deph about: </p>
          <ul>
            <li>Python (Flask Framework with Jinja templates) </li>
            <li>Agile Working (Sprints/Kanban) </li>
            <li>Sprint demoing </li>
            <li>Vue.js </li>
            <li>Docker </li>
            <li>Nginx </li>
            <li>CSS/HTML </li>
          </ul>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import beb from '@/assets/beb.jpg'
// @ is an alias to /src
export default {
  name: 'About',
  components: {
  },
  data () {
    return {
      name: 'Ben',
      profilePic: beb,
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
  min-height: 100vh;
  margin:0 auto;
  background-size:100% 100%;
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
#profilePic{
  height: 15%;
  width: 15%;
  display: inline;
  border-style: solid;
}

#tableBlock{
  padding: 2%;
  width: 75%;
  margin: 0 auto;

}
#introParagraph{
  display:inline-block;
  width: 50%;
  padding-right: 5%;
  text-align: center;
}
#education table{
  width: 50%;
  margin:0 auto;
}
h1  {
    font-weight: bold;
}
h2 {
  padding: 2%;
  text-decoration: underline;
}
#experience ul{
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
@media screen and (max-width: 600px) {

#introContent{
  width: 100%;
  display: block;
}
#profilePic{
  display:block;
  width: 100%;
}
}

</style>
