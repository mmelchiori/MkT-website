<!DOCTYPE html>
<html lang="it-it">
	<head>
		<title>MkT communication - Web agency San Martino Buon Albergo</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="images/favicons/favicon.ico">
		<link rel="apple-touch-icon" sizes="120x120" href="images/favicons/favicon-120.png">
		<link rel="apple-touch-icon" sizes="152x152" href="images/favicons/favicon-152.png">
		<link rel="stylesheet" href="bower_components/vegas/dist/vegas.css">
		<!-- CSS Files-->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700">
		<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" href="bower_components/Swiper/dist/css/swiper.min.css">
		<link rel="stylesheet" href="bower_components/magnific-popup/dist/magnific-popup.css">
		<link rel="stylesheet" href="bower_components/Morphext/dist/morphext.css">
		<link rel="stylesheet" href="bower_components/animate.css/animate.min.css">
		<link rel="stylesheet" href="bower_components/superfish/dist/css/superfish.css">
		<link rel="stylesheet" href="css/styles.css">
		<link href="css/animate.min.css" rel="stylesheet">
		<link href="css/icon_fonts/css/all_icons_min.css" rel="stylesheet">
		<!-- Custom CSS-->
		<link rel="stylesheet" href="css/custom.css">
	</head>
	<body>
<?php include ('php/menu.php'); ?>
		<div class="site-overlay"></div>
		<div class="page-top-wrapper">
			<div class="page-header">
				<div class="container">
					<h1 class="page-header__title">Lavora con noi</h1>
					<ol class="breadcrumb breadcrumb_page-header">
						<li class="breadcrumb-item"><a href="index.html">Home</a></li>
						<li class="breadcrumb-item active">Lavora con noi</li>
					</ol>
				</div>
			</div>
		</div>
		<div class="page-content">
			<section class="section section_fullwidth section_color_default">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
						</br>
							<h2>Vuoi entrare a far parte del nostro Team?</h2>
							<p class="mb-9">
								Compila questo form con i tuoi dati e carica il tuo CV. Ti ricontatteremo prima di quanto imamagini.</p>
							<form id="contact-form" enctype="multipart/form-data" method="POST" action="php/contact-form-2.php">
								
								<input type="hidden" name="mail_subject" value="Lavora con noi MkT">
								
								<div class="alert alert-success hidden-xs-up" id="contact-alert-success"><strong>Success!</strong>&nbsp; Thank you for your message. Reply will be in a while!</div>
								<div class="alert alert-danger hidden-xs-up" id="contact-alert-error"><strong>Error!</strong>&nbsp; Something went wrong sending your message.</div>
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<input class="form-control" type="text" value="" data-msg-required="Inserisci il tuo nome e cognome." name="name" id="name" placeholder="Nome e Cognome *">
										</div>
										<div class="form-group">
											<input class="form-control" type="email" value="" data-msg-required="Inserisci il tuo indirizzo e-mail." data-msg-email="Il tuo indirizzo e-mail non sembra corretto." name="email" id="email" placeholder="Email *">
										</div>
										<div class="form-group">
											<input class="form-control" type="text" value="" data-msg-required="Inserisci un messaggio." name="subject" id="subject" placeholder="Oggetto">
										</div>
										<form method="post" action="" enctype="multipart/form-data">
									<form class="md-form">
									  <div class="file-field">
    									  <span>Carica il tuo CV (Max. 1 Mb)*</span>
    										  <input type="file" id="file" name="file">
   										 </div>
  											<div class="file-path-wrapper">
  											</div>
									</form>
									</div>
									<div class="col-md-8">
										<div class="form-group">
											<textarea class="form-control" data-msg-required="Please enter your message." rows="9" name="message" id="message" placeholder="Messaggio"></textarea>
										</div>
										<input class="btn btn-primary" type="submit" value="Invia la richiesta" data-loading-text="Caricando...">
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
<?php include ('php/footer.php'); ?>
		<!-- Javascript Files-->
		<script src="bower_components/jquery/dist/jquery.min.js"></script>
		<script src="bower_components/tether/dist/js/tether.min.js"></script>
		<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<script src="bower_components/superfish/dist/js/superfish.min.js"></script>
		<script src="bower_components/jquery.appear/jquery.appear.js"></script>
		<script src="bower_components/jquery-countTo/jquery.countTo.js"></script>
		<script src="bower_components/jarallax/dist/jarallax.min.js"></script>
		<script src="bower_components/jarallax/dist/jarallax-video.min.js"></script>
		<script src="bower_components/Swiper/dist/js/swiper.jquery.min.js"></script>
		<script src="bower_components/magnific-popup/dist/jquery.magnific-popup.min.js"></script>
		<script src="bower_components/Morphext/dist/morphext.min.js"></script>
		<script src="js/init.js"></script>
		<script src="js/custom.js"></script>
		<script src="bower_components/vegas/dist/vegas.js"></script>
	</body>
</html>