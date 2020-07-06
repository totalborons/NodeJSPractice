// supposed to be called app.js as all default apps are called app.js but by convention

// HOW TO USE MODULES FROM OTHER FILE AND FUNCTIONS
console.time("timer1");
var foo = require("./foo"); //commandJS vs AMD module
// another thning is ES6 module?????
foo(); //performs the functions of foo here...
console.timeEnd("timer1");

console.time("timer2");
var alternateSameFile = require('./foo');
alternateSameFile();
// same file still called... no problem of 2 global variables clashing together in a blob here... more safer too unlike import functions as everything is not included only the part you want to be included is there...
console.timeEnd("timer2");

// also need based use of module is possible this way

if (true === true) {
    var needed = require('./foo');
    // this is on the same thread so blocks IO as well... so using with condition might be a good thing here..
    needed();
    console.log("printed here inside conditional loading");
}
// once they are called they remained cached for faster access the next timee...
// SHARED MODULES LIKE STATIC IN JAVA... 
// SO ALL THE MODULES ARE POINTING TO THE SINGLE OBJECT AND NOT NEW OBJECTS WHEN REQUIRE IS USED/...

var permanence = require('./fooslee');
var permanence2 = require('./fooslee');
console.log("initial values in same file=", permanence.something);
permanence.something = 456;
console.log("different object same file=", permanence2.something);


// THE WAY TO GET NEW OBJECTS EVERYTIME WE CALL REQUIRE IS TO RETURN A NEW OBJECT THERE ITSELF AGAIN WHENEVER MODULE.EXPORTS IS USED
permanence = require('./newEveryTime');
permanence = permanence();
permanence2 = require('./newEveryTime');
permanence2 = permanence2();
console.log("initial values in same file=", permanence.something);
permanence.something = 456;
console.log("different object same file=", permanence2.something);







var bar = require('./bar');

// also this happens even if called from another module and another program and not this filee.. haven't tried this yet but have to except for when we return a new object here...


// way of getting time here...

console.log(new Date().toLocaleTimeString()); //will give absolute value

// here for some reason it isnt giving local time but global TZ

// to LocaleTime String gives the local IST avlues.. without it it gives me the standard TZ value


console.log(module.exports);
// this is always formed here as a new object in every file...

// MULTIPLE EXPORTS
var multipleExport = require('./multipleExports');

multipleExport.a();
multipleExport.b();
multipleExport.c();
// multipleExport.d();
// THIS ISNT WORKING BUT IT SHOULD ACCORDING TO THE PDF BOOK


// USING EN BLOCK EXPORTS HERE...
var enBlock = require('./enBlockExport/index');
enBlock.ex1();
enBlock.ex2();