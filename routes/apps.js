// ------- this is like and import statement ---
    const express = require('express'); //---imports the EXPRESS we installed
    const router = express.Router(); //--- init router from express imported from line 2
    const dataAppsJson = require('../data/apps'); //--- import data from data/apps.json

/* --------GET all apps info-------------*/

    router.get('/', function(req, res) {
        res.json(dataAppsJson);
    });// this router will run if no ID is specified

/* --------GET specific APP with ID------*/ 

    //router.get()

/*below line is to export this file with name ROUTER
    so other file can import like line 3*/
module.exports = router;