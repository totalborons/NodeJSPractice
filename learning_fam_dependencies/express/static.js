// express ships with serve-static framework itself
var express = require('express');

express().use(express.static(__dirname + "/web")).listen(3000);
// simple one line to start the web server here
console.log("Started server at 3000");