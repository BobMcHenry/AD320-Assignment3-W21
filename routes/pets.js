const express = require('express');
const router = express.Router();
const pets = require('../data/pets.json');

module.exports = router;

router.get('/', (req, res) => 
    res.json(pets));

router.get('/:id', (req, res) => {
  res.json(pets.filter(pets => pets.id ===
  parseInt(req.params.id))); 
});
