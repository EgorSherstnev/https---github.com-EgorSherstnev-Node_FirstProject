const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (error, data) => {

   fs.mkdir('./files', () => {
   
      fs.writeFile('./files/test2.txt', `${data} New text!`, (error) => {
         error ? console.log(error) : null;
      })
      
   });
   
   

});

