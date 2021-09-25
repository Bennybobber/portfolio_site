<template>
    <div id="contact">
        <p> This product uses the Flickr API but is not endorsed or certified by SmugMug, Inc..... </p>
        <img src="https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg">
    </div>
        
</template>
<script>
import axios from 'axios'
export default {
  name: 'Contact',
  components: {
  },
  created () {
    axios({
      method: 'get',
      url: 'http://localhost:9000/photos'
    })
      .then((response) => {
        this.populateExperience(response.data.languages)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data () {
    return {
      name: 'Ben',
      serverId: '',
      id: '',
      secret: '',
      imgData: []
    }
  },
  methods: {
    
  }
}
</script>
