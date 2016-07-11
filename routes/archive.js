/**
 * Created by Administrator on 2016/6/17.
 */

var express = require('express');
var utils = require('utility')
var uuid = require('node-uuid')
var router = express.Router();

router.get('/mongodb', function (req, res, next) {
    var mongoclient = require('mongodb').MongoClient;
    var url = 'mongodb://123.57.29.130:27017/hunter';
    mongoclient.connect(url, function (err, db) {
        var collection = db.collection('archive')
        collection.find({}).toArray(function(err, docs) {
            // console.log(docs);
            db.close();
            res.send(docs);
        });
    })
})

router.get('/getPage', function (req, res, next) {
    var page = parseInt(req.query.page);
    var size = parseInt(req.query.size);
    var search_title = req.query.search_title
    var search_subject = req.query.search_subject

    var q = {};
    if (search_title) {
        var pattern = new RegExp("^.*"+search_title+".*$");
        q.title = pattern;
    }

    if(search_subject) {
        q.subject = search_subject;
    }

    var s={'_id': 1};

    var mongoclient = require('mongodb').MongoClient;
    var url = 'mongodb://123.57.29.130:27017/hunter';

    try{
        mongoclient.connect(url, function (err, db) {

            if(err) throw err;
            var collection = db.collection('archive')
            collection.find(q).skip((page-1)*size).sort(s).limit(size).toArray(function(err, docs) {
                // console.log(docs);
                db.close();
                res.send(docs);
            });
        })
    }catch (e) {
        throw e;
    }
})

router.post('/createApprove', function (req, res, next) {
    var userId = req.session.userId;
    var user = req.session.user;
    var archiveId = req.body.archiveId;
    var id = uuid.v1();

    var mongoclient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/hunter';

    try{
        mongoclient.connect(url, function (err, db) {
            if(err) throw err;
            var collection = db.collection('user_approve_archive');
            var doc = {'id': id, 'user_id': user_id, 'archive_id': archiveId}
            collection.insertOne(doc, function(err, result) {
                // console.log(docs);
                db.close();
                if(err){
                    console.log('failed to insert doc: ' + doc);
                    res.send({'code': '0001', 'status':'fail'})
                }
                
                res.send({'code': '0000', 'status':'success'})
            });
        })
    }catch (e) {
        throw e;
    }
})

router.post('/createFav', function (req, res, next) {
    var user_id = req.body.user_id;
    var archive_id = req.body.archive_id;
    var id = uuid.v1();

    var mongoclient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/hunter';

    try{
        mongoclient.connect(url, function (err, db) {
            if(err) throw err;
            var collection = db.collection('user_fav_archive');
            var doc = {'id': id, 'user_id': user_id, 'archive_id': archive_id}
            collection.insertOne(doc, function(err, result) {
                // console.log(docs);
                if(err){
                    console.log('failed to insert doc: ' + doc);
                }
                db.close();
            });
        })
    }catch (e) {
        throw e;
    }
})

router.get('/getFav', function (req, res, next) {
    var user_id = req.session.user_id
    var page = parseInt(req.query.page);
    var size = parseInt(req.query.size);

    var q = {};
    if (user_id) {
        q.user_id = user_id;
    }
    
    var s={'_id': 1};
    
    var mongoclient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/hunter';

    try{
        mongoclient.connect(url, function (err, db) {

            if(err) throw err;
            var collection = db.collection('archive')
            collection.find(q).skip((page-1)*size).sort(s).limit(size).toArray(function(err, docs) {
                // console.log(docs);
                db.close();
                res.send(docs);
            });
        })
    }catch (e) {
        throw e;
    }
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