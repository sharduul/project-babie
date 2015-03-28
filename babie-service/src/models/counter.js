var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CounterSchema = new Schema({
	_id: String,
	seq: Number
});

// CounterSchema.statics.findAndModify = function (query, sort, doc, options, callback) {
//   return this.collection.findAndModify(query, sort, doc, options, callback);
// };

var Counter = mongoose.model('counters', CounterSchema);

exports.counterModel = Counter;