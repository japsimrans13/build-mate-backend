const fs = require("fs");
const AWS = require("aws-sdk");
// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.uploadFileS3 = async ({ fileName, buffer, fileType }) => {
  const s3 = new AWS.S3();

  const params = {
    Bucket: "build-mate",
    Key: fileName,
    Body: buffer,
    ACL: "public-read",
    ContentType: fileType,
  };
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};
