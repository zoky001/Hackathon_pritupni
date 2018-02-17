'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', function($scope) {
        
        
                $scope.klik = function () {
                    console.log("register");
                }
        

});

 /* login.controller('Viewlogin',function ($scope) {







            });*/