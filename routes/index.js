const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("It's working, yo!!\n" + new Date().toISOString());
});

module.exports = router;
