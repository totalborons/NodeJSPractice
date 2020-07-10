// this is to parse the cookies set up in a particular file...

// if do not use this then it will become complex to parse out information from the cookies

var express = require('express');
var cookie_parser = require('cookie-parser');
// no alternate of it in express right now

express().use(cookie_parser()).use(function (req, res) {
    if (req.cookies.name) {
        console.log("Cookie present with name:" + req.cookies.name);
        res.end("Cookie present ");
    } else {
        console.log("No cookie present right now\nWill set one now");
        res.cookie('name', 'foo,', {
            maxAge: 90000
        }); //set the value
        // this is for setting expiry of cookies
        // usually the cookies get deleted after the browser window is closed... to prevent this we provide time in milliseconds to store info in cookies
        res.end("Cookie new set");
    }
}).listen(3000);
console.log("Started server at 3000");