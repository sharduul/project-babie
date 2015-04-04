
var Counter = require('../models').counterModel;

module.exports.getNextSequence = function(model){

	return Counter.findByIdAndUpdate(model.modelName + 'Id', {$inc: {seq:1}}, function (err, data) {

		return data;

		console.log(data);
	});

};



