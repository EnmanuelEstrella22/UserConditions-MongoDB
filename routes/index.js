const express = require('express');
const router = express.Router();

const user = require('./../controllers/usuarios');

module.exports = app => {
     router.post('/api/post/UserConditions', user.crearUserConditions);
     router.get('/api/get/UserConditions', user.getUserConditions);
     app.use(router);
}