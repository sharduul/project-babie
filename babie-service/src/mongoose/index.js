var mongoose = require('mongoose');
var config = require('./config.js');

mongoose.connect('mongodb://' + config.mongo_host + ':' + config.mongo_port + '/heroku_cnndmbkh');

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});