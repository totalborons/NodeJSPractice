// FileSystem Module to read and write and do basic functions in node...

var fs = require('fs');
fs.writeFileSync('./text.txt', "Hello World!!");
// when sync in end it means that blocking will happen
console.log(fs.readFileSync('./text.txt').toString());
// node is writing to the directory from where it is runninng and not the folder thing.. 


// try {
//     fs.unlinkSync('./text.txt');
//     // this is doing with blocking on the same thread..
//     console.log("Deleted Successfully in sync");
// } catch (err) {
//     console.log("error=", err);
// }


// NOW LETS TRY TO DO IT ASYNC..

fs.unlink('./text.txt', function (err) {
    if (err) {
        console.log("Error=", err);
    } else console.log("Deleted successfully in async");
});


// so if no file present then it will throw error...