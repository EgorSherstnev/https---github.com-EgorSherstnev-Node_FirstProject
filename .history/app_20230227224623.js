const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (error, data) => {

   fs.mkdirSync('./files', () => {});
   
   fs.writeFileSync('./files/test2.txt', `${data} New text!`, (error) => {
      error ? console.log(error) : null;
   });

});

