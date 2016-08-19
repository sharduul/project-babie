(function(){

	'use strict';

	angular
		.module('babie.components.home', ['ionic'])
		.controller('homeController', homeController);

	homeController.$inject = ['apiResource', 'helperService'];

	function homeController(apiResource, helperService) {
		var vm = this;

		vm.alphabeticNames = [];
		vm.alphabetArray = helperService.alphabetString().split('');

    vm.getNamesByAlphabet = getNamesByAlphabet;

		(function(){

      console.log(vm.alphabetArray);

        // get all the names alphabetically
        // call the API for each alphabet
        var index = -1;
        angular.forEach(vm.alphabetArray, function(currentAlphabet){
            apiResource.name.name().get({filter: "search equals " + currentAlphabet, page: 1, size: 10}, function(result){
                index++;
                // TODO: for sorting the map alphabetically use map['a'], map['b'], etc..
                vm.alphabeticNames[index] = result;

            });
        });

		})();


    function getNamesByAlphabet(alphabet){
      vm.selectedAlphabet = alphabet;
      apiResource.name.name().get({filter: "search equals " + alphabet, page: 1, size: 10}, function(result){
        vm.alphabeticNames[0] = result;
      });
    }

	}

})();
