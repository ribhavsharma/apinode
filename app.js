const express = require('express');
const app = express();
const infoRoute = require('./api/routes/info')
const productsRoute = require('./api/routes/info')

app.use('/info', infoRoute); 
app.use('/products', productsRoute)

module.exports = app;