const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passport')(passport);
const path = require('path')
const cors = require('cors');
const aws = require('aws-sdk');
const fs = require('file-system');

const users = require('./routes/api/users');
const forms = require('./routes/api/forms');

const app = express();

//models
let Course = require('./models/Course');


//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors middleware
app.use(cors());

//Mongoose Connect
const mongoose = require('mongoose');

const db = require('./config/key').mongoURI;

mongoose
   .connect(db, { useNewUrlParser: true })
   .then(console.log('MongoDbConnected'))
   .catch(err => console.log(err));

//aws connection


//Passport middleware
app.use(passport.initialize()); 
app.use(passport.session());


app.use('/api/users', users);
app.use('/api/forms', forms);

app.get('/fetch/:id', (req, res) => {
   aws.config.update({
      accessKeyId: 'AKIAIOSYUYUKGS57IHSQ',
      secretAccessKey: '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',
      region: 'us-east-1'
   })
   const s3 = new aws.S3();
   // s3.getObject({ Bucket: 'iosd-classroom', Key: 'course1/video1.webm' }, (err, data) => {
   //    if (err) {
   //       console.log(err);
   //    }
   //    else {
   //       let objectData = data.Body.toString('utf-8'); // Use the encoding necessary
   //       console.log(objectData);
   //    }
   // })
   // let url = s3.getSignedUrl('getObject', { Bucket: 'iosd-classroom', Key: 'course1/xyz.mp4' })
   // console.log(url);
   // res.send(url)
   const privateKey = fs.readFileSync('./pk-APKAISQ7JU3B7VPN6WPA.pem', 'utf8')

   const cloudFront = new aws.CloudFront.Signer('APKAISQ7JU3B7VPN6WPA', privateKey);

   cloudFront.getSignedUrl({
      url: `https://d1l4hpg3xm5tsk.cloudfront.net/course1/${req.params.id}`,
      expires: Math.floor((new Date()).getTime() / 1000) + (60 * 60 * 1) // Current Time in UTC + time in seconds, (60 * 60 * 1 = 1 hour)
   }, (err, url) => {
      if (err) throw err;
      console.log(url);
      res.send(url);
   });
})

app.get('/set-course', (req, res) => {
   let course = new Course({
      lesson_name: "Songs-Lib",
      lesson_flow: [{
         title: 'Song 1',
         curr_url: 'video1.webm',
         watched_by: [],
         next_url: 'video2.webm'
      }, {
         title: 'Song 2',
         curr_url: 'video2.webm',
         watched_by: [],
         next_url: 'video3.webm'
      }, {
         title: 'Song 3',
         curr_url: 'video3.webm',
         watched_by: [],
         next_url: 'video4.webm'
      }, {
         title: 'Song 4',
         curr_url: 'video4.webm',
         watched_by: [],
         next_url: 'video5.webm'
      }]
   })
   course.save((err) => {
      if (err) {
         console.log(err)
      } else {
         console.log('cousre saved ! ')
      }
   })
})
app.get('/get-course', (req, res) => {
   Course.find({ lesson_name: 'Songs-Lib' }, (err, data) => {
      if (err) {
         console.log(err)
      }
      else {
         res.send(data);
      }
   })
})
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running at port: ${port}`))