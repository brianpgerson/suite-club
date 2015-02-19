<?PHP

// BEGIN connection stuff

// define('DB_NAME', 'thesuiu2_firstpass');
// define('DB_USER', 'thesuiu2_root');
// define('DB_PASSWORD', 'iamroot');
// define('DB_HOST', 'localhost');

// $link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);

// if(!link) {
// 	die('Could not connect: ' . mysql_error());
// }

// $db_selected = mysql_select_db (DB_NAME, $link);

// if (!$db_selected) {
// 	die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
// }

// echo 'Connected successfully';

// END connection stuff

// Let's try email!


$emailAddress1 = $fullName = $shootUs = $subject = $WHATmessage = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $emailAddress1	 = test_input($_POST['emailAddress1']);
  $fullName = test_input($_POST['fullName']);
  $shootUs = test_input($_POST['shootUs']);
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$subject = 'Suite Club Inquiry - ' . $fullName;
$WHATmessage = $fullName . ' is looking forward to hearing from us!'.PHP_EOL.'Their email is: '. $emailAddress1 .'!'.PHP_EOL.'They said: "'.$shootUs.'"';
mail('brianpgerson@gmail.com', $subject, $WHATmessage ); 

echo "Your email was sent!";

// Here we get all the information from the fields sent over by the form.



// $name = $_POST['fullName'];
// $email = $_POST['emailAddress1'];
// $message = $_POST['shootUs'];
 
// $to = 'brianpgerson@gmail.com';
// $subject = 'A new message for Suite Club';
// $message = 'FROM: '.$name.' Email: '.$email.'Message: '.$message;
// $headers = 'From: brianpgerson@gmail.com' . "\r\n";
 
// if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
// mail($to, $subject, $message, $headers); //This method sends the mail.
// echo "Your email was sent!"; // success message
// }else{
// echo "Invalid Email, please provide an correct email.";
// }


// ?>