const express = require('express');
const config = require('./config/config');
const app = config(express());

require('./database');
// Settings
app.set('port', process.env.PORT || 3002);

// Starting the server
app.listen(app.get('port'), () => {
  console.log('server en el puerto 3002');
});
