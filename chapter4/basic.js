// here we try to call multiple enblocks again but with index.js being implicitly called and not explicitly as a node module is called externally ...


var enblock = require('enblock');
// should go to node_modules and then to enblock from here and look for index.js implicitly

enblock.enblock1();
enblock.enblock2();

// done corecttly here...

// BROKE DUE TO NPM INSTALL HERE...