'use strict';

angular.module('myApp.detail', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/detail', {
                    templateUrl: 'detail/detail.html',
                    controller: 'detailCtrl'
                });
            }])

        .controller('detailCtrl', function ($scope, $http) {

            $scope.klik = function () {
                console.log("register_hack");
                var dataSve = {
                    "Teamname": "Coalesce",
                    "Password": "grofica_marica",
                    "Members": [
                        {
                            "name": "Patrik",
                            "surname": "Dolovski",
                            "mail": "patdolovs@foi.hr"
                        },
                        {
                            "name": "Ivica",
                            "surname": "Čelig",
                            "mail": "ivicelig@foi.hr"
                        },
                        {
                            "name": "Zoran",
                            "surname": "Hrnčić",
                            "mail": "zorhrncic@foi.hr"
                        },
                        {
                            "name": "Matija",
                            "surname": "Cmrk",
                            "mail": "matcmrk@foi.hr"
                        }
                    ]

                };

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


                /*
                 var ser = function(obj, prefix) {
                 var str = [], p;
                 for(p in obj) {
                 if (obj.hasOwnProperty(p)) {
                 var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
                 str.push((v !== null && typeof v === "object") ?
                 ser(v, k) :
                 encodeURIComponent(k) + "=" + encodeURIComponent(v));
                 }
                 }
                 return str.join("&");
                 };*/

console.log("QUERY:" + jQuery.param(dataSve));
                $http({
                    method: 'POST',
                    url: "http://52.233.158.172/change/api/hr/account/register",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj) {
                            if (obj.hasOwnProperty(p)) {
                                console.log("P je iznosi: " + p);
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                           
                            }
                        }
                        
                        console.log("rezultat : "+ str.join("&"));
                        
                        return jQuery.param(obj);
                        
                      //  return str.join("&");
                    },
                    data: data

                }).then(function mySuccess(response) {
                    
                    alert("Uspješna registracija!");
                    console.log('uspjeh' + JSON.stringify(response));
                }, function myError(response) {
                       alert("Neuspješna registracija!! \n" + response.data.Errors);
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