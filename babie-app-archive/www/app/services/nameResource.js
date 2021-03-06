(function () {

'use strict';

angular
	.module('babie.services')
	.factory('nameResource', NameResource);

NameResource.$inject = ['$resource', 'helperService'];

function NameResource($resource, helperService) {

	return {
        name: name,
        meaning: meaning
	};


	function name(){

		return $resource(helperService.baseUrl + 'api/name/:nameId', { nameId: '@nameId' }, {
			get: { method: 'GET', isArray: true, cache: false },
			save: { method: 'POST' }
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

	function meaning(){
		return $resource(helperService.baseUrl + 'api/name/:nameId/meaning', { nameId: '@nameId' }, {
			save: { method: 'POST' }
		});
	}

}

})();