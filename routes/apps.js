const express = require('express');
const router = express.Router();

// get all the data
let myGetHandler = function(req, res, next){
    let myData = require ("../data/apps.json");
    res.send(myData)
}

router.get('/', myGetHandler);

// get the data with ID









module.exports = router;