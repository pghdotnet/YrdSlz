'use strict';

var app = angular.module('YrdSlzApp');

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html'
        });

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html'
        });

    }]);