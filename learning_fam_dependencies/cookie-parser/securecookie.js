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
            signed: true,
            httpOnly: true
        });
        // httpOnly prevents the browser from reading the cookies and only uses it during communication with the server
        // another security is to make the browser send the cookies only over https by adding
        // {secure: true}
        res.end("Cookied were absent and now added and signed");
    }
}).listen(3000);
console.log("Server started at 3000");
// not working as I can still see the cookie and copy it and all