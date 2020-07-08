// now this is another way of doing inheritance... its so weird getting into so many types of it now
function Animal() {}
Animal.prototype.walk = function (destination) {
    console.log("Walking to ", destination);
}

function Bird() {}
Bird.prototype.fly = function (destination) {
    console.log("Flying to ", destination);
}
// this is another way of how to inherit the functions of Parent from Child
Bird.prototype = Object.create(Animal.prototype);
// this creates one problem that the contructor property of Child is lost here... so to this we do this..

Bird.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Bird,
        enumerable: false,
        writable: true,
        configurable: true
    }
});
// this is exactly what nodejs util.inherts does.,,


var bird = new Bird();
bird.walk("Sydney");

// basically there is only one way to call the prototype function from the functions and constructors but there are many ways of inheriting the function from the Parent to the Child
// one is manually by Child.prototype.__proto__=Parent.prototype
// this is very very manual and create problems in creating hierarchy higher up in it,.
// so next is using utils.inherits
//inherits(Child,Parent) does it all automatically
// last type is present in this file itself... with Child.prototype=Object.create(Parent.prototype).. this is basically the black box of the function util.inherits