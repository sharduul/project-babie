/*
contains all the utility DB queries which will be needed throughout the app. Create wrapper functions for those queries
*/


var Counter = require('../models').counterModel;
var exports = module.exports;


exports.getNextSequence = function(model){

	return Counter.findByIdAndUpdate(model.modelName + 'Id', {$inc: {seq:1}}, function (err, data) {
		return data;
	});

};

exports.SaveCollection = function(model, collection){

	return model.create(collection);

};