<?php

/*
The variables below can be overridden by setting the contact 
form input fields as emailTo, fromName, fromEmail or subject. This can be
useful if you want to have different contact forms in different pages and each 
of them has different emailTo, subject, etc.
(check the help documentation to know how to properly set up this fields).

If none of the fields were set as emailTo, fromName, fromEmail
or subject, the default values (below) will be used.
*/
$emailto = 'default@yourdomain.com'; 	// Insert the email address that will receive the messages
$fromName = 'Contact';					// Insert a default "From Name" (this field will be displayed in the email header)
$fromEmail = 'default@yourdomain.com';	// Insert a default "From Email" address (this field will be displayed in the email header)
$subject = 'Neela Contact Form';		// Insert a default contact form subject


// Insert your Google reCaptcha V2 secret key
$secretkey = "6LcTJDEUAAAAAEJtMj73PWKtA81KjO6hcmhDT74L";



// No need to edit below this line
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
$recaptcha = false;

if (isset($_POST['recaptcha'])) {
	$captcha = sanitize_xss($_POST['recaptcha']);
	$url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . $secretkey . '&response=' . urlencode($captcha) . '&remoteip=' . $_SERVER["REMOTE_ADDR"];
	$response = file_get_contents($url);
	$responseArray = json_decode($response,true);
	
	if ($responseArray["success"]) {
		$recaptcha = true;
	}
} else {
	$recaptcha = true;
}

function sanitize_xss($value) {
	return htmlspecialchars(strip_tags($value));
}

if(isset($_POST['emailto'])) {
	$emailto = sanitize_xss($_POST['emailto']);
}

if(isset($_POST['fromname'])) {
	$fromName = sanitize_xss($_POST['fromname']);
}

if(isset($_POST['fromemail'])) {
	$fromEmail = sanitize_xss($_POST['fromemail']);
}

if(isset($_POST['subject'])) {
	$subject = sanitize_xss($_POST['subject']);
}

$html = "";
$len = intval(sanitize_xss($_POST['len']));

if ($len && $recaptcha){
	if (isset($_POST['fromname_label'])){
		$html .= sanitize_xss(htmlentities($_POST['fromname_label'], ENT_QUOTES, "UTF-8") . ": ");
		$html .= sanitize_xss(htmlentities($fromName, ENT_QUOTES, "UTF-8")) . "<br>\n";
	}

	if (isset($_POST['fromemail_label'])){
		$html .= sanitize_xss(htmlentities($_POST['fromemail_label'], ENT_QUOTES, "UTF-8") . ": ");
		$html .= sanitize_xss(htmlentities($fromEmail, ENT_QUOTES, "UTF-8")) . "<br>\n";
	}

	if (isset($_POST['subject_label'])){
		$html .= sanitize_xss(htmlentities($_POST['subject_label'], ENT_QUOTES, "UTF-8") . ": ");
		$html .= sanitize_xss(htmlentities($subject, ENT_QUOTES, "UTF-8")) . "<br>\n";
	}

	for($i=0; $i<$len; $i++){
		if (isset($_POST['field'. $i .'_label'])){
			$html .= sanitize_xss(htmlentities($_POST['field'. $i .'_label'], ENT_QUOTES, "UTF-8") . ": ");
			$html .= sanitize_xss(htmlentities($_POST['field'. $i .'_value'], ENT_QUOTES, "UTF-8")) . "<br>\n";
		}
	}

	$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
	if ($fromName != "" || $fromEmail != ""){
		$headers .= "From: " . $fromName . "<". $fromEmail .">\r\n";
	}
	$headers .= "Reply-To: " .  $fromEmail . "\r\n";

	$html = utf8_decode($html);

	if ($html && mail($emailto, $subject, $html, $headers)) {
		echo 'ok';
	} else {
		echo 'error';
	}
} else {
	echo 'error';
}

?>