
module.exports = function(app){

	app.get('/', function(req, res){

		console.log("success /");
	});

	// require all the apis here
	var counter = require('./counter.js');
	require('./name.js')(app, counter);
	require('./login.js')(app, counter);
	
};
