const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (error, data) => {
   
   fs.writeFile('./test2.txt', `${data} New text!`, () => {
      
   })

});