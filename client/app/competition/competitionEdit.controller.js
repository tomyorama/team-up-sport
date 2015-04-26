'use strict';
angular.module('fussAppApp').controller('CompetitionEditCtrl', function($scope, $http, $routeParams) {

    $http({
        method: 'GET',
        url: 'api/competitions/' + $routeParams.id
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