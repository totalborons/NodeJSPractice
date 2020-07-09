// here we do it all by connect
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
https.createServer(credentials, app).listen(3000);
console.log("Started server at 3000");

// here right now we have to type https://localhost:3000 for it to work