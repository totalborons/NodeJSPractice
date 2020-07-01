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
  another_variable: "Shikkkk",
  // here we do not write = sign by write : sign
};
console.log(object2);
// nested objects in JS

var obb = {
  foo: 123,
  bas: {
    bas1: "String",
    bas2: "Added",
  },
};
console.log(obb);
var obb2 = {
  foo: 123,
  array: [1, 2, 3],
};
console.log(obb2);
// object with array of objects
var superobb = {
  foo: 123,
  array: [
    {
      arr: "First",
    },
    {
      arr: "Second",
    },
  ],
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
  console.log("Ran auto run function here....");
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

// setTimeout(function () {
//     console.log("2 seconds or 2000 milliseconds passed from the start of this program")
// }, 2000);
// console.log("Outside the time constraint to see for aynchronous");
// var foo = function () {
//     console.log("5000 milliseconds or 5 seconds have passed from the starting of this program");
// };
// setTimeout(foo, 5000);
// console.log("It is asynchronous and hence good and easy");

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

function longRunningOperation(callback) {
  setTimeout(callback, 3000);
}

// function userClicked() {
//     console.log("Started user click");
// longRunningOperation(function () {
//     console.log("Finished the long operation");
// });
// }

// userClicked();

function webRequest(request) {
  console.log("Starting a long task", request.id);
  longRunningOperation(function () {
    console.log("Finished the long operation", request.id);
  });
}

webRequest({
  id: 1,
});
webRequest({
  id: 2,
});

console.time("timer");
setTimeout(function () {
  console.timeEnd("timer");
}, 2000);

console.time("timeit");

// function fibonacci(n) {
//     if (n < 2)
//         return 1;
//     else
//         return fibonacci(n - 2) + fibonacci(n - 1);
// }
// console.time("timerrr");
// setTimeout(function () {
//     console.timeEnd("timerrr");
// }, 1000);

// fibonacci(44);
// console.timeEnd("timeit");
// here the one before and one after both gets delayed in timer.... as the finished operation took a long time and appeared after 7 seconds and so did the the second operation..
// so thread starvation takes a big place here.. both before and after this whole operation.....

var foo = { bas: 123 };
var bar = foo;
bar.bas = 456;
console.log(foo.bas);

// basically these are copying reference variables hence they both are linked together
// only for objects and not others like in java

var foo = { bas: 123 };
var bar = { bas: foo.bar };
// here copied the integer so not reference variable
bar.bas = 456;
console.log(foo.bas);

// DEFAULT VALUES
// for all its undefined
var xyz = undefined;
console.log(xyz);
var foo = { bas: 123 };
console.log(foo.bas);
console.log(foo.bar);

//EXACT EQUALITY

// here == is loose equality while === is precise and accurate equality unlike in java

console.log(1 == "1"); // Will be true
console.log("" == 0); // this will also be true as 0 in boolean is False and so is 0
console.log(1 == "123"); // false

// try to use === wherever possible
// same goes for != and !==
// NULL
// here in JS null is not the default value, default value is undefined
// hence whenever you want a varaible or anything to not point to anything use NULL and never undefined as it is best to leave undefined to the system variables and stuff

// FALSY AND TRUTHY
// these are values which on loose comparison is equal to true or false

if (!false) {
  console.log("Falsify");
}
if (!null) {
  console.log("Falsify");
}

if (!undefined) {
  console.log("Falsify");
}
// other are 0 and ''

// MODULE PATTERN
// there is a module like pattern if we return an object like variable with data+function

function printableMessage() {
  var message = "New World!";
  function setMessage(newMessage) {
    if (!newMessage) throw new Error("cannot set message empty");
    message = newMessage;
  }
  function printMessage() {
    console.log(message);
  }
  function getMessage() {
    return message;
  }
  return {
    setMessage: setMessage,
    printMessage: printMessage,
    getMessage: getMessage,
  };
  //   almost like returning this in java.. but does this works here??
}

var awesome1 = printableMessage();
awesome1.printMessage();

var awesome2 = printableMessage();
awesome2.setMessage("Changed now");
awesome2.printMessage();

awesome1.printMessage();
// awesome1 is unaffected as if it is a new object sorta thingyy/...

// THIS keyword
// depends on context and not always object

var foo = {
  bar: 123,
  bas: function () {
    console.log("This is where this.foo is used for bar ", this.bar);
    // remember that without this the variable preferred first is the global variable
  },
};
console.log(foo.bar);
foo.bas();

function foos() {
  console.log(
    "To check if this is global or not here.. the context here will be global",
    this === global
  );
}
// remember that if run in browser then this will be window and not global
foos();

var zzz = { bar: 123 };
function bas() {
  if (this === global) console.log("called from global");
  else if (this === zzz) console.log("called from zzz");
}

bas();
zzz.bas = bas;
zzz.bas();

// this is talking about global vs new function object creation

function testing() {
  this.testing = 123;
  console.log("Is this global?", this == global);
}
testing();
console.log(global.testing); // will be 123 of global

var newTesting = new testing();
// this wont be global now and is created as  a new object
console.log(newTesting.testing); // will be 123 again but of different object

// PROTOTYPE
// used to create default values of certain object's variables.. if this is defined then it is at the lowest level of check

var prot = {};
prot.__proto__.bar = "Default pro val";

// this declaration is very ancient and never use to set prototypes like this.. only here for knowledge
console.log(prot.bar);

function proto_convention() {}
proto_convention.prototype.bar = "better way for prototype";

var bas = new proto_convention();
// creates object here

console.log(bas.__proto__ === proto_convention.prototype); //true
console.log(bas.bar);

// prototypes are linked.. basically all the objects have the link to the same object

function linking() {}
linking.prototype.bar = 123;
var ob1 = new linking();
var ob2 = new linking();
console.log(ob1.bar);
console.log(ob2.bar);
linking.prototype.bar = 456;
console.log(ob1.bar);
console.log(ob2.bar);
// here both will be changed
// only works if we do not set bar to another value explicity...
// prototype saves memories...

// so prototype not good for properties you are going to overwrite or assign later...

function dislink() {}
dislink.prototype.bar = 123;
var ob1 = new dislink();
var ob2 = new dislink();
ob1.bar = 456;
console.log(ob1.bar); //456
console.log(ob2.bar); //123

// a class with a prototype function

function someClass() {
  this.someProperty = "Some initial value";
}
someClass.prototype.someMemeberFunction = function () {
  this.someProperty = "modified value";
};
// since functions dont need to made again and again on creation of parent object, this saves memories by keeping only 1 copy of function for thousand of instances of the same class..
var instance = new someClass();
console.log(instance.someProperty);
instance.someMemeberFunction();
console.log(instance.someProperty);
// class does not exist traditionally in JS.. we make class by this way by using functions....

// ERROR HANDLING
// most common way of applications crashing if we do not catch the error correctly...

try {
  console.log("About to catch an error");
  throw new Error("caught the first time");
} catch (e) {
  console.log("The code is: ", e.message);
} finally {
  console.log("This will always be caught");
}

// error is not caught if error handling is done outside the async function like setTimeout

// try {
//   setTimeout(function () {
//     throw new Error("Inside Async task");
//   }, 1000);
// } catch (e) {
//   console.log("I will never be executed");
// }

// console.log("I am outside the blocks");

setTimeout(function () {
  try {
    throw new Error("Now catching inside async and will show");
  } catch (e) {
    console.log("Code is:", e.message);
  }
}, 1000);
// here the issue is that the async when executed will not be able to tell the stack that error has occured
// the solution is below

function getConnection(callback) {
  var connection;
  try {
    throw new Error("Connection failed and callback done");

    //   if it succeeds
    callback(null, connection);
  } catch (error) {
    callback(error, null);
    // here send the error to the main program
  }
}

getConnection(function (error, connection) {
  if (error) {
    console.log("Code is:", error.message);
  } else {
    console.log("Connection successful", connection);
  }
});

// THE END OF CHAPTER 2
