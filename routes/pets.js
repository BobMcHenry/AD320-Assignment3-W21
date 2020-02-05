const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function (req, res) {
    res.send('hello world')})

    router.get('/1', function (req, res) {
        res.send('hello world 2!')})