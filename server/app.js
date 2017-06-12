const multer = require('multer');
// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const bodyParser = require('body-parser')

aws.config.loadFromPath(process.cwd() + '/server/config/aws.s3.config.json');  

const app = express();
let s3 = new aws.S3();

app.use(bodyParser.json());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client


var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'dylan-images',
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});


app.post('/files', upload.array('file',1), (req, res) => {
  console.log("UPLOADED WOOHOO");
});

app.post('/retrieveImage', (req, res) => {
    let urlParams = {Bucket: 'dylan-images', Key: req.body.imageName};
    s3.getSignedUrl('getObject', urlParams, function(err, url){
        console.log('the url of the image is', url);
        const respObj = {
            "URL": url
        } 
        res.send(respObj)
    });
})


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;