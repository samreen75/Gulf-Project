<?php
//variable setting
$name = $_REQUEST['name'];
$name = $_REQUEST['email'];
$name = $_REQUEST['subject'];
$name = $_REQUEST['message'];

//check fields
if(empty($name) || empty($email) empty($subject))
{
    echo 'please fill all the field';
}
else
{
    mail("info@altlmsani-workshop.com", $subject , $message ,"From: $name <$email>");

    echo "<script type='text/javascript'>
    alert('your message sent sccessfully!!');
    window.history.log(-1);
    </script>";
}
?>