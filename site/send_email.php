<?php

$email = $_POST["email"];
$name = $_POST["name"];
$text = $_POST["message"];

echo "Имя: $name <br> Email: $email <br> Text: $text";

$to      = 'irmax.expert@google.com';
$subject = 'Новый посетитель';
$message = $text;
$headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>