(function(){

	'use strict';

	angular
		.module('babie.components.header', ['ionic'])
		.controller('headerController', headerController);

	headerController.$inject = ['$q', '$timeout', 'apiResource'];

	function headerController($q, $timeout, apiResource) {
		var vm = this;
    var searchTimer = null;

		vm.searchActivated = false;
    vm.searchText = "";

    vm.toggleSearch = toggleSearch;
    vm.querySearch = querySearch;

    (function(){


		})();

		function toggleSearch(){
      vm.searchText = "";
			vm.searchActivated = !vm.searchActivated;
		}

    // takes care of search functionality
    function querySearch(query){

      // have to return promise first- to the autocomplete box.. so that it will wait for the results
      var defer = $q.defer();

      // user is still typing.. thus cancel the timer
      if(searchTimer){
        $timeout.cancel(searchTimer);
      }

      // search by search-term
      searchTimer = $timeout(function(){
        apiResource.name.name().get({filter: "search equals " + query, page: 1, size: 10}, function(result){
          defer.resolve(result);
        });

      }, 500);

      return defer.promise;
    }
	}

})();
