var Name = require('../models').nameModel;

module.exports = function(app){

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

        // get the pagination params from provided query params- page and size
        paginationParams = getPaginationParams(req.query);

        // skip and limit params are used to implement pagination
        // Name.find(query, fields, {skip, limit}, callback function)
		Name.find({}, {}, { skip: paginationParams.skip, limit: paginationParams.limit }, function(err, names){
            if(err){
                return res.send(err);
            }
            res.send(names);

            console.log("success /name");
        });
    });


    function getPaginationParams(requestParams){
        var paginationParams = {};
        paginationParams.skip = requestParams.page * requestParams.size - requestParams.size;
        paginationParams.limit = requestParams.size;

        return paginationParams;
    }
	


	// TODO: for reference.. will be needed in the future..
	// app.post('/api/name', function(req, res){


		// var testName = {
		// 	nameId: 1,
		// 	nameInfo: "test success"
		// };

	// 	Name.create(testName, function(err){
	// 		console.log("error: " + err);
	// 	});

	// });


    // TODO: for reference.. will be needed in the future..
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
