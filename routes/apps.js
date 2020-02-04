const express = require('express');
const router = express.Router();

/* simple GET request. */
router.get('/', function(req, res, next) {
    res.send("I am implementing in routes/apps.js \n" + new Date().toISOString());
  });

module.exports = router;