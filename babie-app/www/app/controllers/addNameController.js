(function(){

	'use strict';

	angular
		.module('babie.controllers')
		.controller('addNameController', addNameController);

	addNameController.$inject = ['apiResource'];

	function addNameController(apiResource) {
		var vm = this;

		(function(){

			console.log("add name");

		})();
		
	}

})();