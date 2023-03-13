const fc = require('fs');

const readStream = fc.createReadStream('./docs/test.txt');
const writeStream = fc.createWriteStream('./docs/new-text.txt');

readStream.on('data', (chunk) => {
   writeStream.write(chunk);
})