const express = require('express');
const router = express.Router();

var apps = require('../data/apps.json');

router.get('/', (req, res) => res.send(JSON.stringify(apps)));

router.get('/:id', (req, res) => {
    var app = apps.find(app => app.id === parseInt(req.params.id));

    app ? res.send(JSON.stringify(app)) : res.status(404).send('not found');;
});

module.exports = router;