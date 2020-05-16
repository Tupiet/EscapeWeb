<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $u_name = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
  if (empty($u_name)) {
    PRINT <<<HERE
        <h1>:(</h1>
        <p>Ups... ¡Parece que has olvidado poner tu <b>clave de desencriptar!</b></p>
        <p>Por favor, regresa <b><a href="../">atrás</a></b> e introduce tu clave.</p>

        HERE;
        die();
  }
}

 ?>
