// here we see how the node_module is called here...
console.log(__dirname);
var bar = require('bar');
// this calls for a core module call followed by a node_module call when present without path
// will search in dirname/node_modules and then same node_modules directory going one way up from the pwd
bar();

var config = require('./config');
// calls js and then checks for json files...
// there are no comments allowed for JSON
console.log(config.foo);

// BROKE DUE TO NODE FILE NEW MADE HERE...