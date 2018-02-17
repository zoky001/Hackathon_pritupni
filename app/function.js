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
        $http.post("https://fcm.googleapis.com/fcm/send",data,config )
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
    
      function fillWithHouses() {



        housesCollectionRef//.where("capital", "==", true)
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        // console.log(doc.id, " => ", doc.data());
                        $("#listHouses").append("<li class='list-group-item '>" + doc.data().address.streetName + "  " + doc.data().address.streetNumber + "<span  id='" + doc.id + "'class='badge dodajIntervenciju'>Zapocni intervenciju</span></li>");





                    });

                    $(".dodajIntervenciju").click(function () {
                        console.log("THISSS: ", this.id);
                        startIntervention(this.id);

                    });
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });

    }
    function uploadImageToFirebaseStorage(imagesRef, file) {
    // Get a reference to the storage service, which is used to create references in your storage bucket


    console.log("FILE: " + file.name);
// Create the file metadata
    var metadata = {
        contentType: 'image/jpeg'
    };

// Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = imagesRef.child(IDunique() + file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

            case 'storage/canceled':
                // User canceled the upload
                break;


            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
        }
    }, function () {
        // Upload completed successfully, now we can get the download URL
        var downloadURL = uploadTask.snapshot.downloadURL;
        console.log("LINK:" + downloadURL);
    });



}

   function fillPostListbox() {
    postsCollectionRef//.where("capital", "==", true)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    $("#postList").append("<option value=\"" + doc.id + "\" >" + doc.data().Name + "</option>");
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

}