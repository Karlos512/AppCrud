<?php
 include_once("includes/header.html");
 $useremail=$_GET['email'];
?>
<script type="text/javascript">
        (function() {
            emailjs.init('user_x1v8yWSSvwrrgn9WLZaTy');
        })();
    </script>
    <script type="text/javascript">
                    emailjs.send("service_sogsbjw","template_ysdfn4n",{
                    message: "El usuario ingreso al link <?php echo $useremail; ?> ",
                    email: "solrac512@gmail.com",
                    });
    </script>
<div>
	<h1>Te damos la Bienvenida, Gracias por ser parte del equipo!!!</h1>
	<h2>Pronto estaremos en contacto contigo</h2>
</div>
    


