'use strict';
angular.module('fussAppApp').config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
    });
});
