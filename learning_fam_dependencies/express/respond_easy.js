// there is an easy way to set and get headers from respond and request here in express
var express = require('express');

express().use(function (req, res) {
    // here we use headers properties
    // res.set('Content-Type', 'text/plain'); //for individual we do set instead of setHeader
    // res.set({
    //     'Content-Type': 'text/plain',
    //     'Content-Length': '123',
    //     'ETag': '12345'
    // });
    // for some reason the above code is making the website load slower on the browser

    // this is to set a whole lot of properties together here
    res.end("Hello World and daisy chained"); //same as status code of respond plus we can also daisy chain it
    // same way to get a header we use
    // res.get('content-type') and also this is case insensitive
    // doiung mime if want to is also easy by doing res.type('path/ext/filename') and it will automatically set the type on the basis of content
    // ANOTHER POPULAR ONE IS RES.SEND()
    // res.send(statuscode,body)
    // this is good for setting up body which is non streming and also the status code
    // this can also set the body by its own if it knows the status code of the respond.
    // also by this we can send objects as JSON objects direclty without any conversion to JSON manually
    // res.send({some :'json'})

}).listen(3000);
console.log("Server started at 3000");