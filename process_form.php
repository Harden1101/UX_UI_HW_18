<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize input data
    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $first_name = sanitize_input($_POST["first_name"]);
    $last_name = sanitize_input($_POST["last_name"]);
    $phone = sanitize_input($_POST["phone"]);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) ? $_POST["email"] : null;
    $message = sanitize_input($_POST["message"]);

    // Validate required fields
    if (empty($first_name) || empty($last_name) || empty($email) || empty($message)) {
        // Handle validation errors, for example, redirect back to the form with an error message
        header("Location: index.html?error=missing_fields");
        exit();
    }

    // Validate email address
    if (!$email) {
        // Handle invalid email, for example, redirect back to the form with an error message
        header("Location: index.html?error=invalid_email");
        exit();
    }

    $to = "Aeromitch@gmail.com";  // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email;

    // Avoid email header injection by ensuring the subject doesn't contain newlines
    $subject = str_replace(array("\r", "\n"), '', $subject);

    $full_message = "Name: $first_name $last_name\n";
    $full_message .= "Phone: $phone\n";
    $full_message .= "Email: $email\n\n";
    $full_message .= "Message:\n$message";

    // Use the wordwrap() function to wrap lines in the email
    $full_message = wordwrap($full_message, 70);

    // Send email
    mail($to, $subject, $full_message, $headers);

    // Optionally, you can redirect the user to a thank you page
    header("Location: thank_you.html");
    exit();
}
?>