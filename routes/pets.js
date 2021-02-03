const express = require('express');
const router = express.Router();

// require pets data
const pets = require('../data/pets.json');

// GET list of all Pets
router.get('/', function(req, res, next) {
    res.json(pets);
  });

// GET request for specified id
router.get('/:id', function(req, res, next) {

    //initially declared a const to achieve this but found this way more clear
    //some codes referenced from 'nceres'
    var searchValue = parseInt(req.params.id);
    var matchCheck = new Object();

    for (i = 0; i < pets.length; i++) {
        if (pets[i].id == searchValue) {
            matchCheck = pets[i];
        }
    }

    // check for empty object (no id match)
    // send matching JSON record or empty object
    if (Object.keys(matchCheck).length === 0) {
        res.status(200);
        res.json(matchCheck);
    } else {
        res.json(matchCheck);
    }

  });

  module.exports = router; 
  