(function(){

	'use strict';

	angular
		.module('babie.components.family', ['ionic'])
		.controller('familyAddController', familyAddController);

  familyAddController.$inject = ['$q', '$timeout', 'apiResource'];

	function familyAddController($q, $timeout, apiResource) {
		var vm = this;

    vm.family = {
      membersList: []
    };

    vm.querySearch = querySearch;
    vm.save = save;

    (function(){

      console.log("adsfs");

		})();


    function querySearch(query){
      var results = [];
      if(query){
        results = _.filter(vm.userConnections, function(connectionItem){

          // filter out connections which are already in the chips
          if(_.find(vm.family.membersList, { 'userIdHash': connectionItem.userIdHash })){
            return false;
          }

          // return this connection as a new member
          else if(connectionItem.name && connectionItem.name.toLowerCase().indexOf(query.toLowerCase()) > -1){
            return true;
          }

          return false;
        });
      }

      return results;
    }

    function save(){

      console.log(vm.family);

      apiResource.family.family().save(vm.family, function(result){
          console.log(result);
          //$state.go('app.nameDetails', { nameId: result.nameId });
      },
      function (error) {
        console.log(error);
      });
    }


    vm.userConnections = [
      {
        email: "abc1@abc.com",
        name: "name 1"
      },
      {
        email: "abc2@abc.com",
        name: "name 2"
      },
      {
        email: "abc3@abc.com",
        name: "name 3"
      },
      {
        email: "abc4@abc.com",
        name: "name 4"
      },
      {
        email: "abc1@abc.com",
        name: "name 1"
      },
      {
        email: "abc2@abc.com",
        name: "name 2"
      },
      {
        email: "abc3@abc.com",
        name: "name 3"
      },
      {
        email: "abc4@abc.com",
        name: "name 4"
      }
    ];

	}

})();
