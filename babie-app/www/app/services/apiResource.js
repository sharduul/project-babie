(function () {

'use strict';

angular
	.module('babie.services', [])
	.factory('apiResource', ApiResource);

ApiResource.$inject = ['$resource', 'nameResource'];

function ApiResource($resource, nameResource) {
  
	return {
		name: nameResource
	}
	
}

})();