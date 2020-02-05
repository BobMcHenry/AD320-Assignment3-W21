const express = require('express');
const router = express.Router();
const cars = require('../data/cars');


router.get('/', (req, res) => {res.json(cars)
});

router.get('/:id', function(req, res, next) {res.json(cars.find(cars => cars.id === parseInt(req.params.id)))
});

  module.exports = router;
