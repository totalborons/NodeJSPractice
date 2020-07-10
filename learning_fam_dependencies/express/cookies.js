// this is to show how to set up cookies here...
var express = require('express');

express().use(function (req, res, ) {
    if (req.headers['cookie']) console.log("Cookies are :\n" + req.headers['cookie']);
    res.cookie('name', 'foo');
    res.end("Logged");
}).listen(3000);

// this checks the cookies as well as sets /overwrites the old one here..