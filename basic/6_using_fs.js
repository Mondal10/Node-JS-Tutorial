/**
 * Read & Write files using 'fs'
 * 
 * Run the synchronous and asynchronous code separately by commenting the part you don't want to execute
 */

/* get module fs from node using require() */
const fs = require('fs');

/* synchronous file reading & writing (blocking code) */
let readData = fs.readFileSync('./assets/textfile.txt', 'utf8');
// If we don't use utf8 it will return the buffer data which are basically hex codes
console.log(readData);
fs.writeFileSync('./assets/helloSync.txt', 'hello sync');
//writes new file "hello.txt" in the assets folder, you can also overwrite the file by providing the same name of the file
console.log("this line gets executed after file gets loaded, because we used sync");

/* asynchronous file reading & writing (doesn't block code the code and let rest of the code execute) */
let readDataA = fs.readFile('./assets/textfile.txt', 'utf8', (err, data) => {
    console.log(data);
    fs.writeFile('./assets/helloAsync.txt', 'hey there i wrote this file!!! async', () => {});
});

console.log("this line gets executed, since file is not loaded yet");