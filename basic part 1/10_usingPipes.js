/**
 * Using pipes
 * 
 * The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.
 */

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(`URL of the page: ${req.url}`);
    /* 200 is status code, content-type can be : JSON,HTML,text, etc */
    let readStreamData = fs.createReadStream(__dirname + '/assets/sample.txt', 'utf8');
    /* If we don't use utf8 it will return hex codes */
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    readStreamData.pipe(res);
});
server.listen(8080);
/* setting localhost:8080 as a port where request will be responded or in simple words server will be lsitening to the port 8080*/
console.log("started");
// Once started open localhost:8080 on you favourite browser, you can see the data of sample.txt is displayed
// To stop the server from listening the port , press 'ctrl c' in the command-prompt