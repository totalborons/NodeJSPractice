(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function (require, module, exports) {
        console.log("Hello World from client JS!!");
        // THIS IS REACTJS FILES
        // I dont have a way of starting the server here...


        // define([
        //     './foo',
        //     './bar'
        // ], function (foo, bar) {
        //     // do whatever you need to do here..
        //     foo();
        //     bar.log();
        // });

        // this define is used to load this async over the client as cannot block the browser

        // THIS IS THE NODE JS CONVERSION TO AMD SYSTEM THING...

        var foo = require('./foo');
        var bar = require('./bar');
        foo();
        bar.log();
    }, {
        "./bar": 2,
        "./foo": 3
    }],
    2: [function (require, module, exports) {
        // THIS IS THE REACTJS FILES


        // define(['exports'], function (exports) {
        //     var bar = exports.log = function () {
        //         console.log("bar.log was called");
        //     };
        // });

        // just exports work here as this is react js and not node js here at work

        // NOW COMES NODEJS CONVERSION TO AMD SYSTEM BY BROWSERIFY
        exports.log = function () {
            console.log("Called bar.log");
        };
    }, {}],
    3: [function (require, module, exports) {
        // THIS IS REACTJS CODE
        // define([], function () {
        //     var foo = function () {
        //         console.log("Foo was called");
        //     };
        //     return foo;
        // });


        // THIS IS NODEJS CONVERSION TO AMD SYSTEM BY BROWSERIFY

        module.exports = function () {
            console.log("Called foo");
        };
    }, {}]
}, {}, [1]);


// THIS BROWSERIFY CAN BE USED BUT STILL NODE JS WILL FAIL IF THERE IS ANY SERVER SIDED FUNCTIONS TO BE CONVERTED...
// SO BETTER TO WRITE BROWSER CODE IN REQUIREJS OR ANOTHER ASYNC CODE AND NOT CONVERT IT HERE LIKE THIS.,, USE THIS JUST AS A MAKESHIFT FOR SOME TIME