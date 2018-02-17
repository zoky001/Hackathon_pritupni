<?php

$curl = curl_init();
if (!empty($_GET["id"]) && !empty($_GET["key"])) {
   $id = $_GET["id"];
   curl_setopt_array($curl, array(
  CURLOPT_URL => "http://52.233.158.172/change/api/hr/team/details/".$id,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: 5f3daf0c-818c-a3d9-c6da-f54a115fc556",
    "x-authorization: ".$_GET["key"]
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
   
   
  } else {

  }


