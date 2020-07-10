// how to clear cookies too

var express = require('express');
var cookie_parser = require('cookie-parser');

express().use(cookie_parser()).use('/toggle', function (req, res) {
    // here we have to toggle the cookies
    if (req.cookies.name) {
        res.clearCookie('name'); //this is to clear just one cookie
        // what about all???
        res.end("Cookie was present...now cleared");
    } else {
        res.cookie('name', 'foo');
        res.end("Cookie was not present... now set");
    }
}).listen(3000);

console.log("Server started at 3000");
// working here