const http = require ('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
   console.log('Server request');
   console.log(req.url, req.method);

   res.setHeader('Content-Type', 'text/html');

   res.write('<head><link rel ="stylesheet" href = "#"></head>')

   const data = JSON.stringify([
      { name: 'Svarli', age: 32},
      { name: 'Ti', age: 2},
   ])

   res.end(data);
});

server.listen(3000, 'localhost', (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
});