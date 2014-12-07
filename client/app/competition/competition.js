'use strict';
angular.module('fussAppApp').config(function($routeProvider) {
    $routeProvider.when('/competition', {
        templateUrl: 'app/competition/competition.html',
        controller: 'CompetitionCtrl'
    });
    $routeProvider.when('/competition/new', {
        templateUrl: 'app/competition/competitionNew.html',
        controller: 'CompetitionNewCtrl'
    });
    $routeProvider.when('/competition/edit/:id', {
        templateUrl: 'app/competition/competitionEdit.html',
        controller: 'CompetitionEditCtrl'
    });
});