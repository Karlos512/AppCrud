<?php
     session_start();
     if (isset($_SESSION['usuario'])) {
        header('location:index.php');
     }

         $usuario=$_POST['email'];   
         $pass=$_POST['pass'];  

         if ($usuario==='admin' && $pass==='1234') {
             header('location:dashboard.php');
         }else {
            $_SESSION['usuario']=$usuario;
            header('location:index.php');
         }

?>  