(function(){

	'use strict';

	angular
		.module('babie.controllers')
		.controller('headerController', headerController);

	headerController.$inject = ['apiResource', '$rootScope'];

	function headerController(apiResource, $rootScope) {
		var vm = this;
		vm.stateIs = 'app';

		(function(){

			console.log("header");

		})();

		// state changed event is triggered from Run - the app kickstarter
		// it will be used to determined whether or not to show the add meaning box, and what items to show on the header- based on the state
		$rootScope.$on('stateChanged', function(e, stateName){
			vm.stateIs = stateName;
		});

	}

})();