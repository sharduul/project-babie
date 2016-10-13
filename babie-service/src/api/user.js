var User = require('../models').userModel;
var passwordHash = require('password-hash');

module.exports = function(app, dbqueries, jwt){

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


    // API to register user
    app.post('/api/user', function(req, res){

        // find the user
        User.findOne({
            userId: _.isUndefined(req.body.userId) ? '' : req.body.userId
        }, function(err, user) {

            // if user found
            if (user) {
                return res.json({
                    success: false,
                    message: "User already exists."
                });
            }
            else{

                // this is a new user it. register it.

                var newUser = {};
                newUser.name = req.body.name;
                newUser.userId = req.body.userId;
                newUser.password = passwordHash.generate(req.body.password);
                newUser.createDate = moment().format('MM DD YYYY, hh:mm:ss');

                User.collection.insert(newUser, { safe: true }, function(error, user){

                    // user could not be registered due to some DB error
                    if(error){
                        return res.json({
                            success: false,
                            message: "There was some problem registering user. Please try again later."
                        });
                    }

                    // user is created successfully
                    // create a token
                    var token = getToken(user);

                    res.json({
                        success: true,
                        message: "Registration successful.",
                        token: token
                    });

                });
            }

        });
    });

    // API to authenticate user
    app.post('/api/login', function(req, res){



        if(req.body.userId){
            // user has provided an userId id
            // so try to login them with userId and password

            // find the user
            User.findOne({
                userId: req.body.userId
            }, function(err, user) {

                // there is some DB error
                if (err) {
                    return res.json({
                        success: false,
                        message: "Something went wrong. Please try again later."
                    });
                }

                // user is not found
                if (!user) {
                    res.json({ success: false, message: 'Authentication failed. User not found.' });
                } else if (user) { // user is found

                    console.log(req.body.password);
                    console.log(req.body.password);
                    console.log(user);

                    // check if password-hash matches
                    if (!passwordHash.verify(req.body.password, user.password)) {
                        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    } else {

                        // if user is found and password is right
                        // create a token
                        var token = getToken(user);

                        res.json({
                            success: true,
                            message: "Login Successful",
                            token: token
                        });

                        console.log("success /authentication");
                    }
                }
            });

        }
        else{
            return res.json({
                success: false,
                message: "Something went wrong. Please try again later."
            });
        }

    });



// ********************* private functions **********************************************

// private function to get the new token
function getToken(user){
    var token = jwt.sign(user, app.get('secretKey'), {
        expiresIn: "2 days" // expires in 24 hours
    });

    return token;
}





// ********************** sample data for testing ***********************



};
