var app = require('express')();
const utils = require('utility');

app.post("/re", function (req, res, next) {
  var email = req.body.email;
  var pwd = req.body.pwd;

  var mongoclient = require('mongodb').MongoClient;
  var url = 'mongodb://123.57.29.130:27017/hunter';

  mongoclient.connect(url, function (err, db) {
    var collection = db.collection('users');

    collection.find({"email": email}).toArray(function (err, docs) {
      if(docs.length > 0) {
        res.send({"status": "fail", "code": "0001"});
      }else {
        collection.insertOne({"email": email, pwd: utils.md5(pwd)}, function (err, r) {
          console.log(r);
          if(1 == r.insertedCount) {
            res.send({data: r.ops[0].email, status: "success"});
          }
        });
      }
    });
    /*
    collection.count([{"email": email}], function (err, count) {
      if(count > 0) {
        console.log("user was existed");
      }else {
        collection.insertOne({email: email, pwd: pwd}, function (err, result) {
          console.log("insert result : " + result);
        });
      }
    });*/
  })
});

module.exports = app;