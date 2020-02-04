const express = require('express');
const router = express.Router();
const colors = require('../data/colors');

router.get('/', (req, res, next) => { 
	res.json(colors)
});

router.get('/:id', (req, res) => {
	const found = colors.some(colors => colors.id === parseInt(req.params.id));
	if (found) {
		res.json(colors.filter(colors => colors.id === parseInt(req.params.id)));
	} else {
		res.status(400).json({ msg: `No color found with id ${req.params.id}`})
	}
});

module.exports = router;