const express = require('express');
const router = express.Router();

var apps = require('../data/apps.json');

router.get('/', (req, res) => res.send(JSON.stringify(apps)));

router.get('/:id', (req, res) => {
    var app = apps.find(app => app.id === parseInt(req.params.id));

    res.send(JSON.stringify(app))
});

module.exports = router;