const http = require ('http');

const server = http.createServer((req, res) => {
   console.log('Server request')
});