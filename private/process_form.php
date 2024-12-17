<?php
// Include PHPMailer files
require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = "";
    $message = htmlspecialchars($_POST["message"]);
    $sendermail = htmlspecialchars($_POST["email"]);
    $smtp_password = "";
    $to = "";  // Replace with your email address
    $subject = "DEVELOPER TESTING";

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 0; // Set to 2 for detailed debugging
        $mail->isSMTP();
        $mail->Host = '';  // Replace with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = $email;       // Replace with your SMTP username
        $mail->Password = $smtp_password;
        $mail->SMTPSecure = 'tls';      // Use 'tls' or 'ssl' based on your server configuration
        $mail->Port = 587;              // Adjust the port accordingly

        // Recipient
        $mail->setFrom($email, $sendermail);
        $mail->addAddress($to);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();

        $response['status'] = 'success';
        $response['message'] = ' ✓ ';

        // Redirect to the specified URL
        header("Location: https://dokram.cz?status=success");
        exit(); // Make sure to exit after the header to prevent further execution
    } catch (Exception $e) {
        $response['status'] = 'error';
        $response['message'] = 'Error sending message: ' . $mail->ErrorInfo;

        // Redirect to the specified URL with an error parameter
        header("Location: https://dokram.cz?status=error&message=" . urlencode($response['message']));
        exit(); // Make sure to exit after the header to prevent further execution
    }
}