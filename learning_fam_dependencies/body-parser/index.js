// another very imp dependency as this is needed to parse the JSON in the request present easily without much fuss....
// imp for us to receive data as well in html forms which deposits in sorta JSON form
var express = require('express');
var body_parser = require('body-parser');
express().use(body_parser.json()) //same function done in express now with express.json
    .use(body_parser.urlencoded({
        extended: true
    })) //same thing also done by express.urlencoded({extended:true})
    .use(function (req, res) {
        console.log("Entered here in first");
        if (req.body.foo) res.end("Parsed file and foo value=" + req.body.foo);
        else res.end("Body not parsed here");
    }).use(function (err, req, res, next) {
        console.log("Entered here in error");
        res.end("Invalid Body present here");
    }).listen(3000);
console.log("Server runnning at 3000");
// basically earlier the urlencoded and json two functions of it were present in one
// now we have to call the specific one in the listener sepearately here...
// basically this module is obsolute now as we have both urlencoded and json functions in express inbuilt

// another imp function is that our original JSON parser was susceptible to memory exhaustion by malicious injection but here the JSON file limit is set to 100kb