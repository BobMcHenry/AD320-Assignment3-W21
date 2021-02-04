const express = require('express');
const router = express.Router();

const colors = require('../data/colors.json');

/* GET all colors */
router.get('/', function(req, res, next ) {
    res.json(colors);
});

/* GET a color */
router.get('/:id', function(req, res, next){

    const color = colors.find(color => {
        return color.id === Number(req.params.id)
    });

    if( color ){
        res.json(color);
    } else {
        res.json({});
    }
});

module.exports = router;