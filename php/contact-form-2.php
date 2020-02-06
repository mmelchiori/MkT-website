<?php


// Enter your email address
$to = 'marketing@novasystems.eu';

$subject = $_POST['mail_subject'];

if (false) {
    $to = "silvano.alda@gmail.com";
    /*
    $_POST['Contatto MkT']="PRova Form";
    $_POST['name']="Silvano";
    $_POST['email']="silvano.alda@prinweb.com";
    $_POST['message']="prova <b>strong</b> <br>email";
    */

    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
    echo "<pre>";
    print_r($_FILES);
    echo "</pre>";
}


if ($to) {
    $name = $_POST['name'];
    $email = $_POST['email'];

    $fields = array(
        0 => array(
            'text' => 'Name',
            'val' => $_POST['name']
        ),
        1 => array(
            'text' => 'Email address',
            'val' => $_POST['email']
        ),
        2 => array(
            'text' => 'Message',
            'val' => $_POST['message']
        )
    );

    $message = "";

    foreach ($fields as $field) {
        $message .= $field['text'] . ": " . htmlspecialchars($field['val'], ENT_QUOTES) . "<br>\n";
    }




    ini_set('display_errors', 'on');
    error_reporting(E_ALL & ~E_NOTICE);
    require_once('./php-mailer/class.phpmailer.php');


    $phpMailer = new PHPMailer(true);
    $phpMailer->CharSet = "UTF-8";

/*
    $phpMailer->IsSMTP();
    $phpMailer->Host = "smtp.gmail.com";
    $phpMailer->SMTPAuth = true;
    $phpMailer->SMTPSecure = "ssl";
    $phpMailer->Username = "myemail@gmail.com";
    $phpMailer->Password = "**********";
    $phpMailer->Port = "465";
*/

    $phpMailer->SetFrom('marketing@novasystems.eu');
    $phpMailer->AddReplyTo($email, $name);
    $phpMailer->Subject   = $subject;
    $phpMailer->IsHTML(true);
    $phpMailer->Body      = nl2br($message);
    $phpMailer->AltBody =  $phpMailer->html2text($message);
    $phpMailer->AddAddress($to);

    if (
        isset($_FILES['file']) &&
        $_FILES['file']['error'] == UPLOAD_ERR_OK
    ) {
        $phpMailer->AddAttachment(
            $_FILES['file']['tmp_name'],
            $_FILES['file']['name']
        );
    }
    $sended = $phpMailer->Send();




    if ($sended) {
        $arrResult = array('response' => 'success');
        ?>
<script>
window.location = "https://www.mktcommunication.eu";
</script>
        <?php
        exit();

    } else {
        $arrResult = array('response' => 'error');
    }

    echo json_encode($arrResult);
} else {

    $arrResult = array('response' => 'error');
    echo json_encode($arrResult);
}
