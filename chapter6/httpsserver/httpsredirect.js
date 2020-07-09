// here whatever we open whether http or https it get redirected to the https version itself// here we do it all by connect
var connect = require('connect');
var https = require('https');
var fs = require('fs');
var credentials = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};
var app = connect();
app.use(function (req, res) {
    console.log("Present inside the middleware");

    res.end("Connceted to https");
});
https.createServer(credentials, app).listen(443);
// 443 is the default port for https
console.log("Started https server at 443");

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(301, {
        "Location": "https://" + req.headers['host'] + req.url
    });
    res.end();
}).listen(80);
console.log("Started http server as well on 80");



// now we start the http server to redirect to this one

// best part of https is we dont even need to encode the username and password at the client end in order to use it properly