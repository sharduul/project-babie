(function () {

'use strict';

angular
	.module('babie.services', [])
	.factory('apiResource', ApiResource);

ApiResource.$inject = ['nameResource', 'familyResource', 'userResource'];

function ApiResource(nameResource, familyResource, userResource) {

	return {
		name: nameResource,
    family: familyResource,
    user: userResource
	}

}

})();
