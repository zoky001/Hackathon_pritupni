'use strict';

angular.module('myApp.login', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/login', {
                    templateUrl: 'login/login.html',
                    controller: 'Viewlogin'
                });
            }])

        .controller('Viewlogin', function ($scope, $http) {

            $("#dohvatiDetalje").click(function () {

                console.log("KLIK queryyyy");
                
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://52.233.158.172/change/api/hr/team/details/25/");
xhr.setRequestHeader("x-authorization", "Q29hbGVzY2U6Og==");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.setRequestHeader("Access-Control-Allow-Origin", "http://52.233.158.172");
xhr.setRequestHeader("postman-token", "2201692d-8ff7-e539-44aa-62c1f96f0830");

xhr.send(data);
                /*
                 $.ajax({
                 type: "GET",
                 mode:'no_cors',
                 withCredentials:true,
                 credentials : 'same-origin',
                 headers:{"X-Authorization" : "Q29hbGVzY2U6Og==", "Origin":"http://localhost/",'Content-Type': 'application/x-www-form-urlencoded'},
                 url :"http://52.233.158.172/change/api/hr/team/details/25"
                 
                 }).done(function(data){
                 console.log(data);
                 
                 
                 });*/

             /*   $.ajax({

                    // The 'type' property sets the HTTP method.
                    // A value of 'PUT' or 'DELETE' will trigger a preflight request.
                    type: 'GET',

                    // The URL to make the request to.
                    url: 'http://52.233.158.172/change/api/hr/team/details/25',

                    // The 'contentType' property sets the 'Content-Type' header.
                    // The JQuery default for this property is
                    // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
                    // a preflight. If you set this value to anything other than
                    // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
                    // you will trigger a preflight request.
                    contentType: 'application/json',

                    xhrFields: {
                        // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
                        // This can be used to set the 'withCredentials' property.
                        // Set the value to 'true' if you'd like to pass cookies to the server.
                        // If this is enabled, your server must respond with the header
                        // 'Access-Control-Allow-Credentials: true'.
                        //withCredentials: false
                    },

                    headers: {"X-Authorization": "Q29hbGVzY2U6Og=="
                                // Set any custom headers here.
                                // If you set any non-simple headers, your server must include these
                                // headers in the 'Access-Control-Allow-Headers' response header.
                    },

                    success: function () {
                        // Here's where you handle a successful response.
                    },

                    error: function () {
                        // Here's where you handle an error response.
                        // Note that if the error was due to a CORS issue,
                        // this function will still fire, but there won't be any additional
                        // information about the error.
                    }
                });
*/
                /*  $.ajax({
                 url: "http://52.233.158.172/change/api/hr/team/details/25",
                 type: 'GET',
                 dataType: 'json',
                 cors: true ,
                 contentType:'application/json',
                 secure: true,
                 headers: {
                 'Access-Control-Allow-Origin': '*',"X-Authorization" : "Q29hbGVzY2U6Og==","Content-Type" :"application/json"
                 },
                 beforeSend: function (xhr) {
                 xhr.setRequestHeader ("X-Authorization", "Q29hbGVzY2U6Og==");
                 },
                 success: function (data){
                 console.log(data.organizations[0].name);
                 
                 }
                 })
                 */

            });

            $scope.klik = function (item) {

                $scope.foo = "bar";
                $scope.response = [];
                $scope.fullResponse = [];

                $scope.proba = "Dobar dan";
                console.log("login");
                console.log("register_hack");


                var data = {
                    "Teamname": $scope.name,
                    "Password": $scope.password,

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

                console.log("QUERY:" + jQuery.param(data));
                $http({
                    method: 'POST',
                    url: "http://52.233.158.172/change/api/hr/account/login",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj) {
                            if (obj.hasOwnProperty(p)) {
                                console.log("P je iznosi: " + p);
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));

                            }
                        }

                        console.log("rezultat : " + str.join("&"));

                        return jQuery.param(obj);

                        //  return str.join("&");
                    },
                    data: data

                }).then(function mySuccess(response) {

                    alert("Uspješna prijava!");
                    var json = response.data.Result;
                    $scope.hideLogin = true;



                    console.log('uspjeh' + (JSON.parse(response.data.Result)).TeamId);

                    //detail
                    $scope.showDetails = true;

                    var data = $.param({
                        json: JSON.stringify({
                            foo: $scope.foo
                        })
                    });

var ID = (JSON.parse(response.data.Result)).TeamId;
var key = (JSON.parse(response.data.Result)).AuthorizationToken;
                    // GETs are simple, 
                    $http({
                        url: "http://localhost/Hackathon_pristupni/getData.php?id="+ID+"&key="+key,
                        method: "GET",
                    }).then(function mySuccess(response) {

                       // alert("Uspješno dohvaćeni podatci!");
                        console.log(response.data);
                        
                         $scope.nameDet = (JSON.parse(response.data.Result)).TeamName;
                     
                  

                            $scope.name_member_1 =(JSON.parse(response.data.Result)).Members[0].Name;
                             $scope.surname_member_1 = (JSON.parse(response.data.Result)).Members[0].Surname;
                           $scope.mail_1 = (JSON.parse(response.data.Result)).Members[0].Mail;
                      

                             $scope.name_member_2 =(JSON.parse(response.data.Result)).Members[1].Name;
                             $scope.surname_member_2 = (JSON.parse(response.data.Result)).Members[1].Surname;
                           $scope.mail_2 = (JSON.parse(response.data.Result)).Members[1].Mail;
                      
                            $scope.name_member_3 = (JSON.parse(response.data.Result)).Members[2].Name;
                            $scope.surname_member_3 = (JSON.parse(response.data.Result)).Members[2].Surname;
                           $scope.mail_3 =(JSON.parse(response.data.Result)).Members[2].Mail;
                        

                             $scope.name_member_4 = (JSON.parse(response.data.Result)).Members[3].Name;
                             $scope.surname_member_4 = (JSON.parse(response.data.Result)).Members[3].Surname;
                             $scope.mail_4 = (JSON.parse(response.data.Result)).Members[3].Mail;
                        
                        
                        
                        
                     
                    }, function myError(response) {
                      //  alert("Neuspješna prijava!! \n");
                    

                    });
                            
                   
                    
                    

                    console.log("QUERY:" + jQuery.param(data));
                 /*   $http({
                        method: 'GET',

                        url: "http://52.233.158.172/change/api/hr/team/details/25",
                        headers: {'X-Authorization': (JSON.parse(response.data.Result)).AuthorizationToken,

                            'Content-Type': 'application/x-www-form-urlencoded'
                        },

                        transformRequest: function (obj) {
                            var str = [];
                            for (var p in obj) {
                                if (obj.hasOwnProperty(p)) {
                                    console.log("P je iznosi: " + p);
                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));

                                }
                            }

                            console.log("rezultat : " + str.join("&"));

                            return jQuery.param(obj);

                            //  return str.join("&");
                        },
                        data: dataGet

                    }).then(function mySuccess(response) {

                        alert("Uspješno dohvaćeni podatci!");
                        var json = response.data.Result;

                        console.log('uspjehDetalji');// + (JSON.parse(response.data.Result)).TeamId);
                    }, function myError(response) {
                        alert("Neuspješna prijava!! \n");
                        console.log('greška' + JSON.stringify(response));

                    });

*/




                    //detail_end
                }, function myError(response) {
                    alert("Neuspješna prijava!! \n");
                    console.log('greška' + JSON.stringify(response));

                });




            }


            function sendFirebaseNotification(id) {
                var config = {
                    headers: {
                        'Authorization': 'key=AAAAmrEEZok:APA91bHcHeCY-sTl6Tft4IL9ElaBV07IefQCsB6CGLkNFYViA6uZpCAeUnCwFW0oCi1D3TTehv5WAS__t73SmV5ywQlsVKb36XphGb57pXUE4ufnF84jL0vFBTJk94fdUQQWymUjxaWc',
                        'Content-Type': 'application/json'
                    }
                }

                var data = {
                    "notification": {
                        "title": "Intervencija!!!",
                        "body": id,
                        "icon": "https://rtl-cdnstatic.r.worldssl.net/image/1a630558ebc60967f71e402def2f4079_view_article_new.jpg?v=20",
                        "click_action": "http://127.0.0.1:8000/firestore"
                    },
                    "to": "ex_42Pzsj2w:APA91bGAWJG_3i4--XPkzs1_JoQkF2uhMHYjGSh3g8dNs3l4cDcTYC2ewy_FsIWSjx94dQgn2aCsPAz8gAl6MT7O00-fYecmixxzz69EmWN2N4wXIfzcNZR41jnvhC9PT1xseHVMmkvX"

                };

                $http.post("https://fcm.googleapis.com/fcm/send", data, config)
                        .then(function mySuccess(response) {
                            console.log('uspjeh');
                        }, function myError(response) {
                            console.log('greška');

                        });

                /*   $http({
                 method: 'POST',
                 url: fcm.googleapis.com / fcm / send,
                 data: incidentInformation,
                 timeout: 4000
                 }).then(function (success) {
                 callback(success);
                 }, function (error) {
                 errorCallback(error);
                 });
                 */
            }



        });