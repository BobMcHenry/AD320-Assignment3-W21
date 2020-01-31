const express = require('express');
const cars = require('../data/cars');
const router = express.Router();

router.get('/', function (request, response, next) {
    response.send(cars);
});

router.get('/:id?', function (request, response, next ) {
    cars.forEach((car) => {
        if (car.id == request.params.id) {
            response.send(car);
        }
    });

});


module.exports = router;