const express = require('express');
const router = express.Router();

// add require path for the data.json file
const pets = require('../data/pets.json');

const app = express()

console.log('Server started.');

// GET path that calls the pets path variable established above
router.get('/', function(req, res, next) {
    res.json(pets);
});

// GET path for specific pet id
router.get('/:id', function(req, res, next) {

    // variable that checks pets array for parameter id
    const found = pets.some(pet => pet.id === parseInt(req.params.id));

    // if variable found == true:
    if (found) {
        // filter array for paramter id, display as json
        res.json(pets.filter(pet => pet.id == parseInt(req.params.id)));
    } else {
        // if found == false, return status 200 and empty array result
        res.status(200).json({});
    }
});



module.exports = router;