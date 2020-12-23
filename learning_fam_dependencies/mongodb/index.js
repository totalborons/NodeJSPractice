const { MongoClient } = require("mongodb");

// this is for mongo DB CRUD operationns
var mongo = require("mongodb").MongoClient;
var demo_person = {
  name: "john",
  lastname: "Smith",
};
var findKey = {
  name: "John",
};

MongoClient.connect("mongodb://192.168.1.100:27017/demo", function (err, db) {
  if (err) throw err;
  console.log("Successfully connected");
  var collection = db.collection("people");
  collection.insert(demo_person, function (err, docs) {
    console.log("Inserted", docs[0]);
    console.log("MY ID:=", demo_person._id);
    collection.find(findKey).toArray(function (err, results) {
      console.log("Found the results", results);
      collection.remove(findKey, function () {
        console.log("Db Deleted");
        db.close();
      });
    });
  });
});
