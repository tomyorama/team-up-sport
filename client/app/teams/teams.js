'use strict';

angular.module('fussAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teams', {
        templateUrl: 'app/teams/teams.html',
        controller: 'TeamsCtrl'
      });
  });
