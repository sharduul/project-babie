(function(){

	'use strict';

	angular
		.module('babie.controllers')
		.controller('addNameController', addNameController);

	addNameController.$inject = ['apiResource', '$state'];

	function addNameController(apiResource, $state) {
		var vm = this;
		vm.name = {};
		vm.addName = addName;

		(function(){

			console.log("add name");

			// initialize name properties

		})();

		function addName(){

			apiResource.name.name().save(vm.name, function(result){

                $state.go('app.nameDetails', { nameId: result.nameId });
            },
            function (error) {
			    console.log(error);
			});
		}
	}

})();