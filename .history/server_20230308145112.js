const express = require('express');

const app = express();

const PORT = 3000;

app.listen(3000, 'localhost', (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
});