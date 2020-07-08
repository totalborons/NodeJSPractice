// we have a way of seeing the UNIX system of signal interruption in terminal like cntrl+c
var process = require('process');

setTimeout(function () {
    console.log("5 seconds have passed.. now im exiting");
}, 5000);
console.log("Exiting the system in 5 seconds from now");
process.on('SIGINT', function () {
    console.log("Got the SIGINT.. ignoring you brooo");
    // okay so this is just for cntrl+c it seems and nothing else
});