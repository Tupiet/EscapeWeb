<?php
$u_name = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
if (empty($u_name)) {
  PRINT <<<HERE
                          <style media="screen">
                          body {
                          background-color: rgb(241, 255, 213);
                          }
                          p {
                          font-size: 30px; font-family: 'Itim', cursive;
                          padding-left: 10px;
                          padding-right: 10px;
                          text-align: center;
                          }
                          h1 {
                          font-family: 'Patrick Hand', cursive;
                          text-align: center;
                          font-size: 60px;
                          }
                          a{
                          transition:1s;
                          color:red;
                          text-decoration:none;
                          }
                          a:hover {
                          transition:1s;
                          color:black;
                          }
                  </style>
                 <h1>:(</h1>
                <p>Ups... ¡Parece que has olvidado poner tu <b>pingüino!</b></p>
                <p>Por favor, regresa <b><a href="../">atrás</a></b> e introduce tu usuario.</p>

                HERE;
                die();
}
 ?>
