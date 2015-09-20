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

        // get the lhs and the rhs of the filter
        var operands = getOperands(req.query.filter);

        var filterObject = {};

        // '^' takes care of "starts with" filter
        // if you don't provide '^'... then it will run "contains" filter
        filterObject.nameInfo = new RegExp('^' + operands.rhs, "i");


        // get the pagination params from provided query params- page and size
        var paginationParams = getPaginationParams(req.query);

        // skip and limit params are used to implement pagination
        // Name.find(query, fields, {skip, limit}, callback function)
		Name.find(filterObject, {}, { skip: paginationParams.skip, limit: paginationParams.limit }, function(err, names){
            if(err){
                return res.send(err);
            }
            res.send(names);

            console.log("success /name");
        });
    });


	 app.post('/api/name', function(req, res){


	 	Name.create(testName, function(err){
	 		console.log("error: " + err);
	 	});


	 });


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

    function getPaginationParams(requestParams){
        var paginationParams = {};
        paginationParams.skip = requestParams.page * requestParams.size - requestParams.size;
        paginationParams.limit = requestParams.size;

        return paginationParams;
    }

    // utility function to get the operands of the filter provided in the request
    function getOperands(expression){
        var operands = expression.split('equals').map(function (item){
            return item.trim()
        });

        operands.lhs = operands[0];
        operands.rhs = operands[1];

        return operands;
    }


// ********************** sample data for testing ***********************

    var testName = {
        nameId: 1,
        nameInfo: "test success"
    };

};
