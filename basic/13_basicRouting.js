/**
 * Basic Routing
 * 
 * When url is changed, the url is displayed in the console
 */

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(`URL of the page: ${req.url}`);
    /* If the url of the page is localhost:8080/home or just localhost:8080 it will load index.html */
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        let readStreamData = fs.createReadStream(__dirname + '/assets/index.html');
        readStreamData.pipe(res);
    }
    /* If the url of the page is localhost:8080/contact it will load contact.html */
    else if (req.url === '/contact') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        let readStreamData = fs.createReadStream(__dirname + '/assets/contact.html');
        readStreamData.pipe(res);
    }
    /* If the url of the page is localhost:8080/json it will load json data */
    else if (req.url === '/json') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        const myObj = {
            fName: "Amit",
            lName: "Mondal",
            age: 22
        };
        res.end(JSON.stringify(myObj));
    }
    /* If the url of the page is localhost:8080/anything else it will load text which is passed from res.end("xyz") */
    else {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end("**** 404 -  Page Not Found ****");
    }

    /* what if there are multiple pages like this??? we can use npm package express */

});
server.listen(8080);
console.log("started");
// Once started open localhost:8080 on you favourite browser
// To stop the server from listening the port , press 'ctrl c' in the command-prompt