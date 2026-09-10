function login() {
    let usuario,contra;
     let validacionUsuarios=false;
     let Correo = localStorage.getItem("correo");
    let contrasenia= localStorage.getItem("password")

usuario= document.getElementById("usuario").value;
contra= document.getElementById("contrasenia").value;

localStorage.getItem("nombre"),

localStorage.getItem("telefono")




if((usuario == "azael@gmail.com") && (contra ==  "1234")){
validacionUsuarios=true;
window.location= "index.html";

}
if((usuario == Correo) && (contra ==  contrasenia)){

    validacionUsuarios=true;
window.location= "index.html";

}



else if (usuario == "" && contra == "") {

    alert("no puede dejar los espacios vacios.");
    


}

else if (validacionUsuarios==false) {
    
alert("el usuario o contrasenia son incorrectos.")

}



}











