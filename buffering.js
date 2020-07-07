// this is how to buffer in node js for datastreams and other stuff

var word = "Hello World!!";

var buffering = new Buffer(word, "utf-8");
console.log(buffering);
// should be encoded in bytes
var decode = buffering.toString("utf-8");
console.log(decode);

// for some reason Buffer is shown to be depreciated for security reasons and is asking to use
// Buffer.alloc() ------> use when need to allocate a buffer size
// Buffer.allocUnsafe() ------>
// Buffer.from() ------> for encoding of words..

var safeWord = "Hello Shikahr.. This is safe";
var safeBuffer = Buffer.from(safeWord, "utf-8");
console.log("safer way ----->>> ", safeBuffer);
console.log(safeBuffer.toString("utf-8"));

// This doesn't give error here that Buffer is depreciated and all..
// comment above to cross-check whenever doubtful

// this wont work on older node profiles.... so if need to work or support older profiles have to check online with poly-fill or something...
