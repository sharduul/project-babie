
var Counter = require('../models').counterModel;

module.exports.getNextSequence = function(model){



	Counter.findByIdAndUpdate(model.modelName + 'Id', {$inc: {seq:1}}, function (err, data) {

		console.log(data);
	});


	// Counter.findAndModify({ _id: model.modelName + 'Id' }, [], { $inc: { seq: 1 } }, {}, function (err, counter) {
	//   if (err) throw err;
	//   	console.log('updated, counter is ' + counter.seq);
	// });

	// var nextId = Counter.findAndModify({
	// 	query: { "_id": model.modelName + 'Id' },
	// 	update: { $inc: { "seq": 1 } },
	// 	new: true
	// });
	

	// var nextId = Counter.collection.findAndModify({
	// 	query: { "_id": model.modelName + 'Id' },
	// 	update: { $inc: { "seq": 1 } },
	// 	new: true
	// });

	//console.log(model.modelName + 'Id');

	

	// Counter.collection.findAndModify({ _id: model.modelName + 'Id' }, [], { $inc: { seq: 1 } }, {}, function (err, counter) {
	//   if (err) throw err;
	//   console.log('updated, counter is ' + counter.seq);
	// });


	// Counter.find({}, function(err, cnt){
			
	// 		console.log(cnt.length);
	// 	});

	//console.log(nextId);

	//return nextId;

	

};
