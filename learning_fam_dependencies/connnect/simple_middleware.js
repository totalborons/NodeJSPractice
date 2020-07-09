// this is how to create middlewares here....
var connect = require('connect');
var app = connect();
var util = require('util');

// use is called to register a middleware which is basically a function to handle something manually or add to the original handnling of the connect module...
// the middelware recieves req,res,next.. after you handle all things you need to you call next() function for the connnect framework to continue handling it
// ****************************************************************************************
// app.use(function (req, res, next) {
//     console.log("Do nothing");
//     next();
// }).listen(3000);
// function logit(req, res, next) {
//     util.log(req.method, ",", req.url);
//     next();
// }
function echo(req, res, next) {
    req.pipe(res);
    // curl localhost:3000 -d "Hello world"
    // sends back hellow world
}
// we can also do something called mounting which is send different functions for different path-prefixes...

app.use('/echo', echo).use(function (req, res) {
    res.end("Wassssup");
}).listen(3000);
// here even /echo/xyzzz calls echo...
// this is useful when you are havgin static fileserver
console.log("Server is running at 3000");