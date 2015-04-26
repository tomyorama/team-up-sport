'use strict';
angular.module('fussAppApp').controller('TeamsEditCtrl', function($scope, $http, $routeParams, $location) {
    $http({
        method: 'GET',
        url: 'api/teams/' + $routeParams.id
    }).
    success(function(data, status, headers, config) {
        $scope.item = data;
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("ERROR GET!!");
    });
});