// THIS IS THE REACTJS FILES


// define(['exports'], function (exports) {
//     var bar = exports.log = function () {
//         console.log("bar.log was called");
//     };
// });

// just exports work here as this is react js and not node js here at work

// NOW COMES NODEJS CONVERSION TO AMD SYSTEM BY BROWSERIFY
exports.log = function () {
    console.log("Called bar.log");
};