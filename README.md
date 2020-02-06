# AD320-Assignment3-W20
Starter Code for Assignment3
const express = require('express');
const router = express.Router();
//get all pets, returns as json array  with the pets


const pets = require('../data/pets.json');

router.get('/',(req, res)=>
{
    res.json(pets);
});
// get one pet, returns as json object for the pets


router.get('/:id',(req,res)=>
{
    const pet = pets.find(
        function(petter) { return petter.id === parseInt(req.params.id); }
);
    if (!pets) {
        res.status(404).send('No such pets found');
  }
    res.json(pets);
});

module.exports = router;
// end the assignment3
