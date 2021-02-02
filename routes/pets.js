const express = require('express');
const router = express.Router();
const petData = require('../data/pets.json');

// get all pets
router.get('/', function(req, res, next){
    res.json(petData);
});


// get pets with specified ID
router.get('/:ID', function(req, res, next){
    let id = Number(req.params.ID);
    let n = petData.length;
    let output = {};

    console.log(typeof(id));
    console.log(typeof(petData[1].id));

    for(let i=0; i<n; i++){
        let arrayID = petData[i].id;
        if (arrayID === id){
            output = petData[i];
        }
    }

    res.send(output);

});


module.exports = router;