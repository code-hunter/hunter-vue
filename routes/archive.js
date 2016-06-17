/**
 * Created by Administrator on 2016/6/17.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('archives');
});

module.exports = router;