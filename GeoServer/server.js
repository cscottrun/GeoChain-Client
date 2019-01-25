const path = require ('path');
const bodyParser = require ('body-parser');
const express = require ('express')
const knex = require ('./knex');
const PORT = process.env.PORT || 2000;
const app = express();

app.use(bodyParser.json());

// let routes = require('./routes');
// app.use(routes);


app.listen(PORT, () => {console.log('Welcome to port 2000')})

module.exports = app;