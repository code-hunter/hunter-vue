var app = require('express')();
const utils = require('utility');
var uuid = require('node-uuid');

var url = 'mongodb://123.57.29.130:27017/hunter';
var client = require('mongodb').MongoClient;


app.post("/re", function (req, res, next) {
  var user_name = req.body.user_name;
  var pwd = req.body.pwd;

  client.connect(url, function (err, db) {
    var collection = db.collection('users');

    collection.find({"user_name": user_name}).toArray(function (err, docs) {
      if(docs.length > 0) {
        res.send({"status": "fail", "code": "0001"});
      }else {
        collection.insertOne({id:uuid.v1(), user_name: user_name, pwd: utils.md5(pwd)}, function (err, r) {
          console.log("insert :"+r);
          if(1 == r.insertedCount) {
            var user = r.ops[0];
            //set cookie
            res.cookie("user_name", user.user_name);

            //set session
            req.session.regenerate(function(){
              req.user = user;
              req.session.userId = user.id;
              req.session.save();

              res.send({data: user.user_name, status: "success"});
            });
          }
        });
      }
    });
  })
});

app.post("/login", function (req, res, next) {
  var user_name = req.body.user_name;
  var pwd = req.body.pwd;

  client.connect(url, function (err, db) {
    var collection = db.collection('users');
    collection.find({"user_name": user_name}).toArray(function (err, docs) {
      if(docs.length == 0) {
        res.send({"status": "fail", "code": "0002"});
      }else {
        var user = docs[0];
        if(!utils.md5(pwd) == user.pwd){
          res.send({"status": "fail", "code": "0003"})
        }else{
          //set cookie
          res.cookie("user_name", user.user_name);

          //set session
          req.session.regenerate(function(){
            req.user = user;
            req.session.userId = user.id;
            req.session.save();

            res.send({data: user.id, status: "success"});
          });
        }
      }

    });
  });

});

module.exports = app;