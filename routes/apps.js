const express = require('express');
const router = express.Router();

// path for the data file
const apps = require('../data/apps.json');

console.log('Server start...')

/* First call to get all the data from app.json file */
router.get('/', function (req, res, next) {
    res.json(apps);
});

//Second  call to get individual data of the input id from app.json file 
router.get('/:id', function (req, res, next) {

    //checks and find  the id from the array
    const findAppsId = apps.find((app) => app.id === parseInt(req.params.id));

     //if the id found
    if (findAppsId) {
        res.json(findAppsId);
    } else {
        //if not found
        res.sendStatus(200) ;
    } 
 });

module.exports = router;