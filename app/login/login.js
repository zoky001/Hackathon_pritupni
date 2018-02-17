'use strict';

angular.module('myApp.login', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/login', {
                    templateUrl: 'login/login.html',
                    controller: 'Viewlogin'
                });
            }])

        .controller('Viewlogin', function ($scope, $http) {


            $scope.klik = function (item) {

                $scope.proba = "Dobar dan";
                console.log("login");
                console.log(item.currentTarget.getAttribute("data-id"));
                sendFirebaseNotification("porkuaa");

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