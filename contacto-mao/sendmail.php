<?php

if (isset($_POST['form_name'], $_POST['form_mail'], $_POST['form_phone'], $_POST['form_message'])){

	$nombre = $_POST['form_name'];
	$mail = $_POST['form_mail'];
	$telefono = $_POST['form_phone'];
	$mensaje = $_POST['form_message'];

	$header = 'From: ' . $mail . "\r\n";
	$header .= 'X-Mailer: PHP/' . phpversion();
	$header .= 'MIME-Version: 1.0' . "\r\n";
	$header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	$email = "Nombre: " . $nombre . " <br/>\r\n";
	$email .= "e-mail: " . $mail . " <br/>\r\n";
	$email .= "Teléfono: " . $telefono . " <br/>\r\n";
	$email .= "Mensaje: " . $mensaje . " <br/>\r\n";

	$para = 'mao8a87@gmail.com'; 
	$asunto = 'Enviado desde formulario web';

	if (mail($para, $asunto, utf8_decode($email), $header)) {

		echo 'confirmado';

	}else{

		echo 'error';

	}

}
