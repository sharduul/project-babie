(function () {

'use strict';

angular
	.module('babie.services', [])
	.factory('apiResource', ApiResource);

ApiResource.$inject = ['nameResource', 'familyResource'];

function ApiResource(nameResource, familyResource) {

	return {
		name: nameResource,
    family: familyResource
	}

}

})();
