/// <reference path="../modules/modules.js"/>

"use strict";

services.factory('UrlService', ['$interpolate', function ($interpolate) {
    return {
        getUrlForToken: function () {
            //return 'http://yardsalez.cloudapp.net/token';
            return 'http://localhost:61224/token';
        },

        getUrlForUpcomingYardSales: function() {
            //return 'http://yardsalez.cloudapp.net/yardsale/';
            return 'http://localhost:61224/yardsale/';
        }
    };
}]);
