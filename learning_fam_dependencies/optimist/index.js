// here to do optimist training

var argv = require("optimist").argv;
// removes the 2 step process that we usually use with process.argv
// substiute for core module maybe coz of enhanced functions
delete argv["$0"];
// this removes the default node path and the file path and remains for the other arguments there..
// $0 is always reserved here for the filepath
console.log(argv);
// the command line arguments are in the form of an array
// this also helps to take in modifiers from the command line easily and implement that in your programming
// so if the modifier was passed that particular argv.modifier will be set to true or whatever passed after that (only one value thought)
// experiment here in command line to see what comes up
// it can force command line to pass arguments always or value type or even providing default arguments
