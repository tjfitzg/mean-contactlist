angular.module("contactsApp").controller('NewContactController',['$scope','$location','Contacts',function($scope,$location,Contacts){
	
	createContactSuccess = function(response){
		console.log('New contact Created:' + response.data);
		var contactUrl = "/contact/" + response.data._id;
	    $location.path(contactUrl);
	}
	createContactFail = function(response){
		console.log('Error: ' + response);
	}

	$scope.back = function() {
	    $location.path("#/");
	}

	$scope.saveContact = function(contact) {
	    Contacts.createContact(contact,createContactSuccess,createContactFail);
	}

}]);
