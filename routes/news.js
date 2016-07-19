var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('news', { title: '5 Rivers Squash Team' });
});

module.exports = router;
