'use strict';
angular.module('fussAppApp').controller('ProfileCtrl', function($scope, Auth) {
    $scope.message = 'Hello';
    $scope.teplateUrl = '/app/profile/home/home.html';
    $scope.clickNav = function(iCl) {
        for (var i = 0; i < $scope.menu.length; i++) {
            var item = $scope.menu[i];
            if (iCl === item) {
                item.active = true;
                $scope.teplateUrl = item['link'];
            } else {
                item.active = false;
            }
        };
    };
    $scope.menu = [{
        'title': 'Home',
        'link': '/app/profile/home/home.html',
        'active': true,
    }, {
        'title': 'My competitions',
        'link': '/app/profile/competitions/competitions.html',
        'active': false
    }, {
        'title': 'My teams',
        'link': '/app/profile/teams/teams.html',
        'active': false
    }];
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
});