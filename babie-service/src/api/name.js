
var Name = require('../models').nameModel;
//var Counter = require('../models').counterModel;

module.exports = function(app, counter){

	// get all the names
	app.get('/api/name', function(req, res){

		Name.find({}, function(err, names){
			
			//res.send(names); // send array of names to the client

			console.log(names.length);
		});

		console.log("success /name");
	});


	// get the next sequence
	app.get('/api/counter', function(req, res){

		//console.log(Name);
		//console.log(Counter);

		// Counter.findAndModify({ "_id":"users" }, [], { $inc: { "seq":1 } }, {}, function (err, counter) {
		//   if (err) throw err;
		//   	console.log('updated, counter is ' + counter.seq);
		// });




		//Counter.collection.insert({"_id":"users", "seq":1});

		// Counter.find({}, function(err, cnt){
			
		// 	res.send(cnt);

		// 	//console.log(cnt.length);
		// });

		counter.getNextSequence(Name);

		//console.log(counter.getNextSequence(Name));
		//console.log(counter.getNextSequence);

	});




	// for reference.. will be needed in the future..
	// app.post('/api/name', function(req, res){


		// var testName = {
		// 	nameId: 1,
		// 	nameInfo: "test success"
		// };

	// 	Name.create(testName, function(err){
	// 		console.log("error: " + err);
	// 	});

	// });

};
