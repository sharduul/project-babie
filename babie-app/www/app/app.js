(function(){

'use strict';


angular
  .module('babie', ['ionic', 'ngMaterial', 'ngResource', 'babie.controllers', 'babie.services', 'babie.directives'])
  .run(Run)
  .config(Config)


Config.$inject = ['$stateProvider', '$urlRouterProvider'];
Run.$inject = ['$ionicPlatform'];

function Run($ionicPlatform) {
  
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
      templateUrl: "templates/header.html"
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