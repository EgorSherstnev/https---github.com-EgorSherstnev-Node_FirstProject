const http = require ('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
   console.log('Server request');
   console.log(req.url, req.method);

   res.setHeader('Content-Type', 'text/html');

   res.write('<h1>Hello world!</h1>');
   res.end();
});

server.listen(3000, 'localhost', (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
});