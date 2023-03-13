const fc = require('fs');

const readStream = fc.createReadStream('./docs/test.txt');
const writeStream = fc.createWriteStream('./docs/new-text.txt');

/*readStream.on('data', (chunk) => {
   writeStream.write('\n---CHUNK START---\n')
   writeStream.write(chunk);
   writeStream.write('\n---CHUNK END---\n')
})*/

const handleError = () => {
   console.log('ERROR')
   readStream.destroy();
   writeStream.end('Finished with error...')
}

readStream.pipe(writeStream);