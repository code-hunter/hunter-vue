/**
 * Created by Administrator on 2016/6/17.
 */

var express = require('express');
var router = express.Router();

router.get('/mongodb', function (req, res, next) {
    var mongoclient = require('mongodb').MongoClient;
    var url = 'mongodb://123.57.29.130:27017/hunter';
    mongoclient.connect(url, function (err, db) {
        var collection = db.collection('archive')
        collection.find({}).toArray(function(err, docs) {
            // console.log(docs);
            res.send(docs);
        });
    })
})

router.get('/getPage', function (req, res, next) {
    var page = parseInt(req.query.page);
    var size = parseInt(req.query.size);

    var mongoclient = require('mongodb').MongoClient;
    var url = 'mongodb://123.57.29.130:27017/hunter';

    mongoclient.connect(url, function (err, db) {
        var collection = db.collection('archive')
        collection.find({}).skip((page-1)*size).sort({'_id':1}).limit(size).toArray(function(err, docs) {
            // console.log(docs);
            res.send(docs);
        });
    })
})

/* GET users listing. */
router.get('/elasticsearch', function(req, res, next) {
    var es = require('elasticsearch');
    var es_client = new es.Client({host: 'localhost:9200'});

    es_client.search({index : 'hound',
                      type: 'crawler',
                      body: {
                          query:{
                              match_all: {
                              }
                          }
                      }
    }).then(function (resp) {
        var hits = resp.hits.hits;
        res.send(hits);
        // res.render('archive', {docs: hits})
    }, function (err) {
        console.trace(err.message)
    })
});

module.exports = router;