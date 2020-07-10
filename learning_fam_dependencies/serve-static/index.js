// this is an easy way to serve static web servers and avoid the path exploits that were seen with simple connect programs

var express = require('express');
var serve_static = require('serve-static');
express().use(serve_static(__dirname + '/web')).listen(3000);
// using __dirname makes sure it is relative to the current file and not the working directory in ./ as it can create problems otherwise
// hence always form path with __dirname in apps
// serve-static gives proper error codes and responses and safe from the path attack of /../file attack that might be present against normal connect
// here only the directory provided will be accessible and nothing else... so make sure the directory is public and nothing else in there...
// if no file specified directly goes to the index.html file present there..
// also the mime function done by it automatically and no need of manual thing
console.log("Started server at 3000");