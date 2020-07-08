// this is how to override the parent's function here in child
var inherits = require('util').inherits;

function Base() {
    this.message = "message";
}
Base.prototype.foo = function () {
    return this.message + " Called from foo";
    // works like java
};

function Child() {
    Base.call(this);
}
inherits(Child, Base);

// this is how you override parent behaviour in JS
Child.prototype.foo = function () {
    return Base.prototype.foo.call(this) + " Child Foo too"
    // this is how you call parent functions here...
};

var child = new Child();
console.log(child.foo());