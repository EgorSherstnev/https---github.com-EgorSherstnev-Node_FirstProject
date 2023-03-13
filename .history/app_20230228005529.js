const fc = require('fs');
const zlib = require('zlib');

const readStream = fc.createReadStream('./docs/test.txt');
const writeStream = fc.createWriteStream('./docs/new-text.txt');
const compressStream = zlib.createGzip();

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

readStream
   .on('error', handleError)
   .pipe(compressStream);
   .pipe(writeStream)
   .on('error', handleError);