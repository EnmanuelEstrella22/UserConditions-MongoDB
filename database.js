const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://AdminDB:welc0me1@clustertesting0-shard-00-00-ztrac.azure.mongodb.net:27017,clustertesting0-shard-00-01-ztrac.azure.mongodb.net:27017,clustertesting0-shard-00-02-ztrac.azure.mongodb.net:27017/test?ssl=true&replicaSet=ClusterTesting0-shard-0&authSource=admin&retryWrites=true&w=majority',
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
