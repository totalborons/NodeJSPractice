var EventEmitter = require('events').EventEmitter;
var breakers = require('break');
var emitter = new EventEmitter();

emitter.on('foo', function a() {});
emitter.on('foo', function b() {});
// this calls for all the listeners present inside the emitters for the event 'foo'
// this helps in debuggin more than in actual applications
console.log(emitter.listeners('foo'));
// returns an array of listeners
breakers();

var newEmitter = new EventEmitter();
newEmitter.on('removeListener', function (eventName, listenerFunction) {
    console.log(eventName, 'listener removed ', listenerFunction.name);
});
newEmitter.on('newListener', function (eventName, listenerFunction) {
    console.log(eventName, " listener added ", listenerFunction);
});
// wheneevr a new listener is added these two will be called by default here...
// also same for removal
// also both of these are used for debugging purposes only
function a() {}

function b() {}
newEmitter.on('foo', a);
newEmitter.on('foo', b);

newEmitter.removeListener('foo', a);
newEmitter.removeListener('foo', b);

breakers();
// now another thing here is that the emitters can have memory leaks if we subscirbe a lot and dont unsubscribe later on here...
// all of them will still function but will a warning message in console here...

var EmitterNew = new EventEmitter();
var listenerscalled = 0;

// to make multiple subsciptions here..
function someCallback() {
    EmitterNew.on('foo', function () {
        listenerscalled++;
    });
}
// to set higher threshold
// EmitterNew.setMaxListeners(30);
// for unlimited subscribers we set it to 0

for (var i = 1; i <= 20; i++) {
    someCallback();
}

EmitterNew.emit('foo');

// if the event doesn't exist with the callback it throws error and the rest of the stuff doesn't get executed
console.log(listenerscalled, ":is the no of listeners called");
breakers();