(function(){

	'use strict';

	angular
		.module('babie.controllers', ['ionic'])
		.controller('homeController', homeController);

	homeController.$inject = ['apiResource'];

	function homeController(apiResource) {
		var vm = this;

		vm.testText = '...still the home page!!!';


		apiResource.name.name().get(function(result){

			console.log(result);
		})

		

	}

})();