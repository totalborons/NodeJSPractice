// this is to show the process called nextTick which puts a line to the next event loop

// not sure where it puts it up to be on

setTimeout(function () {
    console.log("NOT TICK BUT SET BEFORE THE nextTick function");
}, 0);

process.nextTick(function () {
    console.log("Inside tick after");
    // have to check where inside the event loop it is kept
    // whether at the top or at the bottom of it...
    // okay so this set it ups at the top of the event loop to be done the earliest
});
process.nextTick(function () {
    console.log("Inside tick but duplicate.. should be toppest of top");
    // dont know what is happening here in this thing??

});


console.log("immediately..");