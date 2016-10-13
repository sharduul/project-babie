(function() {
    'use strict';

    angular
        .module('babie.services')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$window'];

    function authenticationService($window){
        return{
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            saveToken: saveToken,
            getToken: getToken,
            saveTokenExpiration: saveTokenExpiration,
            isExpired: isExpired
        };

        // TODO: remove this function if not needed
        function login(){
            return null;
        }

        // remove the token from window's localstorage so on logout
        function logout(){
            $window.localStorage.removeItem("x-access-token");
            $window.localStorage.removeItem("token-expiration");
        }

        // save the token received from the server on window's localstorage.
        // so that it can be sent to the server on every request
        function saveToken(token){
            $window.localStorage["x-access-token"] = token;
        }

        // retrieve the authentication token from window's localstorage
        function getToken(){
            return $window.localStorage["x-access-token"];
        }

        // this saves token expiration time
        // if token is expired, user has to login again
        function saveTokenExpiration(milliSeconds){
            $window.localStorage["token-expiration"] = Date.now() + milliSeconds;
        }

        // checks if authentication token is expired
        function isExpired(){
            return $window.localStorage["token-expiration"] < Date.now();
        }

        // whether the user is authenticated or not
        // currently used to display different headers based on authentication information
        function isAuthenticated(){
            // if token is set, that means user is authenticated
            // if not then, user is not authenticated
            return $window.localStorage["x-access-token"] ? true : false;
        }

    }
})();
