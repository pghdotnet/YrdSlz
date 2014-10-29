"use strict";

angular.module('Configuration', [])
    .value('ApiEndpont', { baseUri: "http://yardsalez.cloudapp.net/" })

var services = angular.module("Services", ['Configuration']);
var controllers = angular.module('Controllers', ['Services']);
