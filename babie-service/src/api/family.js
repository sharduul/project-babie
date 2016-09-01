var Family = require('../models').familyModel;

module.exports = function(app, dbqueries){


    // API to get ALL FAMILIES
    app.get('/api/family', function(req, res){

        Family.find({}, function(err, families){
            if(err){
                return res.send(err);
            }
            res.send(families);
            console.log("success families");
        });
    });

    // API to add a new name to the database
	 app.post('/api/family', function(req, res){

         // get the nameId for the new name before saving it to the database
         dbqueries.getNextSequence(Family).exec().then(function(data){

             testFamily.familyId = data.seq;

             Family.create(testFamily, function(err){

                 // TODO: create a common message service to return sensible errors and success data
                 // if there is any DB error send it to the client
                 if(err){
                     res.json(err);
                 }
                 else{
                     // if the name record is created successfully, return the name object
                     res.json(testFamily);
                 }

             });
        });

	 });


    // API to edit family details
    app.put('/api/family/:familyId', function(req, res){

        Family.findOne({ familyId: req.params.familyId }, function(err, family){

            family.familyName = req.body.familyName;
            family.memberList = req.body.memberList;
            family.nameList = req.body.nameList;

            family.save(function(err) {
                if (err){
                    res.send(err);
                }

                console.log("success families PUT");
                res.json(family);
            });

        });

    });


// ********************* private functions **********************************************



// ********************** sample data for testing ***********************

    var testFamily = {
        "familyId": 12337,
        "familyName": "first family",
        "memberList": [
            {
                "memberId": "abc1@abc.com",
                "memberName": "ABC ABC"
            },
            {
                "memberId": "abc2@abc.com",
                "memberName": "ABC BCD"
            }
        ],
        "nameList": [
            {
                "nameID": 1122,
                "nameInfo": "Name 1",
                "gender": "boy",
                "upVote": 2,
                "addedByMemberId": "abc1@abc.com"
            }
        ],
        "admin": "abc1@abc.com"
    };

};
