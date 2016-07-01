var module = angular.module('app', []);
		module.factory('myfactory', function () {
				//to create unique contact id
				var employee_id = 1;
				
				//contacts array to hold list of all contacts
				var contacts = [{
					id: 1,
					'name': 'Viral',
					'age' : 20,
					'salary' : 50000
				}];
				
				//save method create a new contact if not already exists else update the existing object
				contacts.save = function (contact) {
					if (contact.id == null) {
						//if this is new contact, add it in contacts array
						contact.id = employee_id++;
						contacts.push(contact);
					} else {
						//for existing contact, find this contact using id and update it.
						for (i in contacts) {
							if (contacts[i].id == contact.id) {
								contacts[i] = contact;
							}
						}
					}
				}
				//simply search contacts list for given id and returns the contact object if found
				contacts.get = function (id) {
					for (i in contacts) {
						if (contacts[i].id == id) {
							return contacts[i];
						}
					}
				}
				
				//simply returns the contacts list
				contacts.list = function () {
					return contacts;
				}
				return contacts;
			});
		module.controller('ContactController', function ($scope, myfactory) {
			$scope.contacts = myfactory.list();
			$scope.saveContact = function () {
				myfactory.save($scope.newcontact);
				$scope.newcontact = {};
			}
		})