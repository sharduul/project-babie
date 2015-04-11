(function(){

	'user strict';

	angular
		.module('babie.directives',[])
		.directive('nameCarousal', NameCarousal);

	NameCarousal.$inject = [];

	function NameCarousal(){

		return {

			restrict: 'E',
			templateUrl: 'templates/directives/nameCarousal.html',
			scope: { // create an isolate scope
				name: '='
			},
			bindToController: true, // when you have to bind the ISOLATE scope to the controller
			controllerAs: 'nameCarousal',
			controller: function(){
				var vm = this;

				//console.log(vm.name);
				
			}

		}
	}

})();