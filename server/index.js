const express = require('express');
const parser = require('body-parser');
const dbs = require('../database/dbHelper.js');
const path = require('path');
const port = 3000;


var app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/api/qa', (req, res) => {dbs.findAllQA(res)});

app.get('/api/dimension', (req, res) => {dbs.findAllDimension(res)});

app.get('/api/overview', (req, res) => {dbs.findAllProduct(res)});

app.use(express.static(path.join(__dirname, '/../client/dist/')))

app.listen(port, () => console.log(`app listening on port ${port}!`));