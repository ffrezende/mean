const express = require('express');
const consign = require('consign');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign()
    .include('app/routes')
    .into(app);

module.exports = app;