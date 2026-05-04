<?php
// ── CORS ────────────────────────────────────────────────────────────────────
$allowed_origin = 'https://securit.app'; // restrict to your domain in production
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === $allowed_origin) {
    header("Access-Control-Allow-Origin: $allowed_origin");
}
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// ── PHPMailer (install via Composer: composer require phpmailer/phpmailer) ──
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$autoload = __DIR__ . '/vendor/autoload.php';
if (!file_exists($autoload)) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Server configuration error: PHPMailer not installed. Run: composer require phpmailer/phpmailer']);
    exit;
}
require $autoload;

// ── SMTP config (set these in your server environment or a .env loader) ─────
$smtp_host = getenv('SMTP_HOST') ?: 'smtp.dreamhost.com';
$smtp_user = getenv('SMTP_USER') ?: '';
$smtp_pass = getenv('SMTP_PASS') ?: '';
$smtp_port = (int)(getenv('SMTP_PORT') ?: 587);
$mail_to   = getenv('MAIL_TO')   ?: $smtp_user;

// ── Parse & sanitise input ───────────────────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data || !is_array($data)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON payload']);
    exit;
}

function clean(string $value): string {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

$name        = clean($data['name']        ?? '');
$email       = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$company     = clean($data['company']     ?? '');
$jobTitle    = clean($data['jobTitle']    ?? '');
$inquiryType = clean($data['inquiryType'] ?? '');
$phone       = clean($data['phone']       ?? '');
$message     = clean($data['message']     ?? '');
$agreeUpdates = !empty($data['agreeUpdates']) ? 'Yes' : 'No';

// ── Server-side validation ───────────────────────────────────────────────────
if (!$name || !$email || !$company || !$jobTitle) {
    http_response_code(422);
    echo json_encode(['status' => 'error', 'message' => 'Required fields are missing or invalid']);
    exit;
}

// ── Build & send email ───────────────────────────────────────────────────────
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_user;
    $mail->Password   = $smtp_pass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtp_port;

    $mail->setFrom($smtp_user, 'Website Contact');
    $mail->addAddress($mail_to);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "
        <h3 style='font-family:sans-serif;color:#1d4ed8'>New Contact Form Submission</h3>
        <table style='font-family:sans-serif;font-size:14px;border-collapse:collapse'>
            <tr><td style='padding:6px 12px;font-weight:bold'>Name</td><td style='padding:6px 12px'>{$name}</td></tr>
            <tr><td style='padding:6px 12px;font-weight:bold'>Email</td><td style='padding:6px 12px'>{$email}</td></tr>
            <tr><td style='padding:6px 12px;font-weight:bold'>Company</td><td style='padding:6px 12px'>{$company}</td></tr>
            <tr><td style='padding:6px 12px;font-weight:bold'>Job Title</td><td style='padding:6px 12px'>{$jobTitle}</td></tr>
            <tr><td style='padding:6px 12px;font-weight:bold'>Inquiry Type</td><td style='padding:6px 12px'>{$inquiryType}</td></tr>
            <tr><td style='padding:6px 12px;font-weight:bold'>Phone</td><td style='padding:6px 12px'>{$phone}</td></tr>
            <tr><td style='padding:6px 12px;font-weight:bold'>Agrees to Updates</td><td style='padding:6px 12px'>{$agreeUpdates}</td></tr>
            <tr><td style='padding:6px 12px;font-weight:bold;vertical-align:top'>Message</td><td style='padding:6px 12px'>{$message}</td></tr>
        </table>
    ";
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\nCompany: {$company}\nJob Title: {$jobTitle}\n"
                   . "Inquiry: {$inquiryType}\nPhone: {$phone}\nAgrees to Updates: {$agreeUpdates}\n\nMessage:\n{$message}";

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Mailer error: ' . $mail->ErrorInfo]);
}
?>