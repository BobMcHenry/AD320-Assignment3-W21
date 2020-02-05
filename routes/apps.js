const express = require('express');
const router = express.Router();
const appsJson = require('../data/apps.json');

// ======= GET ALL APPS =======
router.get('/', (req, res) => {
  res.json(appsJson);
});

// ======= GET APP ID =======
router.get('/:id', (req, res) => {
  const apps = appsJson.find(a => a.id === parseInt(req.params.id));
  if (!apps) res.status(404).send('The request with this ID was not found.');
  res.send(apps);
});

module.exports = router;