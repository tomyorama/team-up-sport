'use strict';
angular.module('fussAppApp').controller('CompetitionCtrl', function($scope, $http) {
    $scope.message = 'Hello';
    $http({
        method: 'GET',
        url: 'api/competitions'
    }).
    success(function(data, status, headers, config) {
        $scope.competitions = data;
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("ERROR GET!!");
    });
});