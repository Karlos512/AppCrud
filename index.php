<?php
 include_once("includes/header.html");
?>
<section id="sectionsesion" class="row d-flex justify-content-center">
<div class="containersesion">
        <div class="row d-flex justify-content-center">
            <div class="menu-content pb-60 col-lg-8">
                <div class="title text-center">
                    <div class="card">
                        <div class="card-body">
                            <form id="formulario_inicio" method="post" action="login.php">
                                <legend id="cabecera">INICIO DE SESIÓN</legend>
                                <img src="assets/img/sesion.png">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="email" placeholder="Usuario" autofocus>
                                </div>
                                <div class="form-group">
                                    <input type="password" id="pass" class="form-control" name="pass" placeholder="Contraseña" >
                                </div>
                                <input type="submit" class="btn btn-success" name="Entrar" >
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
</html>