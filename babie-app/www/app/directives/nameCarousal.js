(function(){

	'user strict';

	angular
		.module('babie.directives',[])
		.directive('nameCarousal', NameCarousal);

	NameCarousal.$inject = [];

	function NameCarousal(){

		return {

			restrict: 'E',
			templateUrl: 'templates/directives/nameCarousal.html'

		}
	}


})();