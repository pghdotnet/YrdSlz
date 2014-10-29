/// <reference path="../modules/modules.js"/>

"use strict";

services.factory('UrlService', ['$interpolate', function ($interpolate) {
    return {
        getUrlForToken: function () {
            return 'http://yardsalez.cloudapp.net/token';
        }
    };
}]);
