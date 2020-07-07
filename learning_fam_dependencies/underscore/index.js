// this is the entry point for the node project here...

var num = [1, 20, 300, 500, 250];
var _ = require('underscore');
var results = _.filter(num, function (item) {
    return item > 100;
});


// all those that are returned as true will be made and filtered out.. false will be left out...

console.log(results);
results = _.map(num, function (item) {
    return item * 2;
});
// this takes input array and convery it to output array here...
console.log(results);

results = _.reject(num, function (item) {
    return item > 100;
});
// exactly opposite of filter here...
console.log(results);

// to get max and min from an array use this

results = _.max(num);
console.log(results);
results = _.min(num);
console.log(results);
results = _.sortBy(num);
// sort by ascending order here... opposite???
console.log(results);