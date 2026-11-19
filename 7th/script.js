// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Affan khan2</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const app = express()
const port = 3000

//app get or app post or app put or app delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('Hello About us')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact me')
})

app.get('/blog', (req, res) => {
  res.send('Hello Blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})