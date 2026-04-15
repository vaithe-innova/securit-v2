<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the raw POST data
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    if ($data) {
        $to = "your-email@example.com"; // Replace with your email
        $subject = "New Contact Form Submission";
        $message = "Name: " . $data->name . "\n" .
            "Email: " . $data->email . "\n" .
            "Message: \n" . $data->message;
        $headers = "From: webmaster@yourdomain.com";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["status" => "success", "message" => "Email sent!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to send email."]);
        }
    }
}
?>