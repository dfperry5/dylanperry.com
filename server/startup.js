const aws = require('aws-sdk');
const request = require('request');
const fs = require('fs');

aws.config.loadFromPath(process.cwd() + '/server/config/aws.s3.config.json');  

let s3 = new aws.S3();

let params = {Bucket: 'dylan-images'};
s3.listObjects(params, function(err, data){
    let bucketContents = data ? data.Contents : {};
        for (let i = 0; i < bucketContents.length; i++){
        let urlParams = {Bucket: 'dylan-images', Key: bucketContents[i].Key};
            s3.getSignedUrl('getObject',urlParams, function(err, url){
                request(url).pipe(fs.createWriteStream("src/images/" +urlParams.Key));
            });
        }
});