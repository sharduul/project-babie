/*
contains all the utility DB queries which will be needed throughout the app. Create wrapper functions for those queries
*/


var Counter = require('../models').counterModel;
var exports = module.exports;


exports.getNextSequence = function(model){

    // with new Mongoose update this statement returns a query
    // you have to exec() it to get the promise.. and then do stuff you want
    return Counter.findByIdAndUpdate(model.modelName + 'Id', {$inc: {seq:1}});

};

exports.SaveCollection = function(model, collection){

	return model.create(collection);

};