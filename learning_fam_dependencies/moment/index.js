// here we see how is date used and then see how is moment used

var now = new Date();
console.log("right now:", now);
// gives me this in standard time zone and not the usual one

// the month in date object is zero index based,,., but only when inputting and not in output

var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
var milliseconds = now.getMilliseconds();
var seconds = now.getSeconds();

// how to create a new date with defined stamp

var copDate = new Date(year, month, date, hour, minute, seconds, milliseconds);
console.log("copy is :", copDate);
// other dates
console.log("1 Jan 2020 is:", new Date(2020, 0, 1));
console.log("1 Jan 2020 9AM is:", new Date(2020, 0, 1, 9));
// for some reason this shows an offset of 5:30 hours of IST 

var moment = require('moment');
// moment actually gives with timezone and in IST here.. also displays the difference here...

var wrapped = moment(now);
console.log(wrapped);

// converting back to date objects

var convertDay = wrapped.toDate();
console.log(convertDay);
// this is again with not IST and with standard time zone

// it also allows for string parsing

console.log(moment("25-12-2020", "DD-MM-YYYY"));
console.log(moment("25-12-2020 9:30", "DD-MM-YYYY hh:mm"));
// remember minutes is mm and not MM here



date = new Date(2010, 1, 14, 15, 25, 50);
wrapped = moment(date);
console.log(date, "=", wrapped);

console.log(wrapped.format('"dddd, MMMM Do YYYY, h:mm:ss a"'));
// MMMM is full form of month.. dddd is the day of the week
// a here is am or pm , A is for capital values
// Do will display date with the postscript
// one h means that no compulsory 0 before.. if there is two hh then there will be a 0 if not 2 digits


console.log(wrapped.format('"ddd, hA"'));

// with moments you can also use how many hours left to go and all that goodie good features

// how to calculate no of days from something

var a = moment([2007, 0, 15]);
var b = moment([2007, 0, 16]);
var c = moment([2007, 1, 15]);
var d = moment([2008, 0, 15]);


console.log(a.from(b)); // a day ago
console.log(a.from(c));
console.log(a.from(d));

console.log(b.from(a));
console.log(c.from(a));
console.log(d.from(a));