
var Q = require('q');

var Name = require('../models').nameModel;
var OldName = require('../models').oldNameModel;
var Meaning = require('../models').meaningModel;
//var Counter = require('../models').counterModel;

module.exports = function(app, counter){

	var nameToBeSavedCollection = [];
	var meaningToBeSavedCollection = [];

	var PushName;
	var SaveNames;
	var FlatenNameList;


	// get all the names
	app.get('/api/name', function(req, res){

		OldName.find({}, function(err, names){
			
			var namesStr = JSON.stringify(names);
			var names = JSON.parse(namesStr);
			names = FlatenNameList(names);

			SaveNames(names)
				.then(function(){
					console.log(nameToBeSavedCollection.length);
					console.log("success /name");
				});


			//console.log("success /name");
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


	PushName = function(singleName){

		var defer = Q.defer();

		var seqNameId;
		var seqMeaningId;

		counter.getNextSequence(Name).exec()
		.then(function(data){

			seqNameId = data[0].seq;

			return counter.getNextSequence(Meaning).exec();
		})
		.then(function(data){

			seqMeaningId = data[0].seq;
			nameToBeSaved = {};

			nameToBeSaved.nameID = seqNameId;
			nameToBeSaved.nameInfo = singleName.name;
			nameToBeSaved.gender = singleName.gender;

			nameToBeSaved.meaning = {
				meaningId: seqMeaningId,
				meaningInfo: singleName.meaning
			}

			nameToBeSavedCollection.push(nameToBeSaved);
			meaningToBeSavedCollection.push(nameToBeSaved.meaning);

			defer.resolve();

		});

		return defer.promise;

	}

	
	var SaveNames = function(names){

		var promises = [];
		var defer = Q.defer();

		names.forEach(function(singleName){
			promises.push(PushName(singleName))
		});

		Q.all(promises).then(function(){
			defer.resolve();
		});

		return defer.promise;

	}


	var FlatenNameList = function(names){

		var FlatNameList = [];

		names.forEach(function(nameItem){

			nameItem.name.forEach(function(singleName){

				var FlatName = {};

				FlatName.name = singleName;
				FlatName.gender = nameItem.gender;
				FlatName.meaning = nameItem.meaning;

				FlatNameList.push(FlatName);
			});

		});

		return FlatNameList;

	}

};
