/**
 * Reading and Writing Stream Data in chunks
 */

const fs = require('fs');

let readStreamData = fs.createReadStream(__dirname + '/assets/sample.txt', 'utf8');
/* If we don't use utf8 it will return hex codes, u can try it by removing the utf part and observe the console */
let writeStreamData = fs.createWriteStream(__dirname + '/assets/sampleWrite.txt');

readStreamData.on('data', (chunk) => {
    console.log('new chunk recieved:::::::::::::');
    console.log(chunk);
    writeStreamData.write(chunk);
});