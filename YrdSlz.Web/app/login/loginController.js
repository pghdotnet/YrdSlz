/// <reference path="loginService.js" />
/// <reference path="../modules/modules.js" />

"use strict";

controllers.controller('LoginController', ['$location', 'LoginService',
    function ($location, loginService) {
        var vm = this;
        vm.loginError = loginService.getErrorMessage();

        function loginSuccess() {
            vm.loginError = '';
            $location.path("/events");
        };

        function loginFailure() {
            vm.loginError = loginService.getErrorMessage();
        };

        vm.submit = function () {
            // Before submitting, check input fields and make sure that any auto-fill values were applied to the scope bindings.
            //$('input').checkAndTriggerAutoFillEvent();

            vm.loginError = '';
            loginService.login(vm.username, vm.password).then(loginSuccess, loginFailure);
        };
    }]);