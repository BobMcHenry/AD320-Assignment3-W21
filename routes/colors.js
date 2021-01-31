const express = require('express');
const router = express.Router();

module.exports = router;

const colorsArray = require('../data/colors.json');

router.get('/', function(req, res) {
    res.header('Content-Type', 'application/json');
    res.send(colorsArray);
});

router.get('/:userId', function(req, res) {
    res.header('Content-Type', 'application/json');
    res.send(colorsArray.find(element => element.id === Number(req.params.userId)) || {});
});

module.exports = router;
