var User = require('../models').userModel;

module.exports = function(app, dbqueries){


    // API to get ALL users
    app.get('/api/user', function(req, res){

        User.find({}, function(err, users){
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
