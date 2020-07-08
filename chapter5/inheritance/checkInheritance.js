var inherits = require('util').inherits;

function A() {}

function B() {}
inherits(B, A);

function C() {}

// now we have to check for inheritance here
var b = new B();
console.log(b instanceof B); //true
console.log(b instanceof A); //true
console.log(b instanceof C); //false