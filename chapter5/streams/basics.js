// streams are made from events ony..
// streams are 4 types=readble. writable, duplex and transform
var breakers = require('break');
var stream = require('stream');
var colors = require('colors');
var EventEmitter = require('events').EventEmitter;
console.log(new stream.Stream() instanceof EventEmitter);
console.log(new stream.Readable({}) instanceof EventEmitter);
console.log(new stream.Writable({}) instanceof EventEmitter);
console.log(new stream.Duplex({}) instanceof EventEmitter);
console.log(new stream.Transform({}) instanceof EventEmitter);
breakers();
var fs = require('fs');
var readableStream = fs.createReadStream('./cool.txt');
// also obviously executed after main file is done so async manner????
readableStream.pipe(process.stdout);
// for some reasonn at the end of stream there is % sign coming
var gzip = require('zlib').createGzip();
var out = fs.createWriteStream('./cool.txt.gz');
// this is for zip file of originanl
readableStream.pipe(gzip).pipe(out);
// this creates multiple serial pipes sending data ahead of it and doing it.. so we can daisy chain these pipes

process.stdin.on('readable', function () {
    // obviously executed after main file done as whole
    var buf = process.stdin.read();
    if (buf != null) {
        console.log("got".blue);
        process.stdout.write(buf.toString().green);
    } else {
        console.log("read complete".red);
        breakers();
    }
});

// since cant have both together run it as:-
// echo "foo bar bas" | node basics.js
breakers();

var writeablestream = fs.createWriteStream('./message.txt');
writeablestream.write('foo bar ');
writeablestream.end('bas');
// the end part is also written here./. so file has foo bar and bas