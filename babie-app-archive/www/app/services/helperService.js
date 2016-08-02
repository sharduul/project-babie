(function () {

'use strict';

angular
	.module('babie.services')
	.factory('helperService', HelperService);

HelperService.$inject = [];

function HelperService() {

	var regexProvider = {
		startsWith: startsWith
	};

	//var baseUrl = 'http://localhost:8000/';
	var baseUrl = 'http://babie-service.herokuapp.com/';

	function startsWith(input){
		return new RegExp('^' + input, 'g');
	}

	function alphabetString(){
		return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	return {
		baseUrl: baseUrl,
		regexProvider: regexProvider,
		alphabetString: alphabetString
	}

}

})();