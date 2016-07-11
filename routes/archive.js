/**
 * Created by Administrator on 2016/6/17.
 */

var express = require('express');
var utils = require('utility')
var uuid = require('node-uuid')
var router = express.Router();

var mongoclient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hunter';

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
    var user_id = req.session.user_id;
    var user = req.session.user;
    var archive_id = req.body.archive_id;
    var id = uuid.v1();
    var create_time = utils.YYYYMMDDHHmmss();

    try{
        mongoclient.connect(url, function (err, db) {
            if(err) throw err;
            var collection = db.collection('user_approve_archive');
            var doc = {'id': id, 'user_id': user_id, 'archive_id': archive_id,  'create_time':create_time}
            collection.insertOne(doc, function(err, result) {
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
    var create_time = utils.YYYYMMDDHHmmss();

    try{
        mongoclient.connect(url, function (err, db) {
            if(err) throw err;
            var collection = db.collection('user_fav_archive');
            var doc = {'id': id, 'user_id': user_id, 'archive_id': archive_id, 'create_time':create_time}
            collection.insertOne(doc, function(err, result) {
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

router.get('/getFav', function (req, res, next) {
    var user_id = req.session.user_id
    var page = parseInt(req.query.page);
    var size = parseInt(req.query.size);

    var q = {};
    if (user_id) {
        q.user_id = user_id;
    }
    
    var s={'_id': 1};
    
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

module.exports = router;