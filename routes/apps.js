// ------- this is like and import statement ---
    const express = require('express'); //---imports the EXPRESS we installed
    const router = express.Router(); //--- init router from express imported from line 2
    const dataAppsJson = require('../data/apps'); //--- import data from data/apps.json

/* --------GET all apps info-------------*/

    router.get('/', function(req, res) {// this router will run if no ID is specified
        res.json(dataAppsJson);
    });

/* --------GET specific APP with ID------*/ 

    router.get('/:id', function(req, res){
        const found = dataAppsJson.some( dataAppsJson => dataAppsJson.id === parseInt(req.params.id)); // returns true when ID matches

        if(found){
            res.json(dataAppsJson.filter(dataAppsJson => dataAppsJson.id === parseInt(req.params.id)));
            // function (dataAppsJson) {
            //     dataAppsJson.id === parseInt(req.params.id)
            // }
        } else {
            res.status(400).json({msg: `NO APPS with id:${req.params.id} FOUND`});
        }

                
                
          
    });

/*below line is to export this file with name ROUTER
    so other file can import like line 3*/
module.exports = router;