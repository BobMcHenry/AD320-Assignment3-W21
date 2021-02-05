const express = require('express');
const router = express.Router();
let myGetHandler = function(req, res, next){
    let myData = require ("../data/apps.json");
    res.send(myData)
}

router.get('/', myGetHandler);









module.exports = router;