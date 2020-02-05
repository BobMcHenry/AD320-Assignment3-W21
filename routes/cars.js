const express = require('express');
const router = express.Router();
let carsJson = require('../data/cars.json');

//Get all cars
router.get('/', function(req, res, next) {
    res.send(carsJson);
})

//Get a single car
//Referenced https://www.youtube.com/watch?time_continue=1938&v=L72fhGm1tfE&feature=emb_logo
router.get('/:id', function(req, res, next){
    const selected = parseInt(req.params.id);
    res.json(carsJson.filter(carsJson => carsJson.id === selected));
});

module.exports = router;