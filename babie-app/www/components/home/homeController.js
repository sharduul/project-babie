(function(){

	'use strict';

	angular
		.module('babie.components.home', ['ionic'])
		.controller('homeController', homeController);

	homeController.$inject = ['apiResource', 'helperService'];

	function homeController(apiResource, helperService) {
		var vm = this;

		vm.alphabeticNames = [];
    vm.currentGender = "all";
		vm.genderSwitch = ["boy", "girl", "all"];
		vm.alphabetArray = helperService.alphabetString().split('');

    vm.getNamesByAlphabet = getNamesByAlphabet;
    vm.like = like;
    vm.changeGender = changeGender;

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


    function like(name){
      name.likes = name.likes ? name.likes + 1 : 1;

      apiResource.name.name().update({ nameId: name.nameId }, name, function(result){
        console.log(result);
      });

    }


    // gender change also takes into consideration the alphabet clicked
    function changeGender(){
      var filterString = "";
      if(vm.selectedAlphabet){
        filterString = "search equals " + vm.selectedAlphabet + " and ";
      }

      filterString += vm.currentGender == "all" ? "" : "gender equals " + vm.currentGender;

      apiResource.name.name().get({filter: filterString, page: 1, size: 10}, function(result){
        vm.alphabeticNames[0] = result;
      });
    }


    function getNamesByAlphabet(alphabet){
      vm.currentGender = "all"; // reset gender filter when alphabet is clicked

      vm.selectedAlphabet = alphabet;
      apiResource.name.name().get({filter: "search equals " + alphabet, page: 1, size: 10}, function(result){
        vm.alphabeticNames[0] = result;
      });
    }

	}

})();
