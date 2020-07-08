// this is how to create custom writable streams just like eventEmitter
var Readable = require('stream').Readable;
var util = require('util');

function Counter() {
    Readable.call(this);
    this._max = 1000;
    this._index = 1;
}
util.inherits(Counter, Readable);
Counter.prototype._read = function () {
    var i = this._index++;
    // same thing.. first assigns and then adds one like in java
    if (i > this._max) {
        this.push(null);
        // this ends the streams once it is passed null
        // push is the way you finally call the eventemitter
    } else {
        var str = ' ' + i;
        this.push(str);
        // sends the data off the stream
    }
};
var counter = new Counter();
counter.pipe(process.stdout);