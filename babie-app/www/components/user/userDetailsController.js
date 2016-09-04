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

    function showConfirm(event){

      var confirm = $mdDialog.confirm()
        .title('Are you sure?')
        .ariaLabel('Lucky day')
        .targetEvent(event)
        .ok('Delete')
        .cancel('Cancel');
      $mdDialog.show(confirm).then(function() {
        $scope.status = 'You decided to get rid of your debt.';
      }, function() {

      });

    }

  }

})();
