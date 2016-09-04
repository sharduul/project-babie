var exports = module.exports;

// require all models
Name = require('./name');
Family = require('./family');
User = require('./user');
Meaning = require('./meaning');
Label = require('./label');
Counter = require('./counter');

// export all models
exports.nameModel = Name.nameModel;
exports.familyModel = Family.familyModel;
exports.userModel = User.userModel;
exports.meaningModel = Meaning.meaningModel;
exports.labelModel = Label.labelModel;
exports.counterModel = Counter.counterModel;

//archive
exports.oldNameModel = Name.oldNameModel;
