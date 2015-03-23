(function () {

'use strict';

angular
	.module('babie.services')
	.factory('nameResource', NameResource);

NameResource.$inject = ['$resource'];

function NameResource($resource) {

	return {
		name: name
	}


	function name(){

		return $resource('https://api.github.com/users/mralexgray/repos', { placeId: '@placeId' }, {
			get: { method: 'GET', isArray: true, cache: false }
		});

		// ********* for reference when you implement login and have tokens *********
		// return $resource('https://beta.energycap.com/api/v2/place?filter=parentId+equals+%276994%27', {userId:'@id'},
		// 	{
		// 	    get: {
		// 	        method: 'GET', isArray: true,
		// 	        headers: { 'Authorization': 'Bearer 8E06B654135FA1EA0C8F5433DE57CF7C8C6D3526ABC618077B' }

		// 	    }
		// 	});
		
	}

}

})();