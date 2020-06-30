var foo = 5;
var bar = 2;
// this is how the variables are descirbed in JS.. also unlike python here everything is ending with semicolon
// NUMBERS
// again only one type of mnumbers unlike java and like python thingy...
console.log(foo);
console.log(foo + 1);
console.log(foo / bar);
console.log(foo % bar);
// so basically these are the operations that we do in JS... similiar here...

// BOOLEAN
var truthfully = true;
var falsify = false;
console.log(truthfully);
console.log(!falsify);
// this is the inverse function
console.log(truthfully && falsify);
// this is the and function just like the java version and unlike python where we can just write the word and have no sign
console.log(truthfully || falsify);
// this is the or function just like java and unlike python where we have the word only and no sign

// ARRAYS

var arrays = []; //this is how to init an array
arrays.push(100); // adds to the top of the list.. means at the x+1 index where x is the last index...
console.log(arrays);
arrays.push(200);
console.log(arrays);
arrays.unshift(300); // add to the end... means it adds it to the 0th position... maybe??
console.log(arrays);
console.log(arrays[0]);


// OBJECTS
// objects is init by {} brackets and then add it like thinking about JSON
var object_example = {};
object_example.foo = 123;
object_example.another_variable = "Shikhar";
console.log(object_example);
// another way of writing objects
var object2 = {
    bar: 123,
    another_variable: "Shikkkk"
    // here we do not write = sign by write : sign
};
console.log(object2);
// nested objects in JS

var obb = {
    foo: 123,
    bas: {
        bas1: "String",
        bas2: "Added"
    }
}
console.log(obb);
var obb2 = {
    foo: 123,
    array: [1, 2, 3]
};
console.log(obb2);
// object with array of objects
var superobb = {
    foo: 123,
    array: [{
        arr: "First"
    }, {
        arr: "Second"
    }]
};
console.log(superobb);


// FUNCTIONS
function functionName() {
    // function body
    // optional return
}
// here no need of semicolon like java

function fool() {
    return 123;
}
// cannot name the function and variable as the same name....
// method overloading???? no idea..
console.log(fool());
// here we need to call the fucntion

// we also can immediately execute the function at its time of definition
// mostly done to create new variable scope
(function fool2() {
    console.log("Ran auto run function here....")
})();

// here is a unique thing that {} or loop doesn't define scope of variables but the function can 
var scoping = 123;

if (true) {
    var scoping = 456;
}
console.log(scoping); // prints 456
// console.log(newer);

// so now to create a new local variable we create functions..

var scoping_again = 123;
if (true) {
    (function () {
        var scoping_again = 456;
    })();
}
console.log(scoping_again); //prints here 123

// also no name of the variable as its going to be called only once... no need for it..

// only recommended way of creating variables scopes in JS is said to be inside function.. so no objects ???

// ANONYMOUS FUNCTION AND FUNCTION TO VARIABLES

var foo1 = function addName() {
    console.log("foo1");
};
console.log(foo1);
foo1();
var foo2 = function () {
    console.log("foo2");
};
console.log(foo2);
foo2();

// WHEN THE PROGRAMMING LANGUAGE SUPPORTS FUNCTION TO BE USED AS A VARIABLE IT IS CALLED FIRST CLASS FUNCTIONS

// HIGHER ORDER FUNCTIONS
// it is functions which take functions as arguments

setTimeout(function () {
    console.log("2 seconds or 2000 milliseconds passed from the start of this program")
}, 2000);
console.log("Outside the time constraint to see for aynchronous");
var foo = function () {
    console.log("5000 milliseconds or 5 seconds have passed from the starting of this program");
};
setTimeout(foo, 5000);
console.log("It is asynchronous and hence good and easy");

// CLOSURES
// this is when function have a function
//Basically the scope of variables which is same like in java.,, inner have access to outer but not opposite

function outerFunction(args) {
    var VarInOuterFunction = args;

    function innerFunction() {
        console.log(VarInOuterFunction);
    }
    innerFunction();
}

outerFunction("Shikhar is going to outer function");

// also we can return the function and it will still retain that outervariable function
function outerFunction(args) {
    var VarInOuterFunction = args;

    function innerFunction() {
        console.log(VarInOuterFunction);
    }
    return innerFunction; // do not apply () here as we arent running it but returning the object of the function
}

result = outerFunction("This is returning function with scopes retained");
result();