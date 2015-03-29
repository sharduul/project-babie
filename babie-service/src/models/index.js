var exports = module.exports;

// require all models
Name = require('./name');
Counter = require('./counter');
User = require('./user');

// export all models
exports.nameModel = Name.nameModel;
exports.counterModel = Counter.counterModel;
exports.userModel = User.userModel;