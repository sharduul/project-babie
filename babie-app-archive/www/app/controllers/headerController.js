(function(){

	'use strict';

	angular
		.module('babie.controllers')
		.controller('headerController', headerController);

	headerController.$inject = ['apiResource', '$rootScope', '$state', '$window'];

	function headerController(apiResource, $rootScope, $state, $window) {
		var vm = this;
		var nameId = $state.params.nameId;

		vm.stateIs = 'app';
        vm.goToAddName = goToAddName;
        vm.addMeaning = addMeaning;
        vm.meaning = {};

        (function(){

			console.log("header");

            // initialize the state variable to show the custom footer and header
            vm.stateIs = $state.current.name;

		})();

		// state changed event is triggered from Run - the app kickstarter
		// it will be used to determined whether or not to show the add meaning box, and what items to show on the header- based on the state
		$rootScope.$on('stateChanged', function(e, customStateData){
			vm.stateIs = customStateData.name;
			nameId = customStateData.params.nameId;
			
			console.log(customStateData);
		});

        function addMeaning(){

            apiResource.name.meaning().save({ nameId: nameId }, vm.meaning, function(result){

                    // reload the page to show the newly added meaning
                    $window.location.reload(true);
            },
            function (error) {
                console.log(error);
            });
        }

        function goToAddName(){
            $state.go('app.addName');
        }

	}

})();