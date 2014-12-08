'use strict';
angular.module('fussAppApp').config(function($routeProvider) {
    $routeProvider.when('/teams', {
        templateUrl: 'app/teams/teams.html',
        controller: 'TeamsCtrl'
    }).when('/teams/edit/:id', {
        templateUrl: 'app/teams/teamsEdit.html',
        controller: 'TeamsEditCtrl'
    }).when('/teams/new', {
        templateUrl: 'app/teams/teamsNew.html',
        controller: 'TeamsNewCtrl'
    });
});