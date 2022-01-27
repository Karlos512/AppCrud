<?php
 include_once("includes/header.html");
 session_start();
 if (isset($_SESSION['usuario'])) 
?>
<header>
    <section class="banner-area" id="home">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">WEPORT</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          
              <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                    <a class="nav-link active" href="#" id="nuevo">Agregar Nuevo
                    </a>
                  <li class="nav-item">
                    <a class="nav-link" href="salir.php">Salir</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </section>
</header>

<div class="container" style="display:none;">
        <div class="row d-flex justify-content-center">
            <div class="menu-content pb-60 col-lg-8">
                <div class="title text-center">
                    <div class="card">
                        <div class="card-body">
                            <form id="formulario">
                                <legend id="cabecera">AGREGAR NUEVO EMPLEADO</legend>
                                <div class="form-group">
                                    <input type="text" id="nombre" class="form-control" placeholder="Nombre(s)" autofocus>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="apellidoPaterno" class="form-control" placeholder="Apellido Paterno" >
                                </div>
                                 <div class="form-group">
                                    <input type="text" id="apellidoMaterno" class="form-control" placeholder="Apellido Materno" >
                                </div>
                                <div class="form-group">
                                    <input type="email" id="email" class="form-control" placeholder="Email" >
                                </div>
                                 <div class="form-group">
                                    <input type="password" id="pass" class="form-control" placeholder="Contraseña" >
                                </div>
                                <button class="btn btn-success" id="btn-guardar">Guardar</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        $("#nuevo").click(function(){
           $(".container").toggle(1000,function() {
            });
        });
    </script>
        

        <div class="container" id="containercatalogo">
            <legend>EMPLEADOS</legend>		
            <div class="row d-flex justify-content-center">
                <table class="table table-hover" id="tablaEmpleados">
                  <thead>
                    <tr id="cabeceratable">
                      <th scope="col">Nombre</th>
                      <th scope="col">Email</th>
                      <th scope="col">Editar</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
            </div>
        </div>	
    
    <script src="assets/js/funciones.js" type="module"></script>

</body>
</html>
