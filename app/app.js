'use strict';
/*var appFiremanPro = angular.module("myApp",["ngRoute"],  function($interpolateProvider) {
 $interpolateProvider.startSymbol('<%');
 $interpolateProvider.endSymbol('%>');
 });*/


// Declare app level module which depends on views, and components
var hack = angular.module('myApp', [
    "ngRoute",
    'myApp.login',
    'myApp.register',
 // 'myApp.detail',
    'myApp.version'
]).
        config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {


                $locationProvider.hashPrefix('!');



                $routeProvider.otherwise({redirectTo: '/login'});


            }]);


hack.controller('customersCtrl', function ($scope, $http) {

    $scope.names = "KONJR";



    $scope.klik = function () {

        console.log("app base");

    }




});