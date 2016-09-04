(function () {

'use strict';

angular
	.module('babie.services')
	.factory('userResource', UserResource);

UserResource.$inject = ['$resource', 'helperService'];

function UserResource($resource, helperService) {

	return {
        user: user
	};

	function user(){

		return $resource(helperService.baseUrl + 'api/user/:userId', { userId: '@userId' }, {
			query: { method: 'GET', isArray: true, cache: false },
			get: { method: 'GET', isArray: false, cache: false },
			save: { method: 'POST' }
		});

	}

}

})();
