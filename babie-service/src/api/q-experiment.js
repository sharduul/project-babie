
var Q = require('q');

var Name = require('../models').nameModel;
var OldName = require('../models').oldNameModel;
var Meaning = require('../models').meaningModel;
//var Counter = require('../models').counterModel;

module.exports = function(app, counter){

	var nameToBeSavedCollection = [];
	var meaningToBeSavedCollection = [];

	var PushName = function(singleName){

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

			defer.resolve('seqNameId');

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


	// get all the names
	app.get('/api/name', function(req, res){

		OldName.find({}, function(err, names){
			
			//res.send(names); // send array of names to the client

			var namesStr = JSON.stringify(names);
			var names = JSON.parse(namesStr);


			names = FlatenNameList(names);

			//names = names.slice(0,2);

			SaveNames(names)
				.then(function(){
					console.log(nameToBeSavedCollection.length);
					console.log("success /name");
				});



			// var item;

			// for(var i = 0; i < 1; i++){

			// 	item = names[i];

			// }

			// return Q.all(names.map(function(item){
			
			// //names.forEach(function(nameItem){

			// 	//var deferred = Q.defer();

				



			// 		item.name.forEach(function(singleName){


			// 			var seqNameId;
			// 			var seqMeaningId;

			// 			counter.getNextSequence(Name).exec()
			// 			.then(function(data){

			// 				seqNameId = data[0].seq;

			// 				return counter.getNextSequence(Meaning).exec()
			// 			})
			// 			.then(function(data){

			// 				seqMeaningId = data[0].seq;
			// 				nameToBeSaved = {};

			// 				nameToBeSaved.nameID = seqNameId;
			// 				nameToBeSaved.nameInfo = singleName;
			// 				nameToBeSaved.gender = item.gender;

			// 				nameToBeSaved.meaning = {
			// 					meaningId: seqMeaningId,
			// 					meaningInfo: item.meaning
			// 				}

			// 				nameToBeSavedCollection.push(nameToBeSaved);
			// 				meaningToBeSavedCollection.push(nameToBeSaved.meaning);

							

			// 			});

						

			// 		});

			// 		console.log("1");

			// 	}));

			
			// }).then(function(){ res.send(nameToBeSavedCollection); console.log("adfasdf");});

			

		//})

		//console.log("success /name");
	});

	});

	// get the next sequence
	app.get('/api/counter', function(req, res){

		counter.getNextSequence(Name);

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

};
