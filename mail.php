<?php

$adminEmail = 'tskuadm@gmail.com';

$to      = 'fedotov.feofan@bk.ru';
$subject = 'SmartBalance';
$message =
    htmlspecialchars($_POST['name']) . "\r\n" .
    htmlspecialchars($_POST['phone']) . "\r\n" .
    htmlspecialchars($_POST['time-from']) . "\r\n" .
    htmlspecialchars($_POST['time-to']);

$message = wordwrap($message, 70, "\r\n");

$headers = 'From:' . $adminEmail . "\r\n" .
    'Reply-To:' . $adminEmail . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if  (mail($to, $subject, $message, $headers)) {
    echo '<br/>' . 'Send';
} else {
    echo 'Sending error';
};

header("Location: ".$_SERVER['HTTP_REFERER']);