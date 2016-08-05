(function () {

'use strict';

angular
	.module('babie.services', [])
	.factory('apiResource', ApiResource);

ApiResource.$inject = ['nameResource'];

function ApiResource(nameResource) {
  
	return {
		name: nameResource
	}
	
}

})();