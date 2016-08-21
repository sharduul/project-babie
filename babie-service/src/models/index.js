var exports = module.exports;

// require all models
Name = require('./name');
Family = require('./family');
Meaning = require('./meaning');
Label = require('./label');
Counter = require('./counter');

// export all models
exports.nameModel = Name.nameModel;
exports.familyModel = Family.familyModel;
exports.meaningModel = Meaning.meaningModel;
exports.labelModel = Label.labelModel;
exports.counterModel = Counter.counterModel;

//archive
exports.oldNameModel = Name.oldNameModel;
