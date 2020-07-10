// this serve-index is used to list the directory and all its content to the user so that the user can browse through it himself..
// generally used for seeing repos of a software like we see usually
var express = require('express');
var serveindex = require('serve-index');

express().use(express.static(__dirname + "/web")).use(serveindex(__dirname + "/web")).listen(3000);
console.log("Started web server");
// remember if first one resolves to an html then it wont show directories but only direct files...
// generally serveIndex kept later in call as first need to get to website and then to repos later by the link