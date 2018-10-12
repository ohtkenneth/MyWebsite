require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { headers, method, url } = req;
  console.log(method, url);
  if (method === 'GET' && url === '/') {
    fs.readFile(path.resolve(__dirname, '../dist', 'index.html'), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end();
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (method === 'GET' && url === '/styles.css') {
    fs.readFile(path.resolve(__dirname, 'client', 'dist', 'styles.css'), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end();
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (method === 'GET' && url === '/bundle.js') {
    fs.readFile(path.resolve(__dirname, 'client', 'dist', 'bundle.js'), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end();
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    })
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log('Server listening on ', PORT);
});