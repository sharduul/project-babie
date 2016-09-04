var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	userId: { type: String, unique: true, require: true },
	userName: { type: String, require: true },
	families: [
        {
		    familyId: { type: String },
		    familyName: { type: String }
	    }
    ]
});

exports.userModel = mongoose.model('user', UserSchema);
