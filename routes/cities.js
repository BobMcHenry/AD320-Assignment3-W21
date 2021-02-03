const express = require('express');
const app = require('../app');
const router = express.Router();

/* router.get('/', (request, response,) => {
    return Cities.find({}).lean()
    .then((Cities) => {
      console.log(Cities); 
      
    }) 
    .catch(err => console.log(err));
   
    
  }); */

  const cities = require('../data/cities.json');

  console.log('Server started')
  //
  router.get('/', function (req, res,next){
      res.json(cities);
  })

  //
  router.get('/:id', function (req, res, next) {

    const findCitiesId = cities.find((city) => city.id === parseInt(req.params.id));

    if (findCitiesId){
        res.json(findCitiesId);

    } else {

        res.sendStatus(200);
    
    }
  });

module.exports = router;