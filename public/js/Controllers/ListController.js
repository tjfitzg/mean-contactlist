angular.module("contactsApp").controller("ListController",['$scope', 'Contacts',function($scope,Contacts){
    getContactsSuccess = function(response){
    	$scope.contacts = response.data;
    	console.log($scope.contacts);
    	return;
    }
    getContactsFail = function(response){
    	console.log('Error: ' + response);
    	return;
    }
    Contacts.getContacts(getContactsSuccess,getContactsFail);

}]);