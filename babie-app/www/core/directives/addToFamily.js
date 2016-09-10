(function () {

'use strict';

angular
	.module('babie.directives', [])
	.directive('addToFamily', addToFamily);

addToFamily.$inject = ['$timeout', '$ionicPopup', 'apiResource'];

function addToFamily($timeout, $ionicPopup, apiResource) {

  return {
    restrict: 'E', // E = element, A = attribute, C = class, M = comment
    template: '<md-button flex class="md-icon-button" aria-label="add" ng-click="showPopup()">' +
                '<i class="material-icons">group_add</i>' +
              '</md-button>',
    scope:{
      name: '='
    },
    link: function ($scope, element) {

      $scope.allFamilies = [];
      $scope.selectedFamilies = [];

      $scope.addToFamily = addToFamily;

      var template =  '<md-list class="">' +
                        '<md-list-item class="md-2-line" layout="row" ng-repeat="family in allFamilies" ng-click="addToFamily(family)">' +
                          '<h3 flex="80">{{ family.familyName }}</h3>' +
                          '<div flex="20" aria-label="add" ng-if="!family.addToFamily">' +
                            '<i class="material-icons">add_circle</i>' +
                          '</div>' +
                          '<div class="md-icon-button" aria-label="remove" ng-if="family.addToFamily">' +
                            '<i class="material-icons">check</i>' +
                          '</div>' +
                        '</md-list-item>' +
                      '</md-list>';

      var getUserFamilies = getUserFamilies;

      // Triggered on a button click, or some other target
      $scope.showPopup = function() {

        getUserFamilies().then(function(){

          $scope.data = {};

          // An elaborate, custom popup
          var myPopup = $ionicPopup.show({
            template: template,
            title: 'Choose Family',
            subTitle: 'Please select families to add this baby name',
            scope: $scope,
            buttons: [
              { text: 'Cancel' },
              {
                text: '<b>Save</b>',
                type: 'button-positive',
                onTap: function(e) {
                  _.forEach($scope.selectedFamilies, function(family){
                    apiResource.family.family().update({ familyId: family.familyId }, family, function(result){
                      $scope.allFamilies = result;
                      console.log(result);
                    },
                    function (error) {
                      console.log(error);
                    });

                  });

                }
              }
            ]
          });


        });

      };

      function addToFamily(family){
        var index = _.findIndex(family.nameList, { 'nameID': $scope.name.nameId });
        if(index < 0){

          var nameToAdd = {
            "addedByMemberId": "abc1@abc.com",
            "gender": $scope.name.gender,
            "nameId": $scope.name.nameId,
            "nameInfo": $scope.name.nameInfo
          };

          family.nameList.push(nameToAdd);
          $scope.selectedFamilies.push(family);

        }

        family.addToFamily = !family.addToFamily;
      }


      getUserFamilies = function(){

         return apiResource.family.family().get({ filter: "memberId equals zxx@xxx.com"}, function(result){
            $scope.allFamilies = result;
          },
          function (error) {
            console.log(error);
          }).$promise;

      };

    }
  };

}

})();
