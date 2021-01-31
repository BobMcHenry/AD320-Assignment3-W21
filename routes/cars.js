const express = require('express');
const router = express.Router();

module.exports = router;//Json file path
const cars = require('../data/cars.json');

//Get cars objects
router.get('/', function (req, res, next) {
    res.json(cars);
  });
  
  //Get object from id
  router.get('/:id', function(req, res, next) {
    const carId = Number(req.params.id);
    const getCar = cars.find((cars) => cars.id === carId);
  
    //Error handler
    if (!getCar) {
        res.json(getCar);
      res.status(200).send;
    } else {
      res.json(getCar);
    }
  });
