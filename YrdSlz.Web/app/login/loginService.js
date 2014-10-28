/// <reference path="../modules/modules.js"/>
/// <reference path="../infrastructure/urlService.js" />

"use strict";

services.factory('LoginService', ['$http', 'UrlService', '$location',
    function ($http, urlService, $location) {
        var loginError = "";

        function loginSuccess(response) {
            loginError = "";
        };

        function loginFailure(response) {
            loginError = response.data.error;
        };

        return {
            login: function (username, password) {
                var formData = "grant_type=password&username=" + username + "&password=" + password;

                var promise = $http.post(urlService.getUrlForToken(), formData, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                });
                promise.then(loginSuccess, loginFailure);

                return promise;
            },

            getErrorMessage: function () {
                return loginError;
            },
        };
    }]);
