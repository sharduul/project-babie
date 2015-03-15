var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NameSchema = new Schema({
	nameId: {type: Number, unique: true, require: true},
	nameInfo: {type: String},
	meaning: {
		meaningId: {type: Number},
		meaningInfo: {type: String}
	},
	upVote: {type: Number},
	viewCount: {type: Number},
	labels: [
		{
			labelId: {type: Number},
			labelInfo: {type: String}
		}
	],
	assignedByCount: {type: Number}
});

var Name = mongoose.model('Name', NameSchema);

exports.nameModel = Name;