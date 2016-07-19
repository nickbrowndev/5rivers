var express = require('express');
var router = express.Router();

/* GET club information. */
router.get('/', function(req, res, next) {
  res.render('teams', { title: '5 Rivers Squash Team' });
});

module.exports = router;
