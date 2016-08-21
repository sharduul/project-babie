var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FamilySchema = new Schema({
	familyId: { type: Number, unique: true, require: true },
	familyName: { type: String, require: true },
	memberList: [
        {
		    memberId: { type: String }, // mostly email
		    memberName: { type: String }
	    }
    ],
    nameList: [
        {
            nameID: { type: Number },
            nameInfo: { type: String },
            gender: { type: String },
            upVote: { type: Number },
            addedByMemberId: { type: String, require: true } // memberId : mostly email
        }
    ],
    admin: { type: String, require: true } // memberId : mostly email
});

exports.familyModel = mongoose.model('family', FamilySchema);
