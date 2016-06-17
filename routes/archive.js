/**
 * Created by Administrator on 2016/6/17.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
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
    }, function (err) {
        console.trace(err.message)
    })
});

module.exports = router;