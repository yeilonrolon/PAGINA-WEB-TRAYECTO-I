
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');



    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    const campos = {
        nombre: false,
        password: false,
        password2: false,
        correo: false,
        telefono: false
    }



    const validarFormulario = (e) => {
        switch (e.target.name) {
        
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password');
                validarPassword2();
            break;
            case "password2":
                validarPassword2();
            break;
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
            break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
  }
    }






    const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
campos[campo] = true;
        } else {
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
  campos[campo] = false;
        }
    }

    const validarPassword2 = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('password2');

        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
                        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
                        campos['password2'] = false;
                    } else {
                        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
                        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
                        campos['password2'] = true;
                    }

                }
 function register(){  

const Nombre = document.getElementById("nombre").value
const password= document.getElementById("password").value
const telefono = document.getElementById("telefono").value
const correo = document.getElementById("correo").value
    if (campos.nombre==true  && campos.password2==true  &&  campos.telefono==true && campos.password==true &&  campos.correo==true) {


localStorage.setItem("nombre",Nombre),
localStorage.setItem("password",password),
localStorage.setItem("telefono",telefono),
localStorage.setItem("correo",correo);



        window.location="login.html";
        
    }



else{alert("por favor rellene todos los campos de manera correcta")}



      }


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario,);
    input.addEventListener('blur', validarFormulario);
});
