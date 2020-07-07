// here this is the util function that ill use to do it...
var util = require('util');
util.log("Sample message");
// this stamps with the time.. thankfully with local time settings...


// also used to format string like in python and c language
var name = "Shikhar";
var age = 25;
console.log(util.format("%s is of the age %d", name, age));


// it can also be used to check the data type of a variable


console.log(util.isArray([]));
console.log(util.isArray({
    length: 0
}));
console.log(util.isDate(new Date()));
console.log(util.isDate("23-July-2018"));
console.log(util.isError(new Error("This is the message")));
console.log(util.isError("Is this the error??"));