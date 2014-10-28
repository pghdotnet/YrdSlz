"use strict";

angular.module('Configuration', [])
    .value('ApiEndpont', {baseUri: "http://localhost/YrdSlz/api"})

var services = angular.module("Services", ['Configuration']);
var controllers = angular.module('Controllers', ['Services']);
