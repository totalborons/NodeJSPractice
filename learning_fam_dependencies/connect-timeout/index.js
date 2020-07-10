// this is used to create connection timeout in case a particular connection is taking too muhc time to process or unresponsive
// this helps in saving servers memory
var express = require('express');
var connect_timeout = require('connect-timeout');

express().use('/api', connect_timeout(5000), function (req, res, next) {
    // this is to simulate what to send if timeout occurs
    // this is done by doing nothing here as no response will be sent now
}, function (err, req, res, next) {
    // do whatever you want to do here
    if (req.timedout) {
        res.statusCode = 500;
        res.end("Request timed out brother");
    } else next(err);
}).use(checkIfTimedOut).listen(3000);

function checkIfTimedOut(req, res, next) {
    if (!req, timedout) next();
    // whenever this is called after the event loop and all the things done it will just not continue to next if timedout was true
}


// use this timeout function judiciously and not at the top level as we want some basic thing to be done at the top

// if we want to do something about the timeout then add an error function just after this

console.log("Server started at 3000");
// WORKED HERE
// HERE ONE PROBLEM IS IF THE SERVER DOES ACTUALLY RESOLVES THE PROCESS AFTER 5 SECOND THEN THE NEXT() FUNCTION WILL BE CALLED AND THE EVENT LOOP WILL BE FUCKED...
// HENCE IT IS NECESSARY TO CHECK IF TIMEDOUT OCCURED BEFORE DOING THE NEXT USE FUNCTION()