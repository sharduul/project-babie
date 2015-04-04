var exports = module.exports;

// require all models
Name = require('./name');
Meaning = require('./meaning');
Label = require('./label');
Counter = require('./counter');

// export all models
exports.nameModel = Name.nameModel;
exports.meaningModel = Meaning.meaningModel;
exports.labelModel = Label.labelModel;
exports.oldNameModel = Name.oldNameModel;
exports.counterModel = Counter.counterModel;