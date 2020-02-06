const express = require('express');
const router = express.Router();

const NateCars = require('../data/cars.json');
//Gets list of all cars
router.get('/', (req, res) => {
    res.json(NateCars);
});
//Gets car id
router.get('/:id', (req, res) => {
    const cars = NateCars.find(car => car.id === parseInt(req.params.id));
    res.send(cars);
});

module.exports = router;