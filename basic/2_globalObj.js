/**
 * Global Objects :::::
 * __dirname : gives directory name
 * __filename : gives file name
 * setTimeout
 * setInterval
 * There are many others you can try them https://nodejs.org/api/globals.html
 */

/* NOTE: try to run the code line by line or by parts for better understanding, comment the part which you don't want to run. */

/* Part one */
console.log(`Directory Name: ${__dirname} 
File Name: ${__filename}`);

/* Part two */
let time = 0;

setTimeout(() => {
    console.log(`Half time ::: 5 seconds have passed`);
}, 5000);

let timer = setInterval(() => {
    time += 1;
    console.log(`${time} second have passed`);
    if (time === 10) {
        console.log(`Time is up`);
        clearInterval(timer);
    }
}, 1000);