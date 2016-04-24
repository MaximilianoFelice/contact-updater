'use strict';

/* Controllers */

var contactUpdaterControllers = angular.module('contactUpdaterControllers', ['rx']);

contactUpdaterControllers.controller('main', function($scope) {
    $scope.people = [];
    $scope.person = {};
    $scope.add = function() {
        $scope.people.push($scope.person);
        $scope.person = {};
    };
});
