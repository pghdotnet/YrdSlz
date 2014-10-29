/// <reference path="../modules/modules.js"/>

"use strict";

services.factory('AuthInterceptorService', ['$q', '$location', '$window',
    function ($q, $location, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};

                var authData = $window.sessionStorage.getItem("apiKey");
                if (authData) {
                    config.headers.Authorization = 'Bearer ' + authData;
                }

                return config;
            },
            responseError: function (rejection) {
                return $q.reject(rejection);
            }
        }
    }]);