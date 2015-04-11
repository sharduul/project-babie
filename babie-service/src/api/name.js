
var Name = require('../models').nameModel;

module.exports = function(app, counter, dbqueries){


	// get all the names
	app.get('/api/name', function(req, res){

		Name.find({}, function(err, names){
			
				res.send(names);

			});

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


// ********************* private functions **********************************************


};
