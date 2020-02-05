const express = require('express');
const router = express.Router();
let petsJson = require('../data/pets.json');
module.exports = router;

//get function
router.get(`/`,function(req, res, next){
    res.send(petsJson);
});

router.get(`/:id`,function(req, res, next){
    const pets = petsJson.find(p => p.id === parseInt(req.params.id));

    res.send(pets);
});
