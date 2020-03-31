const express = require('express');
const router = express.Router();

const user = require('./../controllers/usuarios');

module.exports = app => {
  //User Conditions
  router.post('/api/post/UserConditions', user.crearUserConditions);
  router.get('/api/get/UserConditions', user.getUserConditions);


  //User general data
  router.post('/api/post/user_data', user.crearUserData);
  router.get('/api/get/user_data', user.getUserData);

  app.use(router);
}
