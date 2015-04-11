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

			apiResource.name.name().get({}, function(result){

				var index = -1;
				angular.forEach(alphabetArray, function(currentAlphabet){
					
					index++;
					vm.alphabeticNames[index] = _.filter(result, function(item){
						return helperService.regexProvider.startsWith(currentAlphabet).test(item.nameInfo);
					});
				});

			});

		})();
		
	}

})();