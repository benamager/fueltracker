// const jsonServer = require("json-server")
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// console.log("ye")

// server.listen(port);



// setInterval(() => {
//     console.log("serveren kører stadig")
// }, 5000);


// //firebase



// Requiring express in our server
const express = require('express');
const fs = require("fs");
const app = express();


async function getPrices(){
    fs.readFile('./db.json', 'utf8', (err, res) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {
    
            // parse JSON string to JSON object
            const data = JSON.parse(res);
    
            prices = data;
        }
    });
}

setInterval(() => {
    getPrices()
}, 2000);

let prices;

  
// Defining get request at '/' route
app.get('/', function(req, res) {
    console.log("A client called you... | " + req.rawHeaders[req.rawHeaders.indexOf(req.rawHeaders.find(userAgent => userAgent.includes("User-Agent"))) + 1])
    res.json(prices);
});

  
// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
    console.log("Server is running at port 3000");
});