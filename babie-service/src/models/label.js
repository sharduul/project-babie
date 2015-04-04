var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LabelSchema = new Schema({
	labelId: {type: Number, unique: true, require: true},
	labelInfo: {type: String}
});

var Labels = mongoose.model('labels', LabelSchema);

exports.labelModel = Labels;
