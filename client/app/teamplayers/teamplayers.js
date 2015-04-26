'use strict';

angular.module('fussAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teamplayers/:id?', {
        templateUrl: 'app/teamplayers/teamplayers.html',
        controller: 'TeamplayersCtrl'
      });
  });
