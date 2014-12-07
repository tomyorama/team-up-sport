'use strict';

angular.module('fussAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/match', {
        templateUrl: 'app/match/match.html',
        controller: 'MatchCtrl'
      });
  });
