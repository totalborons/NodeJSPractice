console.log("Hello World from client JS!!");
// THIS IS REACTJS FILES
// I dont have a way of starting the server here...


// define([
//     './foo',
//     './bar'
// ], function (foo, bar) {
//     // do whatever you need to do here..
//     foo();
//     bar.log();
// });

// this define is used to load this async over the client as cannot block the browser

// THIS IS THE NODE JS CONVERSION TO AMD SYSTEM THING...

var foo = require('./foo');
var bar = require('./bar');
foo();
bar.log();