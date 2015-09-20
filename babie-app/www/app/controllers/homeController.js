(function(){

	'use strict';

	angular
		.module('babie.controllers', ['ionic'])
		.controller('homeController', homeController);

	homeController.$inject = ['apiResource', 'helperService'];

	function homeController(apiResource, helperService) {
		var vm = this;
		vm.alphabeticNames = [];

		var alphabetArray = helperService.alphabetString().split('');

		(function(){

			// get all the names alphabetically
            // call the API for each alphabet
            var index = -1;
            angular.forEach(alphabetArray, function(currentAlphabet){
                apiResource.name.name().get({filter: "search equals " + currentAlphabet, page: 1, size: 5}, function(result){
                    index++;

                    // TODO: for sorting the map alphabetically use map['a'], map['b'], etc..
                    vm.alphabeticNames[index] = result;
                });
            });

		})();
		
	}

})();