// if you want a custom exit code here we can do this.. else just standard process.exit(1) can work 
var process = require('process');
var colors = require('colors');
process.on('exit', function (code) {
    console.log("exiting with code ".blue + ('' + code).red);
});

process.exit(21);
// this is also used for debugging mostly here.