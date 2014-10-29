/// <reference path="../../lib/angular.js"/>
/// <reference path="../modules/modules.js"/>
/// <reference path="../login/authInterceptorService.js" />

'use strict';

services.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptorService');
}]);