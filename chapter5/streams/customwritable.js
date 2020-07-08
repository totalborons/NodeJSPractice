// this is custom writable scheme here
// same as readable one..
var Writable = require('stream').Writable;
var inherits = require('util').inherits;

function Logger() {
    Writable.call(this);
}
inherits(Logger, Writable);

Logger.prototype._write = function (chunk) {
    console.log(chunk.toString());
    // made custom _write
};
var logger = new Logger();
var readStream = require('fs').createReadStream('./message.txt');
readStream.pipe(logger);