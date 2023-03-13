const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (error, data) => {
   console.log(data);
});