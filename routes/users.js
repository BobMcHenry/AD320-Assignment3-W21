const express = require('express');
const router = express.Router();
let usersJson = require('../data/users.json');

router.get('/', (req, res, next) => {
    res.send(usersJson);    
    });
  
    router.get('/:id', (req, res, next) => {
      let user = usersJson.find(u => u.id === parseInt(req.params.id));
      if(!user) res.status(404).send('The request with this Id was not found.');
      res.send(user);
    })
  

module.exports = router;