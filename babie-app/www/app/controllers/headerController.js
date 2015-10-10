(function(){

	'use strict';

	angular
		.module('babie.controllers')
		.controller('headerController', headerController);

	headerController.$inject = ['apiResource', '$rootScope', '$state'];

	function headerController(apiResource, $rootScope, $state) {
		var vm = this;
		var nameId = $state.params.nameId;

		vm.stateIs = 'app';
        vm.goToAddName = goToAddName;

		(function(){

			console.log("header");

		})();

		// state changed event is triggered from Run - the app kickstarter
		// it will be used to determined whether or not to show the add meaning box, and what items to show on the header- based on the state
		$rootScope.$on('stateChanged', function(e, customStateData){
			vm.stateIs = customStateData.name;
			nameId = customStateData.params.nameId;
			
			console.log(customStateData);
		});

        function goToAddName(){
            $state.go('app.addName');
        }

	}

})();