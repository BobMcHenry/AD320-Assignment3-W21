const express = require('express');
const router = express.Router();
// get all pets, returns as json array
const pets = require('../data/pets.json');

router.get('/',(req, res)=>{
    res.json(pets);
});
//fetches one pet, returns as json object
router.get('/:id',(req,res)=>{
    const pet = pets.find(
        function(colour) { return colour.id === parseInt(req.params.id); }
    );
    if (!pets) {
        res.status(404).send('No such pets found');
    }
    res.json(pets);
});
module.exports = router;
