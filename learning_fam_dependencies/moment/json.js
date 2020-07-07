// just to see how to pass of dates in JSON
// basically the same UTC format in which it is printed but in string format as Date is not supported
var date = new Date(Date.UTC(2007, 0, 1));
// sets the date and time according to UTC and not to local timezone
// helps when received the time and need to convert to Date object
console.log("Original=", date);

var Json = date.toJSON();
// same function works on moments too
// same function is called by JSON.stringify here.. so basically this is an alternative only in case
// so you can customise the toJSON function or add to it on an object so that conversion occurs when stringify is called

console.log("JSON=", Json);

console.log("Round trip back to it", new Date(Json));


// here it is how to add toJSON function so that stringify works on that object
var foo = {};
var bar = {
    foo: foo
};
console.log(JSON.stringify(bar));
foo.toJSON = function () {
    // this is where you can make a custom conversion for JSON
    return "converted babeezzz";
};
console.log(JSON.stringify(bar));