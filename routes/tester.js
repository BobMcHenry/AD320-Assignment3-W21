const temp = require('../data/colors.json');

const found = temp.find(element => element.id === 100) || {};
console.log(Array.isArray(temp));
