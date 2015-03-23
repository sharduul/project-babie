(function(){

	'use strict';

	angular
		.module('babie.controllers', ['ionic'])
		.controller('homeController', homeController);

	homeController.$inject = [];

	function homeController() {
		var vm = this;

		vm.testText = '...still the home page!!!';

	}

})();