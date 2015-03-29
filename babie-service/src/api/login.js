var User = require('../models').userModel;

module.exports = function(app, counter){

	//get all users
	app.get('/api/login', function(req, res){
		User.find({}, function(err, users){
			res.send(users)		//send all users to client 
		});

		console.log("success /user");
	});

	app.post('/api/login', function(req, res){

		//add new user
		var userTest = {    "userId" : 4,
    						"userInfo" : "Test User",
    						"reputationPoints" : 51,
    						"gender" : "M",
    						"email" : "test2@gmail.com",
    						"password" : "test2"
						};

		User.create(userTest, function(err){
			if(err != null)
				console.log('/user error: ' + err);
		});
	});
}