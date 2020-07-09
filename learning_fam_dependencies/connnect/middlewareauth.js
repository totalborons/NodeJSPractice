// this is how to make authorization compulsory in the first middleware


var connect = require('connect');
var colors = require('colors');

function auth(req, res, next) {
    function send401() {
        res.writeHead(401, {
            'WWW-Authenticate': 'Basic'
        });
        res.end();
    }
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        // to check if even the request for auth was called or not
        send401();
        return;
    }
    // now write code for authentication
    console.log("AuthHead=", authHeader);
    var auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    // this gives as 2 data username:password
    // header is sent as Authorization: Basic sdbjashdbf908292132
    var user = auth[0];
    var pass = auth[1];
    if (user == 'foo' && pass == 'barr') {
        next();
    } else send401();
}



connect().use('/admin', auth).use('/admin', function (req, res) {
    // here even /adim/anything also goes here for resolution
    res.end("Authorized for function");
}).use(function (req, res) {
    res.end("Public area");
}).listen(3000);
console.log("Server is running now");


// this is how it is functionning here...