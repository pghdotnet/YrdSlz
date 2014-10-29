/// <reference path="../modules/modules.js"/>

"use strict";

services.factory('AuthenticationTokenService', ['$window', function ($window) {
    return {
        clearAuthToken: function () {
            $window.sessionStorage.removeItem("apiKey");
        },

        setAuthToken: function (token) {
            $window.sessionStorage.setItem("apiKey", token);
        },

        getAuthToken: function () {
            return $window.sessionStorage.getItem("apiKey");
        }
    }
}]);