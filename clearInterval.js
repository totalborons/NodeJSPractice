// to set and clear intervals here

var no = 0;
var ob = setInterval(function () {
    no++;
    console.log(no, " seconds passed");
    if (no == 5) {
        clearInterval(ob);
    }
}, 1000);
console.log(__filename);
// fileName with path
console.log(__dirname);
// path without filename
console.log(process.argv);
// this gives the name with the whole path and not just one thing alone