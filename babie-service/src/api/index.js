
module.exports = function(app){

	app.get('/', function(req, res){

		console.log("success /");
	});

	// require all the apis here
	require('./name.js')(app);
};