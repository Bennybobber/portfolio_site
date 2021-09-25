
const express = require('express');
const cookieParser = require('cookie-parser');
const serverLog = require('easy-log')('app:server')
const cors = require('cors')
var Flickr = require('flickr-sdk');

const fs = require("fs");

const db = require('./database');
const { hasUncaughtExceptionCaptureCallback } = require('process');



const app = express();

app.use((req, res, next) => {
  serverLog(`${req.method} - ${req.originalUrl}` )
  next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.get('/', (req, res, next) => {
  res.send('hello world')
})

app.post('/', (req, res, next) => {
   const { name, experience, rating } = req.body;
   if (name && experience && rating) {
    try{
      db.promise().query(`INSERT INTO LANGUAGES VALUES ('${name}', '${experience}', '${rating}')`)
      res.send('Successfully added to database: ' + name + ' ' + experience + ' ' + rating)
    }catch(err){
     console.log(err)
    }
   }
  
})

app.get('/languages', (req, res, next) => {
     fs.readFile('experience.json', (err, data) => {
      if (err) throw err;
      // let student = JSON.parse(data);
      return res.send(JSON.parse(data))
  });

})

app.get('/photos', (req, resp, next) => {
  var flickr = new Flickr(process.env.FLICKR_API_KEY);
  var json = {}
  flickr.photosets.getPhotos({
    photoset_id: 72157719934206460,
    user_id: '193996018@N03'
  }).then(function (res) {
    console.log('yay!');
    json = res.body;
    json = json.photoset.photo
    resp.send(json)
  }).catch(function (err) {
    console.error('bonk', err);
    resp.send(err)
  });
  //console.log(resp.data)
  return
})

module.exports = app;
