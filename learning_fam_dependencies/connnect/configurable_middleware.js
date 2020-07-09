// how to create a configurable middleware

var connect = require('connect');

function config(message) {
    return function (req, res, next) {
        res.end(message);
    };
}

var message1 = config("Hello brodaa");
var message2 = config("Hello another moda broda");
connect().use('/message1', message1).use('/message2', message2).listen(3000);
console.log("Server is running at 3000");