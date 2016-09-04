var User = require('../models').userModel;

module.exports = function(app, dbqueries){

    // API to get user by Id
    app.get('/api/user/:userId', function(req, res){

        User.findOne({ userId: req.params.userId }, function(err, users){
            if(err){
                return res.send(err);
            }
            res.send(users);
        });
    });

    // API to get ALL users
    app.get('/api/user', function(req, res){

        User.find({ }, function(err, users){
            if(err){
                return res.send(err);
            }
            res.send(users);
        });
    });


    // API to edit family details
    app.put('/api/user/:userId', function(req, res){

        User.findOne({ userId: req.params.userId }, function(err, user){

            user.userName = req.body.userName;
            user.families = req.body.families;

            user.save(function(err) {
                if (err){
                    res.send(err);
                }

                console.log("success user PUT");
                res.json(user);
            });

        });

    });



// ********************* private functions **********************************************





// ********************** sample data for testing ***********************



};
