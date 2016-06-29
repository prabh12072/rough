'use strict';
var samplApp = angular.module('abp001App', [])
    samplApp.constant("MY_EVENTS", {
        "CLICK": "click",
        "DESTROY": "$destroy",
        "GET_NOTIFICATION": "myNewNotification"
    })
    samplApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    samplApp.directive('myButton',
    ['MY_EVENTS', function(MY_EVENTS) {
        return {
            restrict: "E",
            link: function(scope, elem, attrs) {
                elem.on(MY_EVENTS.CLICK, function() {
			// Do something
		});
            }
        };
    }]);

    samplApp.controller('MainCtrl', function($scope) {
    
    $scope.message = 'This is Add new order screen';
    
});
