 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
 import { getFirestore, doc,getDocs, collection, addDoc, deleteDoc, updateDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBLqN8i580ilFsXWENGAhYmDKRdh0LAHas",
    authDomain: "empleadosfirebase-dc526.firebaseapp.com",
    projectId: "empleadosfirebase-dc526",
    storageBucket: "empleadosfirebase-dc526.appspot.com",
    messagingSenderId: "838181556814",
    appId: "1:838181556814:web:576fe0b6af4564c37ca91f"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 
 //
 const formulario = document.querySelector('#formulario');
 const registro = document.querySelector('#tablaEmpleados');
 
 let editStatus = false;
 let id = '';
 
 // FUNCIONES        
 const getEvento = (id) => getDoc(doc(db, "empleados", id )); 
 const getEventos = () =>  getDocs(collection(db, "empleados")); 
 const guardarEvento = (DatosEmpleado) => addDoc(collection(db, "empleados"), DatosEmpleado); 
 const eliminaEvento = (id) => deleteDoc(doc(db, "empleados", id)); 
 const actualizarEvento = (id,EmpleadoDatosAct) => updateDoc(doc(db, "empleados", id),EmpleadoDatosAct); 

 /////////////////////// LISTAR RESULTADOS ///////////////////////////
 window.addEventListener('DOMContentLoaded', async (e) =>{
 const querySnapshot = await getEventos();
 querySnapshot.forEach((doc) => {
          
 const empleado=doc.data();


     registro.innerHTML += `
                    <tr>
                      <th scope="row">${empleado.nombre} ${empleado.apellidopaterno} ${empleado.apellidomaterno}</th>
                      <td>${empleado.email}</td>
                      <td><button type="button" class="btn btn-info btnActualiza" data-id="${doc.id}"><img src="assets/img/actualizar.png" alt="Actualizar"></button></td>
                      <td><button type="button" class="btn btn-danger btnEliminar" data-id="${doc.id}"><img src="assets/img/eliminar.png" alt="Eliminar"></button></td>
                    </tr>`;   
  });

 ///////////////////////////////////////////////////////////////////
 const btnsEliminar = document.querySelectorAll('.btnEliminar');
     btnsEliminar.forEach(btnE =>{
         btnE.addEventListener('click', async (e) => {
             var id = e.target.dataset.id;
             console.log(id);
             await eliminaEvento(id);
             alert("Borrado Exitosamente");
             location.reload();
         });
     });
 //////////////////////////////////////////////////////////////////

     const btnsActualiza = document.querySelectorAll(".btnActualiza");
         btnsActualiza.forEach((btnA) => {
         btnA.addEventListener("click", async (e) => {
             console.log(e.target.dataset.id);
             try {
             const docSnap = await getEvento(e.target.dataset.id);
             const empleado = docSnap.data();
             formulario['nombre'].value = empleado.nombre;
             formulario['apellidoPaterno'].value = empleado.apellidopaterno;
             formulario['apellidoMaterno'].value = empleado.apellidomaterno;
             formulario['email'].value = empleado.email;
             formulario['pass'].value = empleado.password;

             editStatus = true;
             id = docSnap.id;

             $(".container").toggle(1000,function() {
             });

             document.querySelector("#cabecera").innerHTML = "ACTUALIZAR EMPLEADO '"+empleado.nombre+"'"; 
             formulario["btn-guardar"].innerText = "Actualizar";

             } catch (error) {
             console.log(error);
             }
         });
         });
  }); 

 formulario.addEventListener("submit", async (e) => {
 e.preventDefault();

 const nombre = formulario["nombre"];
 const apellidop = formulario["apellidoPaterno"];
 const apellidom = formulario["apellidoMaterno"];
 const email = formulario["email"];
 const pass = formulario["pass"];
  

 try {
     if (!editStatus) {
         await guardarEvento({
         nombre: nombre.value,
         apellidopaterno: apellidop.value,
         apellidomaterno: apellidom.value,
         email: email.value,
         password: pass.value
         });

        (function() {
                emailjs.init('user_x1v8yWSSvwrrgn9WLZaTy');
            })();

            emailjs.send("service_sogsbjw","template_ysdfn4n",{
            message: "Te damos la bienvenida, porfavor ingresa el siguiente enlace  https://myappswebc.000webhostapp.com/enviar.php?email="+email.value+"",
            usuario: nombre.value,
            email: email.value,
            }).then(function() {
                        console.log('SUCCESS!');
                        location.reload();
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
                            


     } else {
     await actualizarEvento(id, {
         nombre: nombre.value,
         apellidopaterno: apellidop.value,
         apellidomaterno: apellidom.value,
         email: email.value,
         password: pass.value
     });

     editStatus = false;
     id = '';
     alert("Se actualizo con exito");
     formulario["btn-guardar"].innerText = "Guardar";
     location.reload();
    }

     formulario.reset();
     titulo.focus();
 } catch (error) {
     console.log(error);
 }
 });

