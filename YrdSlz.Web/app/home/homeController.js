/// <reference path="../modules/modules.js" />

"use strict";

controllers.controller('HomeController', ['$scope', '$http', 'UrlService',
    function ($scope, $http, urlService) {

        $http.get(urlService.getUrlForUpcomingYardSales())
            .success(function (response) {
                $scope.yardSale = response[0];
            });
    }]);