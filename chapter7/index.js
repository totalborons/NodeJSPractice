// here we talk about makinng restful api and its functions
// it has two types collections and the items query
// GET PUT POST DELETE where get and delete has no body

var express = require('express');

express().all('/', function (req, res, next) {
        res.write('ALL\n');
        next();
    }).get('/', function (req, res, next) {
        res.end("GET CALLED");
    }).put('/', function (req, res, next) {
        res.end("PUT CALLED");
    }).post('/', function (req, res, next) {
        res.end("POST CALLED");
    })
    .delete('/', function (req, res, next) {
        res.end("DELETE CALLED");
    }).
listen(3000);
console.log("Server started at 3000");
// here remember that this is not prefix but exact paths passed inside the appropraite query
// to make it general can do it as /xyz/* for wildcards
// easier way of this is route functionn