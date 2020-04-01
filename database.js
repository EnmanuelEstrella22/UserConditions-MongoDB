const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://AdminDB:welc0me1@clustertesting0-ztrac.azure.mongodb.net/test?retryWrites=true&w=majority',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
  )
  .then(db => {
    console.log('DB is connected');
  })
  .catch(err => {
    console.log(err);
  });
