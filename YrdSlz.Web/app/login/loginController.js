/// <reference path="loginService.js" />
/// <reference path="../modules/modules.js" />

"use strict";

controllers.controller('LoginController', ['$scope', '$location', 'LoginService',
    function ($scope, $location, loginService) {
        $scope.loginError = loginService.getErrorMessage();

        function loginSuccess() {
            $scope.loginError = '';
            $location.path("/home");
        };

        function loginFailure() {
            $scope.loginError = loginService.getErrorMessage();
        };

        $scope.submit = function () {
            $scope.loginError = '';
            loginService.login($scope.username, $scope.password).then(loginSuccess, loginFailure);
        };
    }]);