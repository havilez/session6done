'use strict';

/* App Module */

var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',
    'helloWorldControllers'

]);


helloWorldApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'MainCtrl'
                }).when('/show', {
                    templateUrl: 'partials/show.html',
                    controller: 'ShowCtrl'
                }).otherwise({ templateUrl: 'partials/404.html',
                                controller: 'ErrorCtrl'});

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
