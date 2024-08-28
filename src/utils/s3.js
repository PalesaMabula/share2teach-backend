const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const uploadFile = (file) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: file.name,
    Body: file.data
  };

  return s3.upload(params).promise();
};

module.exports = { uploadFile };
