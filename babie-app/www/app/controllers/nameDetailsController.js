(function(){

	'use strict';

	angular
		.module('babie.controllers')
		.controller('nameDetailsController', nameDetailsController);

	nameDetailsController.$inject = ['apiResource', '$stateParams'];

	function nameDetailsController(apiResource, $stateParams) {
		var vm = this;
		vm.name = {};

		(function(){

			// TODO: get the name by nameId
			//apiResource.name.name().get({ nameId: $stateParams.nameId}, function(result){
			apiResource.name.name().get({ }, function(result){

				vm.name = result[0];
				console.log(vm.name);
				

			});

		})();
	}

})();