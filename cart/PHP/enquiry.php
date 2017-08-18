
<?php
$obj=json_decode(file_get_contents('php://input'), true);

$senderName   = $obj['name'];
$senderEmail     = $obj['email'];
$senderMobile   = $obj['mobile'];
$siteName		= "www.assaycr.com";
$toSubject 		= "Message from $senderName via $siteName";
$senderMessage = $obj['message'];


// remove slashes from the variables
$senderName      = stripslashes($senderName);
$senderEmail     = stripslashes($senderEmail);
$senderPhone     = stripslashes($senderMobile);
$senderMessage   = stripslashes($senderMessage); 


$email_from = $senderEmail; // Who the email is from
$email_subject =  "Message from $senderName via $siteName";  // The Subject of the email
    


$email_to = 'rr1@assaycr.com'; // Who the email is too

$headers = "From: ".$email_from;

$ok = @mail($email_to, $email_subject, $senderMessage, $headers);

if($ok) {
print "<script>window.open('contact.php?start=Thank you For Contacting Us..','_parent','');</script>";
} else {
die("Sorry but the email could not be sent. Please go back and try again!");
}


?>