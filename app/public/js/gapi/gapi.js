"use strict";

var gapiService = angular.module('GoogleApiService', []);

gapiService.factory('contacts', function($q){
  var promise = $q.defer();

  window.fulfillGapi = function(){
    promise.resolve();
  };

  return {
    resolve: promise.promise
  };
});