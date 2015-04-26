'use strict';
angular.module('fussAppApp').controller('TeamsNewCtrl', function($scope, $http, $location) {
    $scope.item = {};
    $scope.errors = {};
    $scope.create = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            $http({
                method: 'POST',
                url: 'api/teams',
                data: $scope.item
            }).
            success(function(data, status, headers, config) {
                $location.path('/competition/edit/' + data._id);
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log("ERROR GET!!");
                $scope.errors = {};
                // Update validity of form fields that match the mongoose errors
                angular.forEach(data, function(error, field) {
                    form[field].$setValidity('mongoose', false);
                    $scope.errors[field] = error.message;
                });
            });
        }
    };
    $scope.cancel = function() {
        $location.path('/teams');
    };
});