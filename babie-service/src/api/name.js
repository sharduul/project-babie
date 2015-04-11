
var Q = require('q');
var Q = require('q');
var _ = require('lodash');

var Name = require('../models').nameModel;
var OldName = require('../models').oldNameModel;
var Meaning = require('../models').meaningModel;
//var Counter = require('../models').counterModel;

module.exports = function(app, counter, dbqueries){

	var nameToBeSavedCollection = [];
	var nameToBeSavedCollection2 = [];
	var meaningToBeSavedCollection = [];
	var meaningToBeSavedCollection2 = [];

	var PushName;
	var SaveNames;
	var FlatenNameList;


	// get all the names
	app.get('/api/name', function(req, res){

		OldName.find({}, function(err, names){
			
			var namesStr = JSON.stringify(names);
			var names = JSON.parse(namesStr);
			names = FlatenNameList(names);

			GetNamesToSave(names)
			.then(function(){

				//console.log(_.find);
				//console.log(_);

				console.log("inserting... " + nameToBeSavedCollection.length);

				//var promise = Name.create(nameToBeSavedCollection);

				//var potatoBag = [{nameId: 1}, {nameId: 2}];
				Name.collection.insert(nameToBeSavedCollection, onInsert);
				Name.collection.insert(nameToBeSavedCollection2, onInsert);
				Meaning.collection.insert(meaningToBeSavedCollection, onInsert);
				Meaning.collection.insert(meaningToBeSavedCollection2, onInsert);



				function onInsert(err, docs) {
				    if (err) {
				        console.log(err);
				    } else {
				        console.info('%d potatoes were successfully stored.', docs.length);
				    }
				}

				// promise.then(function(){

				// 	console.log("asdf");
				// });

				// dbqueries.SaveCollection(Name, nameToBeSavedCollection).exec()
				// .then(function(data){

				// 	console.log(data);
				// 	console.log("success /name");

				// });

				// dbqueries.SaveCollection(Meaning, meaningToBeSavedCollection).exec()
				// .then(function(data){

				// 	console.log(data);
				// 	console.log("success /meaning");

				// });
			});

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


	PushName = function(singleName, count){

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

			nameToBeSaved.nameId = seqNameId;
			nameToBeSaved.nameInfo = singleName.name;
			nameToBeSaved.gender = singleName.gender;

			nameToBeSaved.meaning = {
				meaningId: seqMeaningId,
				meaningInfo: singleName.meaning
			}

			var found = _.find(nameToBeSavedCollection, 'nameId', seqNameId);
			var found2 = _.find(nameToBeSavedCollection2, 'nameId', seqNameId);
			var foundM = _.find(meaningToBeSavedCollection, 'meaningId', seqMeaningId);
			var foundM2 = _.find(meaningToBeSavedCollection2, 'meaningId', seqMeaningId);

			if(typeof found === 'undefined' && typeof found2 === 'undefined' && typeof foundM === 'undefined' && typeof foundM2 === 'undefined'){

				//console.log(found);
			

				// if(typeof found === 'undefined'){

					
				// 	console.log("found it");
				// }

				if(count % 2 == 0){
					nameToBeSavedCollection.push(nameToBeSaved);
				} else {
					//console.log("filled names 1");
					nameToBeSavedCollection2.push(nameToBeSaved);
				}

				if(count % 2 == 0){
					meaningToBeSavedCollection.push(nameToBeSaved.meaning);
				} else {
					//console.log("filled meanings 1");

					meaningToBeSavedCollection2.push(nameToBeSaved.meaning);
				}



			}

			
			defer.resolve();

		});

		return defer.promise;

	}

	
	var GetNamesToSave = function(names){

		var promises = [];
		var defer = Q.defer();

		var count = 0;

		names.forEach(function(singleName){
			count++;
			promises.push(PushName(singleName, count))
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
