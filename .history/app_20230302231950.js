const http = require ('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
   console.log('Server request');

   res.setHeader('Content-Type', 'text/html');

   if (req.url = '/') {
      fs.readFile('./views/index.html', (err, data) => {
         if (err) {
            
         }
      })
   }

});

server.listen(3000, 'localhost', (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
});