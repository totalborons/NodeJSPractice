// this is an easier and better way of setting up inheritance in object chain...
var inherits = require('util').inherits;

function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function (destination) {
    console.log(this.name, " walking to ", destination);
};

function Bird(name) {
    Animal.call(this, name);
}
inherits(Bird, Animal);
// this function does the whole prototype thing without having to manually alter the .prototype.__proto__ ourself as it is not wihthin the standard practices here..
Bird.prototype.fly = function (destination) {
    console.log(this.name, " flies to ", destination);
};
// sets up the function

// this sets it all up with the util commands
var bird = new Bird('sparrow');
bird.walk("New york modafucker");
bird.fly("Vegas baby");