// this is used to send streams in the form of compressed information if the client can handle it here...

var express = require('express');
var compressed = require('compression');

express().use(compressed()).use(express.static(__dirname + "/web")).listen(3000);
console.log("Started the server at 3000");

// by deafault the compression value is 1kb
// this means if the sent file is greater than 1kb then it will compress it
// to change threshold we use compression({threshold: 512})
// this will compress files above 512 bytes..
// the value is present in bytes
// better to set it at lower than higher???