<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'pawelkic@serwer2339779.home.pl';
$subject = 'New message from ' . $name;
$body = 'Name: $name\nEmail: $email\n\n$message';
$headers = 'From: $email';

if(mail($to,$subject,$body,$header)){
    echo 'Email sent successfully'
}
else {echo 'Error:Something went wrong'}
?>