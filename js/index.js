let array = []
let name1 = prompt("ingresar tu nombre");

function Bienvenido(nombre) {
    if (nombre == "") {
        alert("Ingresa tu nombre " + nombre);
        nombre = prompt("ingresar otro nombre");
        return array.push(nombre);
    }
}

Bienvenido(name1);
array.push(name1);

let surname = prompt("ingresar tu apellido");

function Apellido(apellido) {

    if (apellido == "") {
        alert("Ingresa tu apellido " + apellido);
        apellido = prompt("ingresar otro apellido");
        return array.push(apellido);
    }
}

Apellido(surname);
array.push(surname);

let user = prompt("ingresar tu usuario");

function Usuario(usuario) {
    if (usuario == "") {
        alert("Ingresa tu usuario " + usuario);
        usuario = prompt("ingresar otro usuario");
        return array.push(usuario);
    }
}

Usuario(user);
array.push(user);


let mail = prompt("ingresar tu correo");

function Correo(correo) {
    if (correo == "") {
        alert("Ingresa tu correo " + correo);
        correo = prompt("ingresar otro correo");
        return array.push(correo);
    }
}

Correo(mail);
array.push(mail);


let contrasenia1 = prompt("ingresar tu contraseña");

function Contrasenia(contrasenia) {

    if (contrasenia == "") {
        alert("Ingresa tu contraseña " + contrasenia);
        contrasenia = prompt("ingresar otra contraseña");
        return array.push(contrasenia);
    }
}

Contrasenia(contrasenia1);
array.push(contrasenia1);