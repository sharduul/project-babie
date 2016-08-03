(function(){

'use strict';


angular
  .module('babie', ['ionic', 
                    'ngMaterial', 
                    'ngResource',
                    'babie.components.home'])
  .run(Run)
  .config(Config)


Config.$inject = ['$stateProvider', '$urlRouterProvider'];
Run.$inject = ['$ionicPlatform', '$rootScope', '$state'];

function Run($ionicPlatform, $rootScope, $state) {
  
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }

  });

  // this event is fired whenever there is change of route state
  $rootScope.$on('$stateChangeSuccess',  function(e, stateData) {

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
      abstract: true
    })
    .state('app.home', {
      url: "/home",
      templateUrl: "components/home/home.html",
      controller: 'homeController as home'
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');

}

})();


