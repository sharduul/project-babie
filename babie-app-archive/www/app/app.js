(function(){

'use strict';


angular
  .module('babie', ['ionic', 'ngMaterial', 'ngResource', 'babie.controllers', 'babie.services', 'babie.directives'])
  .run(Run)
  .config(Config)


Config.$inject = ['$stateProvider', '$urlRouterProvider'];
Run.$inject = ['$ionicPlatform', '$rootScope', '$state'];

function Run($ionicPlatform, $rootScope, $state) {
  
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  // this event is fired whenever there is change of route state
  $rootScope.$on('$stateChangeSuccess',  function(e, stateData) {

    // create custom state data to be passed to the event listeners
    var customStateData = {
      name: $state.current.name,
      params: $state.params
    }

    // tell the event listeners that the state is now changed
    // this is mainly used to hide/unhide the add meaning box... and to show/hide header menu items
    $rootScope.$emit('stateChanged', customStateData);

  });

}

function Config($stateProvider, $urlRouterProvider){

   $stateProvider

    // TODO: splash screen
    // .state('splash', {
    //   url: "/",
    //   templateUrl: "templates/splash.html"
    // })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/header.html",
      controller: "headerController as headerCtrl" // this is the controller for header - top and side
    })
    .state('app.home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: 'homeController as home'
    })
    .state('app.nameDetails', {
      url: "/nameDetails/:nameId",
      templateUrl: "templates/nameDetails.html",
      controller: 'nameDetailsController as nameDetailsCtrl'
    })
    .state('app.addName', {
      url: "/addName",
      templateUrl: "templates/addName.html",
      controller: 'addNameController as addNameCtrl'
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

}

})();