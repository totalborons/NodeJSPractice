var eventEmitter = require('events').EventEmitter;
var emitter = new eventEmitter();

emitter.on('foo', function (ev) {
    console.log("Subcriber 1:", ev);
    ev.handled = true;
});

emitter.on('foo', function (ev) {
    console.log("Subcriber 2", ev);
    if (ev.handled) {
        console.log("Event already handles in next one");
    }
});

// its always called in order.. first subscirber 1 and then 2. coz of single threaded function of JS

emitter.emit('foo', {
    handled: false
});
// emitts the event foo
// also shares the same info with all the subscribers
// hence remeber that when you share an object here in events do not modify them in your callback functions of emitter.on as it will change on other ones too