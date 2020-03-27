
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const routes = require('../routes/index');
const bodyParse = require('body-parser');

module.exports = app => {

     app.use(morgan('dev'));
     app.use(bodyParse.json());
     app.use(bodyParse.urlencoded({ extended: true }))

     app.use(cors())
     routes(app);
     return app;

}