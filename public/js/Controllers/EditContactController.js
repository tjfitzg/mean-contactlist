angular.module("contactsApp").controller('EditContactController',['$scope','$routeParams','Contacts',function($scope,$routeParams,Contacts){
	getContactSuccess = function(response){
		$scope.contact = response.data;
		console.log($scope.contact);
	}
	getContactFail = function(response){
		console.log('Error: ' + response);
	}
	editContactSuccess = function(response){
		console.log('Edit contact success');
	}
	editContactFail = function(response){
		console.log('Error: ' + response);
	} 
	deleteContactSuccess = function(response){
		$scope.contact = response.data;
		console.log($scope.contact);
	}
	deleteContactFail = function(response){
		console.log('Error: ' + response);
	}


    Contacts.getContact($routeParams.contactId,getContactSuccess,getContactFail);

    //useless comment
    $scope.toggleEdit = function() {
        $scope.editMode = true;
        $scope.contactFormUrl = "contact-form.html";
    }

    $scope.back = function() {
        $scope.editMode = false;
        $scope.contactFormUrl = "";
    }

    $scope.saveContact = function(contact) {
        Contacts.editContact(contact,editContactSuccess,editContactFail);
        $scope.editMode = false;
        $scope.contactFormUrl = "";

    }

    $scope.deleteContact = function(contactId) {
        Contacts.deleteContact(contactId,deleteContactSuccess,deleteContactFail);
    }


}]);
