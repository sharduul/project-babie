(function(){

	'use strict';

	angular
		.module('babie.controllers', ['ionic'])
		.controller('homeController', homeController);

	homeController.$inject = ['apiResource'];

	function homeController(apiResource) {
		var vm = this;
		vm.names = [];

		// constructor
		(function(){

			//NEED IT: when names api is completely implemented
			apiResource.name.name().get({}, function(result){
				console.log(_.find);

				//vm.names = result;
			});

		})();
	}

})();