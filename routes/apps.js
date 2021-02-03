const express = require('express');
const router = express.Router();

const data = require('../data/apps.json');


router.get('/', function(req, res, next) {
    res.json( data );
});


router.get('/:id', function(req, res, next) {
    const id = parseInt(req.params.id)
    const item = data.find(item => item.id === id)
    res.json(item || {});
});

module.exports = router;