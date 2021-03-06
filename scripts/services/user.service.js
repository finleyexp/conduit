/* The UserService pulls the information for the current user*/
angular.module('conduit.services').factory('UserService', function($http, $window) { 
	
	var user = {};
	var load = function() {
		var query = $window.location.search.substring(1);
		if(query) {
			var params = JSON.parse('{"' + decodeURI(query)
											.replace(/"/g, '\\"')
											.replace(/&/g, '","')
											.replace(/=/g, '":"')
									+ '"}');
		}
		if(params && params.code) {
			user = $http.get('/userInfo?code=' + params.code).then(function(response) {
					return response.data;
			});
		} else if (params && params.id) {
			user = $http.get('/userInfo?id=' + params.id).then(function(response) {
				return response.data;
		});
		} else {
			user = Promise.reject('No auth code');
		}
		/*
		var user = $http.get('/userInfo?id=' + uid).then(function(response) {
			return response.data;
		});*/
	}

	load();

    var getUser = function() {
	    return user;
	};
	
	return {
		getUser: getUser
	};
});