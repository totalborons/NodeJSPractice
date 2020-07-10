// Routers is a custom class like in express used to do the same things as route just as a seperate entitity and then passed on
var express = require('express');
var app = express();
var body_parser = require('body-parser');
// basically the routers are highly resuable here... hence used 
var router = express.Router();
var items = [];
router.use(body_parser.json()); //as  body parsers dont need extra??
// remember that express.json transfers the properties into the req.body header
router.route('/')
    .get(function (req, res, next) {
        console.log(items);
        res.send({
            status: "Item Retrieved",
            items: items
        });
        // no body in get
    })
    .post(function (req, res, next) {
        items.push(req.body);
        res.send({
            status: "Item added",
            itemId: items.length - 1
        });
    })
    .put(function (req, res, next) {
        items = req.body;
        res.send({
            status: "Replaced with new data set"
        })
    })
    .delete(function (req, res, next) {
        items = [];
        res.send({
            status: "Cleared off the list"
        })
        // no body in delete
    });
router.route('/:id')
    .get(function (req, res, next) {
        var id = req.params['id'];
        if (id && items[Number(id)]) {
            res.send({
                status: "Retrived item",
                item: items[Number(id)]
            });
        } else {
            res.send(401, {

                status: "Not Found"
            });
        }
    })
    .all(function (req, res, next) {
        res.send(501), {
            status: "Not Implemented"
        };
    });

app.use('/todo', router).listen(3000);
console.log("Server started at 3000");

// NOW WORKING FOR SOM REASON
// JSON PROBLEMS???