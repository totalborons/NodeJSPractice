var eventEmitter = require('events').EventEmitter;
var breaker = require('break');

var emitter = new eventEmitter();

// Subscribe
emitter.on('foo', function (arg1, arg2) {
    console.log("emitter raises foo arguments ", arg1, arg2);
});

// Emitting
emitter.emit('foo', {
    a: 123
}, {
    b: 456
});
breaker();