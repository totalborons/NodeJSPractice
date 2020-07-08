// this is about inheritance here..
function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function (destination) {
    console.log(this.name, " is walking to ", destination);
};
// this is how classes are used in JS here...


var animal = new Animal('elephant');
animal.walk('Melbourne');


function Bird(name) {
    Animal.call(this, name);
    // only set up this of parent to Bird.. but doesnt still transfers the prototypes of parent to this..
    // any other initialization calls
}
// here we need to set up the parents prototype set up so it points to parent ones...
Bird.prototype.__proto__ = Animal.prototype;
// this is the reason why we dont directlt use object.__proto__ directly but do it via .prototype call as it will fuck up the whole chain call up the parents


// all the prototypes of Birds are here differently present..
Bird.prototype.fly = function (destination) {
    console.log(this.name, " is flying to ", destination);
};


var sparrow = new Bird('sparrow');
sparrow.walk('Bombay');
sparrow.fly('Delhi');


// remember always that prototypes are static so 'this' function is important to set up correctly..

function Foo() {}

var foo = new Foo();
console.log(foo.constructor.name); //Foo
console.log(foo.constructor); //[ Function: Foo]
console.log(foo.constructor === Foo);
// this is used at times to check what the particular object is at runtime 