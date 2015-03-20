(function(){

'use strict';


angular
  .module('babie', ['ionic'])
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
      templateUrl: "templates/header.html"
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/code');

}

})();