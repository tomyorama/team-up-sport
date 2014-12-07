'use strict';
angular.module('fussAppApp').controller('TeamsCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'api/teams'
    }).
    success(function(data, status, headers, config) {
        $scope.teams = [];
        if (data.length > 0) {
            for (var i = 0; i < data.length;) {
                $scope.teams.push({
                    team1: data[i],
                    team2: data[i + 1]
                });
                i = i + 2;
            };
        }
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("ERROR GET!!");
    });
});