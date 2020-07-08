var EventEmitter = require('events').EventEmitter;
var breakers = require('break');
var inherits = require('util').inherits;
breakers();
// this is to make our own default emitter and inherit it like in android
function Foo() {
    EventEmitter.call(this);
}
inherits(Foo, EventEmitter);
// done inheritance here
Foo.prototype.connect = function () {
    this.emit('connected');
};

var foo = new Foo();
foo.on('connected', function () {
    console.log("Connection raised");
});
foo.connect();

// this is very concise and easy way to do all this here...
// even process is a child of EventEmitter