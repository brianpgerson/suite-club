<?php

define('DB_NAME', 'thesuiu2_firstpass');
define('DB_USER', 'thesuiu2_root');
define('DB_PASSWORD', 'iamroot');
define('DB_HOST', 'localhost');

$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);

if(!link) {
	die('Could not connect: ' . mysql_error());
}

$db_selected = mysql_select_db (DB_NAME, $link);

if (!$db_selected) {
	die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
}

// echo 'Connected successfully';

// name

$value = $_POST['fullName'];

$sql = "INSERT INTO tryItOnce (fullName) VALUES ('$value')";

if (!mysql_query($sql)) {
	die('Error. Error. ' . mysql_error());
}

// emailAddress1

$value = $_POST['organization'];

$sql = "INSERT INTO tryItOnce (emailAddress1) VALUES ('$value')";

if (!mysql_query($sql)) {
	die('Error. Error. ' . mysql_error());
}

// message

$value = $_POST['message'];

$sql = "INSERT INTO tryItOnce (message) VALUES ('$value')";

if (!mysql_query($sql)) {
	die('Error. Error. ' . mysql_error());
}





mysql_close();
?>

