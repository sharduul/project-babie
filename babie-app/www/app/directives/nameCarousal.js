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
			controller: function($window){
				var vm = this;

				vm.goToNameDetails = goToNameDetails;
				vm.getRealValue = getRealValue;

				function getRealValue(value){
					return value === undefined ? 0 : value;
				}



				function goToNameDetails(){
					console.log("sdgfdfg");
					$window.location = "#/app/nameDetails";
				}

				//console.log(vm.name);
				
			}

		}
	}

})();