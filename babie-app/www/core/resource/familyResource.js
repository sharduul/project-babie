(function () {

'use strict';

angular
	.module('babie.services')
	.factory('familyResource', FamilyResource);

  FamilyResource.$inject = ['$resource', 'helperService'];

function FamilyResource($resource, helperService) {

	return {
        family: family
	};


	function family(){

		return $resource(helperService.baseUrl + 'api/family/:familyId', { familyId: '@familyId' }, {
			get: { method: 'GET', isArray: false, cache: false },
			query: { method: 'GET', isArray: true, cache: false },
			save: { method: 'POST' },
			update: { method: 'PUT' }
		});

		// ********* for reference when you implement login and have tokens *********
		// return $resource('https://api.github.com/users/mralexgray/repos', {userId:'@id'},
		// 	{
		// 	    get: {
		// 	        method: 'GET', isArray: true,
		// 	        headers: { 'Authorization': 'Bearer 8E06B654135FA1EA0C8F5433DE57CF7C8C6D3526ABC618077B' }

		// 	    }
		// 	});

	}


}

})();
