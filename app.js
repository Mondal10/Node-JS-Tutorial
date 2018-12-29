/** 
 * console in node js :::::
 */

// console.log("Hey there, I'm learning Node JS !!!");

/**
 * Global Objects :::::
 * __dirname : gives directory name
 * __filename : gives file name
 * setTimeout
 * setInterval
 * There are many others you can try them https://nodejs.org/api/globals.html
 */

// console.log(`Directory Name: ${__dirname} 
// File Name: ${__filename}`);

// let time = 0;

// setTimeout(() => {
//     console.log(`Half time ::: 5 seconds have passed`);
// },5000);

// let timer = setInterval(()=>{
//     time += 1;
//     console.log(`${time} second have passed`); 
//     if(time === 10){
//         console.log(`Time is up`);
//         clearInterval(timer);
//     }
// },1000);

/**
 * Function expression :::::
 * 
 * make function expression
 * pass function as parameter
 */

//  const greet = (funct) => {
//     console.log(`Hello folks!!!`);
//     funct()
//  }

//  const adios = () => {
//      console.log(`Bye Folks!!!`);
//  }

//  greet(adios);

/**
 * Module and Require :::::
 * refer {myName.js}
 * export module(variable,function,class,etc) from differet file
 * import them using 'require'
 */

// const nameArr = require('./myName');
// nameArr(["Amit", ".R.", "Mondal"]);


/**
 * Ways to Export Modules :::::
 * 
 * refer {calculation.js}
 */

// const operation = require('./calculation');
// console.log(operation.add(2,5));
// console.log(operation.sub(2,5));
// console.log(operation.pow(2,5));
// console.log(operation.mul(2,5));
// console.log(operation.div(2,5));

/**
 * Read & Write files using 'fs'
 * 
 */

// const fs = require('fs');

/* synchronous file reading & writing (blocking code) */
// let readData = fs.readFileSync('textfile.txt','utf8');
// console.log(readData);
// fs.writeFileSync('hello.txt','hello');
// console.log("this line gets executed after file gets loaded, because we used sync");

/* asynchronous file reading & writing (doesn't block code the code and let rest of the code execute) */
// let readDataA = fs.readFile('textfile.txt', 'utf8', (err,data)=>{
//     console.log(data);
//     fs.writeFile('hello.txt','hey there i wrote this file!!!',()=>{});
// });

// console.log("this line gets executed, since file is not loaded yet");

/**
 * Creating & Removing Directories 
 * 
 */

 /* To unlink(Remove files) */
// fs.unlink('hello.txt',() => {} );

/* To Create a Directory sync and async*/
// fs.mkdirSync('Amit');
// fs.mkdir('Amit',() => {
//     fs.writeFile('./Amit/Hello.txt', 'New file created within Amit directory',() => {});
// });
/**
 *  To Remove a Directory sync and async 
 * Note: Already removed directory cannot be removed
 * Also cannot remove a directory if there are some existing contents within, we need to first unlink all of them
 */

// fs.rmdirSync('Amit');
// fs.unlink('./Amit/Hello.txt',() => {
//     fs.rmdir('Amit', () => {});  
// })

/**
 * Creating http server
 */

// const http = require('http');
// const server = http.createServer((req,res) => {
//     console.log(`URL of the page: ${req.url}`);
//     /* 200 is status code, content-type can be : JSON,HTML,text, etc */
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end("Responded to the request"); /* Displayed on screen */
// });
// server.listen(8080);
// /* setting localhost:8080 as a port where request will be responded or in simple words server will be lsitening to the port 8080*/
// console.log("started");

/**
 * Reading and Writing Stream Data in chunks
 */

// const fs = require('fs');

// let readStreamData = fs.createReadStream(__dirname + '/sample.txt','utf8');
// /* If we don't use utf8 it will return hex codes */
// let writeStreamData = fs.createWriteStream(__dirname + '/sampleWrite.txt');

// readStreamData.on('data', (chunk) => {
//     console.log('new chunk recieved:::::::::::::');
//     // console.log(chunk);
//     writeStreamData.write(chunk);
// });

/**
 * Using pipes
 */

// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res) => {
//     console.log(`URL of the page: ${req.url}`);
//     /* 200 is status code, content-type can be : JSON,HTML,text, etc */
//     let readStreamData = fs.createReadStream(__dirname + '/sample.txt','utf8');
//     /* If we don't use utf8 it will return hex codes */
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     readStreamData.pipe(res);
// });
// server.listen(8080);
// /* setting localhost:8080 as a port where request will be responded or in simple words server will be lsitening to the port 8080*/
// console.log("started");

/**
 * Passing HTML pages
 */

// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res) => {
//     console.log(`URL of the page: ${req.url}`);
//     /* 200 is status code, content-type can be : JSON,HTML,text, etc */
    
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     let readStreamData = fs.createReadStream(__dirname + '/index.html');
//     readStreamData.pipe(res);
// });
// server.listen(8080);
// /* setting localhost:8080 as a port where request will be responded or in simple words server will be lsitening to the port 8080*/
// console.log("started");

/**
 * Passing JSON 
 */

// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res) => {
// //     console.log(`URL of the page: ${req.url}`);

//     /* 200 is status code, content-type can be : JSON,HTML,text, etc */
//     res.writeHead(200, {'Content-Type' : 'application/json'});
//     const myObj = {
//         fName: "Amit",
//         lName: "Mondal",
//         age: 22
//     };
//     /* res.end(myObj); won't return the object as the parameter passed in end() must be a string or a buffer */
//     res.end(JSON.stringify(myObj));
// });
// server.listen(8080);
// /* setting localhost:8080 as a port where request will be responded or in simple words server will be lsitening to the port 8080*/
// console.log("started");

/**
 * Basic Routing
 */

// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res) => {
//     console.log(`URL of the page: ${req.url}`);
//     /* If the url of the page is localhost:8080/home or just localhost:8080 it will load index.html */
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         let readStreamData = fs.createReadStream(__dirname + '/index.html');
//         readStreamData.pipe(res);
//     }
//     /* If the url of the page is localhost:8080/contact it will load contact.html */
//     else if(req.url === '/contact'){
//         res.writeHead(200, {'Content-Type' : 'text/html'});
//         let readStreamData = fs.createReadStream(__dirname + '/contact.html');
//         readStreamData.pipe(res);
//     }
//     /* If the url of the page is localhost:8080/json it will load json data */
//     else if(req.url === '/json'){
//         res.writeHead(200, {'Content-Type' : 'application/json'});
//         const myObj = {
//             fName: "Amit",
//             lName: "Mondal",
//             age: 22
//         };
//         res.end(JSON.stringify(myObj));
//     }
//     /* If the url of the page is localhost:8080/anything else it will load text which is passed from res.end("xyz") */
//     else {
//         res.writeHead(200, {'Content-Type' : 'text/plain'});
//         res.end("**** 404 -  Page Not Found ****");
//     }

/* what if there are multiple pages like this??? we can use npm package express */

// });
// server.listen(8080);
// console.log("started");

