var express = require('express');
var router = express.Router();

/* GET development forum. */
router.get('/', function(req, res, next) {
  res.render('devforum', { title: '5 Rivers Squash Team' });
});

module.exports = router;
