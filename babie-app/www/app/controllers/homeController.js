(function(){

	'use strict';

	angular
		.module('babie.controllers', ['ionic'])
		.controller('homeController', homeController);

	homeController.$inject = ['apiResource'];

	function homeController(apiResource) {
		var vm = this;
		vm.names = {};

		vm.testText = '...still the home page!!!';

		// constructor
		(function(){

			// NEED IT: when names api is completely implemented
			// apiResource.name.name().get({}, function(result){
			// 	names = result;
			// });

		})();

		//apiResource.name.name().get(function(result){

		var result = [
		{
			"nameId": 1,
			"nameInfo": "vijay",
			"meaning": [
				{
					"meaningId": 1,
					"meaningInfo": "A person asdfasd fdfasff  asdfdafsdaf afasdfsadfads asfasf asfaaf fasdfdasfdas"
				},
				{
					"meaningId": 2,
					"meaningInfo": "A person asdfasd fdfasff  asdfdafsdaf afasdfsadfads asfasf asfaaf fasdfdasf"
				}
			],
			"labels": [
				{
					"labelId": 1,
					"labelInfo": "god"
				},
				{
					"labelId": 2,
					"labelInfo": "boy"
				}
			]
			
		},

		{
			"nameId": 1,
			"nameInfo": "vijay",
			"meaning": [
				{
					"meaningId": 1,
					"meaningInfo": "A person asdfasd fdfasff  asdfdafsdaf afasdfsadfads asfasf asfaaf fasdfdasfdasasasfasdf faddasffa dsfd sfsdfears"
				},
				{
					"meaningId": 1,
					"meaningInfo": "victory"
				}
			],
			"labels": [
				{
					"labelId": 1,
					"labelInfo": "god"
				},
				{
					"labelId": 2,
					"labelInfo": "boy"
				}
			]
			
		},

		{
			"nameId": 1,
			"nameInfo": "vijay",
			"meaning": [
				
			],
			"labels": [
				{
					"labelId": 1,
					"labelInfo": "god"
				},
				{
					"labelId": 2,
					"labelInfo": "boy"
				}
			]
			
		},

		{
			"nameId": 1,
			"nameInfo": "vijay",
			"meaning": [
				{
					"meaningId": 1,
					"meaningInfo": "victory"
				},
				{
					"meaningId": 1,
					"meaningInfo": "victory"
				}
			],
			"labels": [
				{
					"labelId": 1,
					"labelInfo": "god"
				},
				{
					"labelId": 2,
					"labelInfo": "boy"
				}
			]
			
		}

		
	]

			vm.names = result;

			//console.log(result);
		//});


	}

})();