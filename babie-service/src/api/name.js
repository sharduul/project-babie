
var Name = require('../models').nameModel;

module.exports = function(app){

	app.get('/api/name', function(req, res){

		var testName = {
			nameId: 1,
			nameInfo: "test success"
		};

		Name.create(testName, function(err){
			console.log("error: " + err);
		});

		console.log("success /name");
	});

};
