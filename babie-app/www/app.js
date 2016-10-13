(function(){

'use strict';


angular
  .module('babie', ['ionic',
                    'ngMaterial',
                    'ngResource',
                    'babie.services',
                    'babie.directives',
                    'babie.components.home',
                    'babie.components.header',
                    'babie.components.family',
                    'babie.components.user'])
  .factory('authInterceptor', AuthInterceptor)
  .run(Run)
  .config(Config);


Config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
Run.$inject = ['$ionicPlatform', '$rootScope', '$state'];
AuthInterceptor.$inject = ['authenticationService'];

// authentication interceptor
// when sending ani API request it will auto-magically send token in the header
// when receiving the API response it will check if the response contains token. It will append token on client side likewise.
function AuthInterceptor(authenticationService){
  return {
    // automatically attach Authorization header for every request
    request: function(config) {
      var token = authenticationService.getToken();
      if(token) {
        config.headers["x-access-token"] = token;
      }

      return config;
    },

    // if a token was sent back, save it
    response: function(res) {
      if(res.data.token) {
        authenticationService.saveToken(res.data.token);
        authenticationService.saveTokenExpiration(60 * 60 * 24 * 1000 * 30); // 30 days. make it infinite. until user logs out.
      }

      return res;
    }
  }
}

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

function Config($stateProvider, $urlRouterProvider, $httpProvider){

  // plugin the authentication interceptor
  $httpProvider.interceptors.push('authInterceptor');

   $stateProvider

    // TODO: splash screen
    // .state('splash', {
    //   url: "/",
    //   templateUrl: "templates/splash.html"
    // })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "components/header/header.html",
      controller: 'headerController as header'
    })
    .state('app.home', {
      url: "/home",
      templateUrl: "components/home/home.html",
      controller: 'homeController as home'
    })
    .state('app.familyDetails', {
      url: "/familyDetails/:familyId",
      templateUrl: "components/family/familyDetails.html",
      controller: 'familyDetailsController as familyDetails'
    })
     .state('app.userDetails', {
       url: "/userDetails",
       templateUrl: "components/user/userDetails.html",
       controller: 'userDetailsController as userDetails'
     })
    .state('familyAdd', {
       url: "/familyAdd",
       templateUrl: "components/family/familyAdd.html",
       controller: 'familyAddController as familyAdd'
    })
     .state('login', {
       url: "/login",
       templateUrl: "components/user/login.html",
       controller: 'loginController as login'
     });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');

}

})();


