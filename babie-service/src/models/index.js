var exports = module.exports;

// require all models
Name = require('./name');
Counter = require('./counter');

// export all models
exports.nameModel = Name.nameModel;
exports.counterModel = Counter.counterModel;