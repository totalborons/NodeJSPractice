// this is used to have user-specific information stored for creating sessions from user in activities and applications
// this is done as simple cookies can only store strings and we need JSON parsing to store user info in the cookies

var express = require('express');
var cookie_session = require('cookie-session');

express().use(cookie_session({
    keys: ['my super secret signed key']
    // obviously imp to create signed cookie session hence added the key
})).use('/home', function (req, res) {
    console.log("Present inside 1st function");
    if (req.session.views) {
        console.log("At increment");
        req.session.views++;
    } else {
        console.log("At init");
        req.session.views = 1;
    }
    // somehow we set the session but there is no form of JSON seen here... could have done this with signed cookies??
    res.end('Total views for you=' + req.session.views);
}).use('/reset', function (req, res) {
    delete req.session.views;
    // used this for the first time
    // there is nothing like clearCookie here
    res.end("Reset the view count here");
}).listen(3000);

// TO DELETE ENTIRE SESSION USE
// req.session=null
// I guess the same goes for cookies

console.log("Server started at 3000");

// WORKING HERE FOR SESSION
// CAN SEE
// WHAT IS THE CONCEPT OF HTTPONLY???
// COZ IT SHOWS THAT HTTP ONLY SET IS TRUE

// WE STILL NOT USED COOKIE SESSION NOWADAYS AS WE CANT STORE ALL THE SESSION INFORMATION ON THE CLIENT SIDE
// ALSO the browser doesn't allow large size of cookies to be stores which is more than 4093 bytes or 20 cookies per site
// hence we create session info and store it in a database and have cookie identifer stores in sessions to point to the session going on
// this is more reliable and easier and secure