var connect = require('connect');

var app = connect();
// connect is basically a middleware here which is trying to handle req annd response and also is use() which registers the middlewares
// http.createServer(app).listen(3000);
// this is us doing the same thing in comments above internally inn app.listen()command

app.listen(3000);
console.log("Server is running at 3000");