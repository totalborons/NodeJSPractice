var fs = require('fs');
var http = require('http');
var path = require('path');

function send404(res) {
    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    // another way to add headers without changing other headers here
    res.write('Error 404: Resource not found');
    res.end();
}


var mimeLookup = {
    '.js': 'application/javascript',
    '.html': 'text/html'
};

var server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        // basically GET function is used on web broswer when calling a url here...
        var fileurl;
        if (req.url == '/') fileurl = '/index.html';
        else fileurl = req.url;
        console.log(req.headers);
        var filepath = path.resolve('.' + fileurl);
        // now check the file external and if we allow that to be looked up here
        var ext = path.extname(filepath);
        if (!mimeLookup[ext]) {
            send404(res);
            // basically if not allowed
            return;
        }
        fs.exists(filepath, function (exists) {
            if (!exists) {
                // basically if the file called do not exist here
                send404(res);
                return;
            }
            res.writeHead(200, {
                'Content-Type': mimeLookup[ext]
            });
            fs.createReadStream(filepath).pipe(res);
        });
    } else send404(res);
}).listen(3000);
console.log("Server running on 3000");
// now the JS file is also working and other types will also work if added like a normal local file here...
// this here is not safe as we can easily use GET to get any file off the web server and leak data here..
// also there is no caching of the website and no error handling here both of which is basic for us

// check how to do the path directory traversal attack on this node script