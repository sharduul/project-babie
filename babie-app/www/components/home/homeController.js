(function(){

	'use strict';

	angular
		.module('babie.components.home', ['ionic'])
		.controller('homeController', homeController);

	homeController.$inject = ['apiResource', 'helperService'];

	function homeController(apiResource, helperService) {
		var vm = this;
		var alphabetArray = helperService.alphabetString().split('');

		vm.alphabeticNames = [];

		(function(){

        // get all the names alphabetically
        // call the API for each alphabet
        var index = -1;
        angular.forEach(alphabetArray, function(currentAlphabet){
            apiResource.name.name().get({filter: "search equals " + currentAlphabet, page: 1, size: 10}, function(result){
                index++;
                // TODO: for sorting the map alphabetically use map['a'], map['b'], etc..
                vm.alphabeticNames[index] = result;

                console.log(vm.alphabeticNames[0]);

            });
        });

		})();

	}

})();
