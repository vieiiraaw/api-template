const express = require('express');
const route = express.Router();

route.get('/', require('./controllers/homeController'));

module.exports = route;