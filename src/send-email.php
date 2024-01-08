<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST["message"];

$to      = 'pawelkic.dev@gmail.com';
$subject = "New message from " . $name;

$headers = array(
    'From' => "$email",
    'Reply-To' => 'pawelkic.dev@gmail.com',
    'X-Mailer' => 'PHP/' . phpversion()
);

$email_message = "Name: $name\n";
$email_message .= "Email: $email\n\n";
$email_message .= "Message: \n$message\n";

mail($to, $subject, $email_message, $headers);

?>