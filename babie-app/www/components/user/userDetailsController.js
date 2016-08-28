(function(){

	'use strict';

	angular
		.module('babie.components.user', ['ionic'])
		.controller('userDetailsController', userDetailsController);

  userDetailsController.$inject = ['apiResource', 'helperService'];

	function userDetailsController(apiResource, helperService) {
		var vm = this;


		(function(){

      console.log("user");

		})();


    vm.babyNames = [{"_id":"5528a260b77373e106cd386c","nameId":1536,"nameInfo":"Om","gender":"boy","labels":[],"meaning":[{"meaningId":308,"meaningInfo":"Omkar; Creation; The essence of life","_id":"5528a260b77373e106cd3f04"}]},{"_id":"5528a260b77373e106cd3684","nameId":1537,"nameInfo":"Om Prakash","gender":"boy","labels":[],"meaning":[{"meaningId":672,"meaningInfo":"The light of creation; Light of the essence of life","_id":"5528a260b77373e106cd3d1c"}]},{"_id":"5528a260b77373e106cd3775","nameId":1538,"nameInfo":"Omkar","gender":"boy","labels":[],"meaning":[{"meaningId":1399,"meaningInfo":"Beginning of Life; Creator of OM","_id":"5528a260b77373e106cd3e0d"}]},{"_id":"5528a260b77373e106cd3813","nameId":468,"nameInfo":"Oorja","gender":"girl","labels":[],"meaning":[{"meaningId":1185,"meaningInfo":"Energy","_id":"5528a260b77373e106cd3eab"}]},{"_id":"5528a260b77373e106cd3438","nameId":469,"nameInfo":"Oormila","gender":"girl","labels":[],"meaning":[{"meaningId":1550,"meaningInfo":"Daughter of King Janaka of Mithila; The youger sister of Sita; Name of Lakshman's wife","_id":"5528a260b77373e106cd3ad0"}]}];

  }

})();
