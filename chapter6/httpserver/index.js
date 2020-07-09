// we start the server here...

// we use http moduke
var colors = require("colors");
var http = require("http");
var breakers = require('break');
var count = 0;
var server = http.createServer(function (request, response) {
    // headers also here from request
    // called everytime when we type the url accessing the server here...
    console.log("Showing the request headers with curl sent");
    console.log(request.headers);
    console.log("Startinng the servers here..");
    response.statusCode = 200;
    breakers();
    // these two code which is very important for RESTful APIs is for some reason not working here 
    // console.log(request.method());
    // console.log(request.url());
    // 200 means normal and 404 is missing
    // to remove a header we use
    // response.removeHeader('Content-Encoding');
    //   rememeber that headers are set before you start sendinng the data.. it cannot be send midway between the data stream..
    //   for content type we have response.setHeader('Content-Type','text/html');
    //   same way for other key value pairs of headers
    //   to set this header easily we have an external node_module called 'mime'
    response.write("Hello Servers"); //seems to be stream item
    response.end();
    console.log(response.getHeader('Content-Type')); //giving undefinned here for nnow??
    console.log(++count);
});

// here remember each time cliennt requests something this createServer is called
// header are data sent before the actual data to tell the client about how the data is comstructed what data it is and how to utilise it

server.listen(3000);
console.log("Server runninng at localhost 3000");