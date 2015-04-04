var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MeaningSchema = new Schema({
	meaningId: {type: Number, unique: true, require: true},
	meaningInfo: {type: String},
	meaningByUser: {
		userIf: {type: Number},
		userInfo: {type: String}
	},
	upVote: {type: Number}
});

var Meanings = mongoose.model('meanings', MeaningSchema);

exports.meaningModel = Meanings;
