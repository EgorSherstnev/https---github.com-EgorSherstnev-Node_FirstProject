const fc = require('fs');

const readStream = fc.createReadStream('./docs/test.txt');

readStream.on('data', (chunk) => {
   console.log('-------')
   console.log(chunk.toString());
})