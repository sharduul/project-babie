var User = require('../models').userModel;

module.exports = function(app, dbqueries){

    // API to get user by Id
    app.get('/api/user/:userId', function(req, res){

        User.findOne({ userId: req.params.userId }, function(err, users){
            if(err){
                return res.send(err);
            }
            res.send(users);
            console.log("success families");
        });
    });

    // API to get ALL users
    app.get('/api/user', function(req, res){

        User.find({ }, function(err, users){
            if(err){
                return res.send(err);
            }
            res.send(users);
            console.log("success families");
        });
    });



// ********************* private functions **********************************************





// ********************** sample data for testing ***********************



};
