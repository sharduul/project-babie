
module.exports = function(app){

	app.get('/', function(req, res){

		console.log("success /");
	});

	// require all the utility services here
	var dbqueries = require('../common/dbqueries.js');


	// require all the apis here
    require('./name.js')(app, dbqueries);
    require('./family.js')(app, dbqueries);
    require('./label.js')(app);

};
