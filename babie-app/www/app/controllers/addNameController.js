(function(){

	'use strict';

	angular
		.module('babie.controllers')
		.controller('addNameController', addNameController);

	addNameController.$inject = ['apiResource'];

	function addNameController(apiResource) {
		var vm = this;
		vm.name = {};
		vm.addName = addName;

		(function(){

			console.log("add name");

			// initialize name properties

		})();

		function addName(){
			
		}
		
	}

})();