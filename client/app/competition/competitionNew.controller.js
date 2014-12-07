'use strict';
angular.module('fussAppApp').controller('CompetitionNewCtrl', function($scope, $http) {
    //TEST
    $('#myCarousel').hide();
    $scope.$on("$destroy", function() {
        $('#myCarousel').show();
    });
    // $http({
    //     method: 'GET',
    //     url: 'api/competitions   $('#myCarousel').hide();'
    // }).
    // success(function(data, status, headers, config) {
    //     $scope.competitions = data;
    // }).
    // error(function(data, status, headers, config) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //     console.log("ERROR GET!!");
    // });
});