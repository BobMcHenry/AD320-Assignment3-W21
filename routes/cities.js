const express = require('express');
const router = express.Router();

//path for data.json file
 const cities = require('../data/cities.json');

  console.log('Server started')

  //call all records from json file
  router.get('/', function (req, res, next){
      res.json(cities);
  });

   //call one of the cities from the json file
  router.get('/:id', function (req, res, next) {

    const Cities = cities.find((city) => city.id === parseInt(req.params.id));

    if (Cities){
        res.json(Cities);

    } else {
        res.status(200).json({});
    
    } 
   
  });

module.exports = router;