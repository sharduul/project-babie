(function () {

'use strict';

angular
	.module('babie.services')
	.factory('helperService', HelperService);

HelperService.$inject = [];

function HelperService() {

	var regexProvider = {
		startsWith: startsWith
	}

	function startsWith(input){
		return new RegExp('^' + input, 'g');
	}

	function alphabetString(){
		//return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return 'A';
	}

	return {
		regexProvider: regexProvider,
		alphabetString: alphabetString
	}

}

})();