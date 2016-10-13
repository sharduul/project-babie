(function(){

	'use strict';

	angular
		.module('babie.components.user')
		.controller('loginController', loginController);

  loginController.$inject = ['apiResource', '$window', '$ionicSlideBoxDelegate'];

	function loginController(apiResource, $window, $ionicSlideBoxDelegate) {
		var vm = this;

    vm.user = {};
    vm.slideIndex = 0;
    vm.$ionicSlideBoxDelegate = $ionicSlideBoxDelegate;

    vm.slideChanged = slideChanged;
    vm.register = register;
    vm.login = login;

		(function(){

      apiResource.user.user().get({ userId: "aaa@bbb.com" }, function(result){
        console.log(result);
        vm.user = result;
      });

		})();

    function slideChanged(index){
      vm.slideIndex = index;
    }

    function register(){

      // call the create user API
      apiResource.user.user().save(vm.user, function(result){
        // registration is successful
        // redirect to user's home page
        $window.location = "index.html#/app/home";

        // reload page so that the header could be changed
        // $state.reload is not working with $state.go
        $window.location.reload();

      }, function(error){
        console.log(error);
      });
    }

    function login(){

      // call the login API
      apiResource.user.login().login(vm.user, function(result){
        console.log(result);

        if(result.success){
          // login is successful
          // redirect to user's home page
          //$window.location = "index.html#/app/home";

          // reload page so that the header could be changed
          //$window.location.reload();
        }
        else{
          console.log("login failed");
        }

      }, function(error){
        console.log(error);
      });

    }


  }

})();
