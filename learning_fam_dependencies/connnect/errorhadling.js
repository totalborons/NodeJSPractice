// connect is especially so better than simple http module as it handles error automatically and if we declare we can handle the function ourselves here.....

var connect = require('connect');

connect().use(function (req, res, next) {
    next(new Error("Some random error"));
    // here we can pass the string instead of error object but it is preferred to pass the Error object here
    // interesting thing is that if we have an error without explicitly passing it, it will still call the error function just after it like a try catch is already there surrounding it internally in connect

}).use(function (err, req, res, next) {
    // this function is only called if an error occured in any of the middlewares present before it and not after it,..
    // if no error was called then this will never be called
    res.writeHead(500);
    // is this status code????
    // internal server error code is 500

    res.end("Error has occured" + err.message);
}).use(function (req, res) {
    res.end("It worked without an error");
}).listen(3000);
console.log("Started at 3000");

// seen that both works with or without error...