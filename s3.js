require('dotenv').config();
const path = require('path');
const s3 = require('s3');

const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const paramsBundle = {
  localFile: path.resolve(__dirname, 'dist/bundle.js'),
  s3Params: {
    Bucket: process.env.MY_BUCKET,
    Key: "bundle.js",
  },
};

const paramsStyles = {
  localFile: path.resolve(__dirname, 'dist/styles.css'),
  s3Params: {
    Bucket: process.env.MY_BUCKET,
    Key: "styles.css",
  },
};

const uploaderBundle = client.uploadFile(paramsBundle);
uploaderBundle.on('error', (err) => {
  console.error('Unable to upload:', err.stack);
});
uploaderBundle.on('progress', () => {
  console.log("Progress", uploaderBundle.progressMd5Amount,
  uploaderBundle.progressAmount, uploaderBundle.progressTotal);
});
uploaderBundle.on('end', function() {
  console.log("Done uploading bundle.js");
});

const uploaderStyles = client.uploadFile(paramsStyles);
uploaderStyles.on('error', (err) => {
  console.error('Unable to upload:', err.stack);
});
uploaderStyles.on('progress', () => {
  console.log("Progress", uploaderStyles.progressMd5Amount,
  uploaderStyles.progressAmount, uploaderStyles.progressTotal);
});
uploaderStyles.on('end', function() {
  console.log("Done uploading styles.css");
});
