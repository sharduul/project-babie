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
    },
    link: function ($scope, element) {

      $scope.allFamilies = [];
      $scope.allFamilies = [];

      var template =  '<md-list class="">' +
                        '<md-list-item class="md-2-line" layout="row" ng-repeat="family in allFamilies">' +
                          '<h3 flex="80">{{ family.familyName }}</h3>' +
                          '<div flex="20"><md-button class="md-icon-button" aria-label="add" ng-if="!family.addToFamily" ng-click="family.addToFamily = true">' +
                            '<i class="material-icons">add_circle</i>' +
                          '</md-button>' +
                          '<md-button class="md-icon-button" aria-label="remove" ng-if="family.addToFamily" ng-click="family.addToFamily = false">' +
                            '<i class="material-icons">check</i>' +
                          '</md-button></div>' +
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
                  if (!$scope.data.wifi) {
                    //don't allow the user to close unless he enters wifi password
                    e.preventDefault();
                  } else {
                    return $scope.data.wifi;
                  }
                }
              }
            ]
          });

          //myPopup.then(function(res) {
          //  console.log('Tapped!', res);
          //});

          //$timeout(function() {
          //  myPopup.close(); //close the popup after 3 seconds for some reason
          //}, 3000);

        });

      };


      getUserFamilies = function(){

         return apiResource.family.family().get({}, function(result){
             $scope.allFamilies = result;
            console.log(result);
          },
          function (error) {
            console.log(error);
          }).$promise;

      };




    }
  };

  };

})();
