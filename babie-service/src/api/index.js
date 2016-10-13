
module.exports = function(app, optionalParams){

	app.get('/', function(req, res){

		console.log("success /");
	});

	// require all the utility services here
	var dbqueries = require('../common/dbqueries.js');


	// require all the apis here
    require('./name.js')(app, dbqueries);
    require('./family.js')(app, dbqueries);
    require('./user.js')(app, dbqueries, optionalParams.jwt);
    require('./label.js')(app);

};
