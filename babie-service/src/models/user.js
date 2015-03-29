var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	userId: {type: Number, unique: true, require: true},
	userInfo: {type: String},
	reputationPoints: {type: Number},
	gender: {type: String},
	email: {type: String},
	password: {type: String},},
	{
		versionKey: false		//mongoose adds '_v' as version key for the schema, do not need it for now
	});

var User = mongoose.model('users', UserSchema);

exports.userModel = User;