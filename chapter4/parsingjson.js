// this is where we convert json to object and vice versa

var ob = {
    a: 1,
    b: "Shikhar",
    c: null,
    d: function () {
        console.log("Present inside d");
    },
    e: "Just checking"
};

// so basically the one with function is not parsed here.. only the data is converted and then converted back
var json_ob = JSON.stringify(ob);
console.log(json_ob);
console.log(typeof (json_ob)); //string

var backToJS = JSON.parse(json_ob);
console.log(backToJS);
console.log(backToJS.a);
// backToJS.d();
// hence this doesnt work either