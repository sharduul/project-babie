(function(){

	'use strict';

	angular
		.module('babie.components.header', ['ionic'])
		.controller('headerController', headerController);

	headerController.$inject = [];

	function headerController() {
		var vm = this;

        (function(){

			console.log("header");

		})();

	}

})();