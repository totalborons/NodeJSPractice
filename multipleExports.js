var a = function () {
    console.log("Called module a");
};

var b = function () {
    console.log("Called module b");
};

module.exports = {
    a: a,
    b: b
};
// this is one cumbersome way.. problem is that both the init and application is far away and can change before it is exported at times....

// ANOTHER WAY IS THIS

module.exports.c = function () {
    console.log("Called IMPLICIT export C");
};

// exports.d = function () {
//     console.log("Called IMPLICIT export D");
// };
// THIS IS NOT WORKING FOR SOME REASON
// THOUGH THIS IS WORKING IN REACTJS FOR SOME REASON BUT NOT HERE ON THE SERVER SIDE IN NODEJS

// no need to write module.exports everytime.. can directly name it as exports.functionName
console.log("MODULE= ", module);
console.log("MODULE.EXPORTS=", module.exports);
console.log("EXPORTS=", exports);

// HOWEVER THIS ISNT HAPPENING FOR US FOR SOME REASON