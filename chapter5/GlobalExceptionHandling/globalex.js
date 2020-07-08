var colors = require('colors');
var process = require('process');

// called on like an EventEmitter
process.on('uncaughtException', function (err) {
    console.log(("Caught error:-" + err).red);
    console.log(("Stack:-" + err.stack).yellow);
    process.exit(1);
    // this is done always as most probably the program has failed and there is no point in executing anny code here
});

nonnexistentFunc();
console.log("This will not run");

// this is how we catch all the uncaught exceptions
// if we used try catch then it wouldnt have reached the global point of uncaughtException handlinng in process

// remember that process module is actually an emitter