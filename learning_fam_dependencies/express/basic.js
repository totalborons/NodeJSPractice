// express is basically amped up connect class.. made by same people

var express = require('express');
var http = require('http');
var app = express().use(function (req, res) {
    res.end("Entered Express");
});
http.createServer(app).listen(3000);
// also has direct listen function in express like connect
console.log("Server started at 3000");