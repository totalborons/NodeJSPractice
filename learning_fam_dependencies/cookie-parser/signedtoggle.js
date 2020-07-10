// this is how to create a signed cookie
var express = require('express');
var cookie_parser = require('cookie-parser');

express().use(cookie_parser("My super secret code")).use(function (req, res) {
    if (req.signedCookies.name) {
        console.log("Cookies signed and present" + req.signedCookies.name);
        res.clearCookie('name');
        res.end("Cookies were signed and present and now removed");
    } else {
        console.log("Cookies were not present or signed");
        res.cookie('name', 'foo', {
            signed: true
        });
        res.end("Cookied were absent and now added and signed");
    }
}).listen(3000);
console.log("Server started at 3000");

// the cookie is saved in the form of HMAC here...basically hash file with the secret code added here...
// ideals of making secret code???
// but this signing is to prevent users from changing their own cookies..
// it doesn't prevent another person copying this cookies and misusing it...