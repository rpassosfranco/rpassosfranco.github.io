<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>R2A Parking Estacionamentos</title>
    <meta name="description" content="Portal da Empresa R2A Parking Estacionamentos" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="plugins/animate.css/animate.min.css" rel="stylesheet">
    <!-- ionicons -->
    <link rel="stylesheet" href="plugins/ionicons/css/ionicons.min.css" />
    <!-- Customizado -->
    <link rel="stylesheet" href="css/styles.css" />
    <!-- r2a -->
    <link rel="stylesheet" href="css/r2a.css" />
  </head>
  <body>
    <div class="container-fluid text-center">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="cursive">R2A Parking Estacionamentos</h1>
                
<?php

//Recebendo valores do formulario POST
$nome  = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$mensagem = $_POST["mensagem"];

//Configuracoes
$email_remetente = "sac@r2apark.com.br";

//Configurações do email, ajustar conforme necessidade
$email_destinatario = "$email_remetente"; // pode ser qualquer email que receberá as mensagens
$email_reply = "$email"; 
$email_assunto = "Atendimento R2A Park"; // Este será o assunto da mensagem
//====================================================
	
//Monta o Corpo da Mensagem
//====================================================
$email_conteudo  = "Nome = $nome \n"; 
$email_conteudo .= "Email = $email \n";
$email_conteudo .= "Telefone = $telefone \n"; 
$email_conteudo .= "Mensagem = $mensagem \n"; 
//====================================================

//Seta os Headers (Alterar somente caso necessario) 
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "From: $email_remetente\r\n"; //E-mail do remetente
$headers .= "Return-Path: $email_remetente\r\n"; //E-mail do remetente

              mail("$email_remetente","$email_assunto","$email_conteudo",$headers,"-r". "$email_remetente");
              print "</b><p>Mensagem enviada com sucesso!</p></b>";	




?>
				
            </div>
         </div>
        </div>
    <footer id="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-6 col-sm-3 column">
                    <h4>Informações</h4>
                    <ul class="list-unstyled">
                        <li><a href="index.html#two">A R2A</a></li>
                        <li><a href="index.html#four">Serviços</a></li>
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-3 column">
                    <h4>Sobre</h4>
                    <ul class="list-unstyled">
                        <li><a href="index.html#last">Contato</a></li>
                        <li><a href="#">Diferencial</a></li>
                        <li><a href="#">Politica de Privacidade</a></li>
                        <li><a href="#">Termos e condições</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-3 column">
                </div>
                <div class="col-xs-12 col-sm-3 text-right">
                    <h4>Siga-nos</h4>
                     <!--
				   <ul class="list-inline">
                      <li><a rel="nofollow" href="" title="Twitter"><i class="icon-lg ion-social-twitter-outline"></i></a>&nbsp;</li>
                      <li><a rel="nofollow" href="https://www.facebook.com/R2A-Park-Estacionamentos-1119353294785270/" title="Facebook" target="_blank"><i class="icon-lg ion-social-facebook-outline"></i></a>&nbsp;</li>
                      <li><a rel="nofollow" href="" title="Dribble"><i class="icon-lg ion-social-dribbble-outline"></i></a></li>
                    </ul>
					-->
					-->
<!-- Load Facebook SDK for JavaScript -->					
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>






<div class="fb-page" data-href="https://www.facebook.com/R2A-Park-Estacionamentos-1119353294785270/" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/R2A-Park-Estacionamentos-1119353294785270/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/R2A-Park-Estacionamentos-1119353294785270/">R2A Park Estacionamentos</a></blockquote>
</div>

                </div>
            </div>
            <br/>
            <span class="pull-right text-muted small">R2A Parking Estacionamentos © <a href="https://rpassosfranco.github.io/" target="_blank">2016 Rpassosfranco</a></span>
        </div>
    </footer>
    <script src="plugins/jquery/dist/jquery.min.js"></script>
    <script src="plugins/bootstrap/dist/js/bootstrap.js"></script>
    <script src="plugins/jquery-easing/jquery.easing.min.js"></script>
    <script src="plugins/wow/wow.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>




