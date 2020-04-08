const express = require('express');
const router = express.Router();

const { ctrUserCondition, ctrUserData } = require('./../controllers');

module.exports = app => {
  //User Conditions
  router.post('/api/post/UserConditions', ctrUserCondition.crearUserConditions);
  router.get('/api/get/UserConditions/:name', ctrUserCondition.getUserConditions);

  //User general data
  router.post('/api/post/user_data', ctrUserData.crearUserData);
  router.get('/api/get/user_data/:name', ctrUserData.getUserData);

  app.use(router);
};
