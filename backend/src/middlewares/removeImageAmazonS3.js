require('dotenv').config();
const aws = require('aws-sdk');

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY 
});

module.exports = {
  async removeImageAmazon(key) {
    const deleteParam = {
      Bucket: process.env.BUCKET_NAME,
      Key: key
  };  

    return s3.deleteObject(deleteParam, function(err, data) {
      if (err) console.log(err, err.stack);
      else console.log('Deleted image from amazon!');
    });
  }
}
