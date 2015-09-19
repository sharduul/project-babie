var Name = require('../models').nameModel;

module.exports = function(app, counter, dbqueries){

    // API to get a name by nameId
    app.get('/api/name/:nameId', function(req, res){

        Name.find({nameId: req.params.nameId}, function(err, name){
            if(err){
                return res.send(err);
            }
            res.send(name);
            console.log("success /:nameId");
        });
    });


	// API to get all the names
	app.get('/api/name', function(req, res){

		Name.find({}, function(err, names){
            if(err){
                return res.send(err);
            }
            res.send(names);
            console.log("success /name");
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
