'use strict';

angular.module('myApp.register', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/register', {
                    templateUrl: 'register/register.html',
                    controller: 'registerCtrl'
                });
            }])

        .controller('registerCtrl', function ($scope, $http) {

       $("#subb" ).click(function() {
            
            var data = {
	"Teamname":"Coalesce",
	"Password":"grofica_marica",
  "Member": [
  	{
  		"name" : "Patrik",
  		"surname":"Dolovski",
  		"mail":"patdolovs@foi.hr"
  	},
  		{
  		"name" : "Ivica",
  		"surname":"Čelig",
  		"mail":"ivicelig@foi.hr"
  	},
  		{
  		"name" : "Zoran",
  		"surname":"Hrnčić",
  		"mail":"zorhrncic@foi.hr"
  	},
  		{
  		"name" : "Matija",
  		"surname":"Cmrk",
  		"mail":"matcmrk@foi.hr"
  	}
  	]
  
};


console.log("salji");
    $.ajax({
        type: "POST",
        url: "http://52.233.158.172/change/api/en/account/register",
        contentType: "application/x-www-form-urlencoded",
        data: JSON.stringify(data),

        crossDomain: true,
    })}
    );
    
    
    
    
            $scope.klik = function () {
                console.log("register_hack");


                var data = {
                    "Teamname": $scope.name,
                    "Password": $scope.password,
                    "Members": [
                        {

                            "name": $scope.name_member_1,
                            "surname": $scope.surname_member_1,
                            "mail": $scope.mail_1
                        },
                        {

                            "name": $scope.name_member_2,
                            "surname": $scope.surname_member_2,
                            "mail": $scope.mail_2
                        },
                        {
                            "name": $scope.name_member_3,
                            "surname": $scope.surname_member_3,
                            "mail": $scope.mail_3
                        },
                        {

                            "name": $scope.name_member_4,
                            "surname": $scope.surname_member_4,
                            "mail": $scope.mail_4

                        }
                    ]


                };



                        var config9 = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                       
                    }
                }
             

                console.log("ispis:" + JSON.stringify(data));

  $http({
    method: 'POST',
    url: "http://52.233.158.172/change/api/en/account/register",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  /*  transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },*/
    data: "%7B%0D%0A%09%22Teamname%22%3A%22Coalesce%22%2C%0D%0A%09%22Password%22%3A%22grofica_marica%22%2C%0D%0A++%22Member%22%3A+%5B%0D%0A++%09%7B%0D%0A++%09%09%22name%22+%3A+%22Patrik%22%2C%0D%0A++%09%09%22surname%22%3A%22Dolovski%22%2C%0D%0A++%09%09%22mail%22%3A%22patdolovs%40foi.hr%22%0D%0A++%09%7D%2C%0D%0A++%09%09%7B%0D%0A++%09%09%22name%22+%3A+%22Ivica%22%2C%0D%0A++%09%09%22surname%22%3A%22%C4%8Celig%22%2C%0D%0A++%09%09%22mail%22%3A%22ivicelig%40foi.hr%22%0D%0A++%09%7D%2C%0D%0A++%09%09%7B%0D%0A++%09%09%22name%22+%3A+%22Zoran%22%2C%0D%0A++%09%09%22surname%22%3A%22Hrn%C4%8Di%C4%87%22%2C%0D%0A++%09%09%22mail%22%3A%22zorhrncic%40foi.hr%22%0D%0A++%09%7D%2C%0D%0A++%09%09%7B%0D%0A++%09%09%22name%22+%3A+%22Matija%22%2C%0D%0A++%09%09%22surname%22%3A%22Cmrk%22%2C%0D%0A++%09%09%22mail%22%3A%22matcmrk%40foi.hr%22%0D%0A++%09%7D%0D%0A++%09%5D%0D%0A++%0D%0A%7D"
})  .then(function mySuccess(response) {
                            console.log('uspjeh' + JSON.stringify(response));
                        }, function myError(response) {
                            console.log('greška' + JSON.stringify(response));

                        });

    
             /*   $http.post("http://52.233.158.172/change/api/en/account/register", data, config9)
                        .then(function mySuccess(response) {
                            console.log('uspjeh' + JSON.stringify(response));
                        }, function myError(response) {
                            console.log('greška' + JSON.stringify(response));

                        });
     
*/
        }

        });


/* login.controller('Viewlogin',function ($scope) {
 
 
 
 
 
 
 
 });*/