// is we want to use prefixes with these specific functions
var express = require('express');

var app = express();
app.get('/', function (req, res) {
    res.send("NOTHING IS PASSED");
});
app.get(/^\/[0-9]+$/, function (req, res) {
    // wtf is this statemennt???
    // it is called regex for numbers????
    res.send('THIS IS NUMBER MODA');
});
app.get('/*', function (req, res) {
    res.send("ANYTHING AFTER OF IT IS PASSED");
});
app.listen(3000);
console.log("Server started at 3000");
// works like a charm but what is the number thing