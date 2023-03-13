const fc = require('fs');

const readStream = fc.createReadStream('./docs/test.txt');
const writeStream = fc.createWriteStream()

readStream.on('data', (chunk) => {
   console.log('-------')
   console.log(chunk.toString());
})