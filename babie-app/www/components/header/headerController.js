(function(){

	'use strict';

	angular
		.module('babie.components.header', ['ionic'])
		.controller('headerController', headerController);

	headerController.$inject = [];

	function headerController() {
		var vm = this;

		vm.searchActivated = false;
		vm.toggleSearch = toggleSearch;

        (function(){

			console.log("header");

		})();

		function toggleSearch(){
			vm.searchActivated = !vm.searchActivated;
		}
	}

})();