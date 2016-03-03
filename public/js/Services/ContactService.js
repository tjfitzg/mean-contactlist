angular.module("contactsApp")
    .service("Contacts", function($http) {
        this.getContacts = function(getContactsSuccess,getContactsFail) {
            return $http.get("/contacts").
                then(function(response) {
                    return getContactsSuccess(response);
                }, function(response) {
                    alert("Error finding contacts.");
                    return getContactsFail(response);

                });
        }
        this.createContact = function(contact,createContactSuccess,createContactFail) {
            return $http.post("/contacts", contact).
                then(function(response) {
                    return createContactSuccess(response);
                }, function(response) {
                    alert("Error creating contact.");
                    return createContactFail(response);
                });
        }
        this.getContact = function(contactId,getContactSuccess,getContactFail) {
            var url = "/contacts/" + contactId;
            return $http.get(url).
                then(function(response) {
                    return getContactSuccess(response);
                }, function(response) {
                    alert("Error finding this contact.");
                    return getContactFail(response);
                });
        }
        this.editContact = function(contact,editContactSuccess,editContactFail) {
            var url = "/contacts/" + contact._id;
            console.log(contact._id);
            return $http.put(url, contact).
                then(function(response) {
                    return editContactSuccess(response);
                }, function(response) {
                    console.log(response);
                    alert("Error editing this contact.");
                    return editContactFail(response);
                });
        }
        this.deleteContact = function(contactId,deleteContactSuccess,deleteContactFail) {
            var url = "/contacts/" + contactId;
            return $http.delete(url).
                then(function(response) {
                    return deleteContactSuccess(response);
                }, function(response) {
                    return deleteContactFail(response);
                    alert("Error deleting this contact.");
                });
        }
    })