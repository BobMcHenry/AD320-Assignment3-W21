const express = require('express');
const router = express.Router();
// fetches all colors, returns as json array
const colors = require('../data/colors.json');

router.get('/',(req, res)=>{
    res.json(colors);
});
//fetches one color, returns as json object
router.get('/:id',(req,res)=>{
    const color = colors.find(
        function(colour) { return colour.id === parseInt(req.params.id); }
    );
    if (!color) {
        res.status(404).send('No such color found');
    }
    res.json(color);
});
module.exports = router;