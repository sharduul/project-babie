
var Name = require('../models').nameModel;
//var Counter = require('../models').counterModel;

module.exports = function(app, counter){

	// get all the names
	app.get('/api/name', function(req, res){

		Name.find({}, function(err, names){
			
			res.send(names); // send array of names to the client
		});

		console.log("success /name");
	});


	// get the next sequence
	app.get('/api/counter', function(req, res){

		counter.getNextSequence(Name);

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
