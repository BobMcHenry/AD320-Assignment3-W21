const express = require('express');
const router = express.Router();


/* simple GET request. */
router.get('/', function(req, res, next) {
  res.send("It's working, yo!!\n" + new Date().toISOString());
});





module.exports = router;
