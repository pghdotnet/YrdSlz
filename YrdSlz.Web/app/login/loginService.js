/// <reference path="../modules/modules.js"/>
/// <reference path="../infrastructure/urlService.js" />
/// <reference path="authenticationTokenService.js" />

"use strict";

services.factory('LoginService', ['$http', 'UrlService', '$location', 'AuthenticationTokenService',
    function ($http, urlService, $location, authenticationTokenService) {
        var loginError = "";

        function loginSuccess(response) {
            loginError = "";
            authenticationTokenService.setAuthToken(response.data.access_token);
        };

        function loginFailure(response) {
            loginError = "Unable to login. Status " + response.status;
        };

        return {
            login: function (username, password) {
                authenticationTokenService.clearAuthToken();
                var formData = "grant_type=password&username=" + username + "&password=" + password;

                var promise = $http.post(urlService.getUrlForToken(), formData, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                });
                promise.then(loginSuccess, loginFailure);

                return promise;
            },

            logout: function () {
                loginError = "";
                authTokenService.clearAuthToken();
                $location.search("").replace();
                $location.path('/');
            },

            getErrorMessage: function () {
                return loginError;
            },
        };
    }]);
