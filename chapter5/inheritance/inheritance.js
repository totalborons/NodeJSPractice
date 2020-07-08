// this is how inheritance is done here in JS in general
var foo = {};
// empty object

var bar = {};
// empty object here too..


// so basically here func is the base class to be seen...
function func(val) {
    this.val = val
}
// we force this func to become foo now
// .call comes from Function.call() prototype set in it...
func.call(foo, 123);
// this here makes it inheritable here


func.call(bar, 456);
// same here.. inheritable.. and also executes the function here... and also makes a new object automatically without the new commmand for some reason


console.log(foo.val);
console.log(bar.val);