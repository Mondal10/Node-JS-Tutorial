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
 */

const fs = require('fs');

// synchronous file reading & writing (blocking code)
// let readData = fs.readFileSync('textfile.txt','utf8');
// console.log(readData);
// fs.writeFileSync('hello.txt','hello');
// console.log("this line gets executed after file gets loaded, because we used sync");

// asynchronous file reading & writing (doesn't block code the code and let rest of the code execute)
let readDataA = fs.readFile('textfile.txt', 'utf8', (err,data)=>{
    console.log(data);
    fs.writeFile('hello.txt','hey there i wrote this file!!!');
});

console.log("this line gets executed, since file is not loaded yet");