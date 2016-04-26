'use strict';

/* Controllers */

var contactUpdaterControllers = angular.module('contactUpdaterControllers', ['rx', 'GoogleApiService']);

contactUpdaterControllers.controller('main', function($scope) {
    $scope.people = [];
    $scope.person = {};
    $scope.add = function() {
        $scope.people.push($scope.person);
        $scope.person = {};
    };
});

contactUpdaterControllers.controller('login', ['$scope', 'contacts', function($scope, gapiService) {
  debugger
}]);