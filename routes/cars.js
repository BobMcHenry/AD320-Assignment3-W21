const express = require('express');
const router = express.Router();

//Getting information from data/cars.json
const cars = require('../data/cars.json');

//Uses res.json to send json and returns it as json
router.get('/', function(req, res, next) {
    res.json(cars);  //as json array hence res.json
  });

//GET request that responds with single id entry.
router.get('/:id', function(req, res) {  //Get route
  let reqID = req.params.id;
  const check = cars.find(cars => cars.id == reqID); 

  //Checking the id along with if blank
    if(!check) {
      res.status(200).json({});
    }  
    else{
      res.send(check);
    }
  
    });


module.exports = router;