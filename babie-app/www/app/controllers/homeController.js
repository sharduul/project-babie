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

		//apiResource.name.name().get(function(result){

		var result = [
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
			]
			
		},
	]

			vm.names = result;

			//console.log(result);
		//});


	}

})();