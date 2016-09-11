(function(){

	'use strict';

	angular
		.module('babie.components.family')
		.controller('familyDetailsController', familyDetailsController);

  familyDetailsController.$inject = ['apiResource', '$ionicSlideBoxDelegate', '$state'];

	function familyDetailsController(apiResource, $ionicSlideBoxDelegate, $state) {
		var vm = this;
    var familyId = $state.params.familyId;

    vm.family = {};
    vm.slideIndex = 0;
    vm.$ionicSlideBoxDelegate = $ionicSlideBoxDelegate;

    vm.slideChanged = slideChanged;
    vm.removeMember = removeMember;

    (function(){

      apiResource.family.family().get({ familyId: familyId }, function(result){
        vm.family = result;
      });

		})();

    function slideChanged(index){
      vm.slideIndex = index;
    }

    function removeMember(memberParam){
      vm.family.memberList = _.filter(vm.family.memberList, function(member){
        return member.memberId !== memberParam.memberId;
      });

      updateFamily();
    }

    function updateFamily(){
      apiResource.family.family().update({ familyId: familyId }, vm.family, function(result){
        vm.family = result;
      });
    }

  }

})();
