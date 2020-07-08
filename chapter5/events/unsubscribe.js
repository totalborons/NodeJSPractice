var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// need to make  common callback function here
var callback = function () {
    console.log("handler called");
    // this is how to unsubscribe
    emitter.removeListener('foo', callback);
    // this removes the event foo with callback???
    // no idea which is executed and how...
};

emitter.on('foo', callback);
// on function is for subscribing here..

emitter.emit('foo');
// first time we unsubscribe here..
emitter.emit('foo');
// second time we already aren't there.. so it wouldn't call here


// SOMTIMES WE WANT TO CALL AN EVENT ONLY ONCE NO MATTER HOW MANY TIMES IT GETS CALLED
// console.log("*" * 10);
console.log("******************************");
var newemitter = new EventEmitter();
newemitter.once('foo', function () {
    console.log("Foo was called in once function ");
});
newemitter.emit('foo');
newemitter.emit('foo');
newemitter.emit('foo');
newemitter.emit('foo');