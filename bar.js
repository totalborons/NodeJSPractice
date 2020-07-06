var foo = require('./fooslee');
console.log("Module from another module called", foo.something);
foo = require('./newEveryTime');
foo = foo();
console.log("Module from another module called but with new objects", foo.something);