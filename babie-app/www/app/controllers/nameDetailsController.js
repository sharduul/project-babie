(function(){

	'use strict';

	angular
		.module('babie.controllers')
		.controller('nameDetailsController', nameDetailsController);

	nameDetailsController.$inject = ['apiResource', '$stateParams'];

	function nameDetailsController(apiResource, $stateParams) {
		var vm = this;
		vm.name = {};
        vm.getRealValue = getRealValue;

		(function(){

			// TODO: get the name by nameId
			//apiResource.name.name().get({ nameId: $stateParams.nameId}, function(result){
			apiResource.name.name().get({ }, function(result){

				//vm.name = result[0];
				//console.log(vm.name);

			});

		})();

        function getRealValue(value){
            return value === undefined ? 0 : value;
        }





        vm.name = {  
		    "nameId":41,
		    "nameInfo":"Alpapappa",
		    "gender":"girl",
		    "labels":[  
				"label1", "very big label", "label again", "veryg label", "adsf", "adsfsdf", "asdfsdfdf", "vedryg label", "adsdf"
		    ],
		    "upVote": 210,
	        "downVote": 19,
		    "meaning":[
			{  
		        "meaningId":9,
		        "meaningInfo":"Little; Small",
		        "upVote": 20,
		        "downVote": 19
		    },
			{  
		        "meaningId":9,
		        "meaningInfo":"The JSON Formatter was created to help with debugging. As JSON data is often output without line breaks to save space.The JSON Formatter was created to help with debugging. As JSON data is often output witho.",
		        "upVote": 120,
		        "downVote": 19
		    },
			{  
		        "meaningId":9,
		        "meaningInfo":"Little; Small",
		        "upVote": 20,
		        "downVote": 119
		    },
			{  
		        "meaningId":9,
		        "meaningInfo":"Little; Small",
		        "upVote": 210,
		        "downVote": 19
		    }]
		};

	}


	

})();