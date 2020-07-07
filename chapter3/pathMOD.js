// this normalizes the path file in all the differennt os..
// for example UNNIX uses / while windows uses \
// also this removes duplicate // and also joins to make a path file

var path = require('path');
console.log(path.normalize('/foo/bar/..')); //gives /foo as .. goes back one directory

console.log(path.normalize('/foo//bar/bas/'));


console.log(path.join('./foo', 'bar', '/bas'));

var completePath = './foo/bar/bas/index.html';
console.log(path.dirname(completePath));
console.log(path.basename(completePath));
console.log(path.extname(completePath));