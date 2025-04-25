<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST["message"];

$to      = 'pawelkic.dev@gmail.com';
$subject = "New message from " . $name;

// W tym miejscu ustawiasz "From" na swoją domenę, najlepiej taką, która faktycznie istnieje
$from = "kontakt@pawel-kicinski.pl"; // ważne! Upewnij się, że ta domena ma SPF/DKIM

$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

$email_message = "Name: $name\n";
$email_message .= "Email: $email\n\n";
$email_message .= "Message: \n$message\n";

if (mail($to, $subject, $email_message, $headers)) {
    echo "Mail sent successfully!";
} else {
    echo "Failed to send mail.";
}
?>