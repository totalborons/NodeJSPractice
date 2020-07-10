var express = require('express');
var app = express();
app.route('/').all(function (req, res, next) {
        res.write('ALL\n');
        next();
    }).get(function (req, res, next) {
        res.end("GET CALLED");
    }).put(function (req, res, next) {
        res.end("PUT CALLED");
    }).post(function (req, res, next) {
        res.end("POST CALLED");
    })
    .delete(function (req, res, next) {
        res.end("DELETE CALLED");
    });
app.listen(3000);
console.log("Server started at 3000");
// same thing as passing the path inside the listener here..
// works the same but remember to create app differently and the listen differently