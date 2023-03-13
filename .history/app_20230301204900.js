const http = require ('http');

const server = http.createServer((req, res) => {
   console.log('Server request')
});

server.listen(3000, 'localhost' (error) => {
   error ? console.log(error) : console.log('listening port 3000')
});