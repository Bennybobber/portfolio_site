<template>
    <div id="portfolio">
        <div id='gallery'>
          <img v-for="image in imgData" :key="image" :src="'https://live.staticflickr.com/'+image.serverId+'/'+image.id+'_'+image.secret+'.jpg'"> 
        </div>
        <p> This product uses the Flickr API but is not endorsed or certified by SmugMug, Inc..... </p>
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
        this.populatePhotos(response.data)
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
    populatePhotos: function (photoList) {
      for (var index in photoList) {
        var image = {
          id: photoList[index].id,
          serverId: photoList[index].server,
          secret: photoList[index].secret
        }
        this.imgData.push(image)

        this.id = ''
        this.serverId = ''
        this.secret = ''
      }
    }
  }
}
</script>
<style scoped>
#gallery{
  width: 100%;
  padding: 1%;
}
#gallery img{
  width: 25%;
  height: 25%;
  display: inline-block;
  padding: 1%;
}
</style>
