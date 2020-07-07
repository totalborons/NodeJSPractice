// requires the module OS here...
var os = require('os');
var gigaByte = 1 / Math.pow(1024, 3);
console.log("Total Memory=", os.totalmem * gigaByte, "GB");
console.log("Available Memory=", os.freemem * gigaByte, "GB");
console.log("Memory Used=", (os.totalmem - os.freemem) * gigaByte);

console.log(os.cpus().length);