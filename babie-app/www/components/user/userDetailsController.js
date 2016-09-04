(function(){

	'use strict';

	angular
		.module('babie.components.user', ['ionic'])
		.controller('userDetailsController', userDetailsController);

  userDetailsController.$inject = ['apiResource', 'helperService', '$mdDialog'];

	function userDetailsController(apiResource, helperService, $mdDialog) {
		var vm = this;

    vm.user = {};

    vm.showConfirm = showConfirm;

		(function(){

      apiResource.user.user().get({ userId: "aaa@bbb.com" }, function(result){
        console.log(result);
        vm.user = result;
      });

		})();

    function showConfirm(event, family){

      var confirm = $mdDialog.confirm()
        .title('Are you sure?')
        .ariaLabel('Lucky day')
        .targetEvent(event)
        .ok('Delete')
        .cancel('Cancel');
      $mdDialog.show(confirm).then(function() {
        deleteFamily(family);
      }, function() {

      });

    }


    function deleteFamily(familyParam){
      vm.user.families = _.filter(vm.user.families, function(family){
        return family.familyId != familyParam.familyId;
      });

      apiResource.user.user().update({ userId: "aaa@bbb.com" }, vm.user, function(result){
        vm.user = result;
      });
    }

  }

})();
