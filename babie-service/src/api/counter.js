
var Counter = require('../models').counterModel;

module.exports.getNextSequence = function(model){

	// console.log(model.modelName);
	Counter.findByIdAndUpdate(model.modelName + 'Id', {$inc: {seq:1}}, function (err, data) {

		console.log(data.seq);
		return data.seq;
	});

};
