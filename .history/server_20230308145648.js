const express = require('express');

const app = express();

const PORT = 3000;

app.listen(3000, (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
   res.send('<h1>Hello world!</h1>');
});