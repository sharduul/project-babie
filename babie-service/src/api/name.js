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

            //console.log(typeof names);
            //console.log(names[0]);
            //
            //var tempName = names[0];
            //
            //console.log(typeof tempName.meaning);
            //console.log(tempName.meaning);
            //
            //tempName.meaning.push({
            //    "meaningId": 9,
            //    "meaningInfo": "Little; Small"
            //});
            //
            ////var meaningArray = [];
            ////meaningArray.push(tempName.meaning);
            //
            ////console.log(tempName.nameId);
            //
            //
            //
            //
            //
            //
            //
            //
            //
            ////Name.find({nameId: tempName.nameId}).update({nameId: tempName.nameId}, {meaning: meaningArray}, { upsert: true });
            ////Name.update({nameId: tempName.nameId}, {meaning: meaningArray}, { upsert: true });


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


    //// UPDATE QUERY... use it to implement EDIT APIs
    //tempName.meaning.push({
    //    "meaningId": 9,
    //    "meaningInfo": "Little; Small"
    //});
    //Name.update({nameId:tempName.nameId}, {$set:{meaning: tempName.meaning}}, {upsert:true}, function(error, result){
    //    console.log(error);
    //    console.log(result);
    //});

// ********************* private functions **********************************************


};
