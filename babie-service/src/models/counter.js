var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CounterSchema = new Schema({
	_id: String,
	seq: Number
});


var Counter = mongoose.model('counters', CounterSchema);

exports.counterModel = Counter;