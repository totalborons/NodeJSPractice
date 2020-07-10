// here we use paramrouting to get the parameter id
//  if we go to localhost/id/234 we want to get the 123 herer

var express = require('express');
var app = express();
app.get('/user/:userId', function (req, res) {
    res.send("User ID is:-" + req.params['userId']);
});
// this is how we extract userID and other data here....
app.listen(3000);
console.log("Server starting at 3000");

// another way of doing it is:-
// app.param('userId,function(req,res,next,userId){ req.user=userId})
// later we use app.get same function as above and just use the value extracted from param which is in req.user and set its use