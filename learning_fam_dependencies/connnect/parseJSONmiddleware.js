// here we parse the request of it has JSON and get the object from it..
// it is the request which has the JSON and the the response remember this...
var connect = require('connect');

function parseJSON(req, res, next) {
    if (req.headers['content-type'] == 'application/json') {
        var data = '';
        req.on('readable', function () {
            var short_content = req.read();
            if (short_content)
                data += short_content;
        });
        req.on('end', function () {
            try {
                console.log("Data=", data);
                var ob = JSON.parse(data);
                console.log("Parsed data is", ob);
                req.body = JSON.parse(data);
            } catch (err) {
                console.log("Incoorect data :", err);
            }
            next();
        });
    } else next();
}
connect().use(parseJSON).use(function (req, res) {
    // first check is JSON parsed or not
    if (req.body) {
        res.end("JSON parsed here===" + req.body.foo);
    } else res.end("JSON not parsed");
}).listen(3000);

console.log("Started server at 3000");

// curl http://127.0.0.1:3000/ -H "content-type: application/json" -d "{\"foo\":123}"
// others will raise an error but server will keep running as we handles the error