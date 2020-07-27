
/*Solicitar al visitante que ingrese su nombre de usuario.
Almacenar el nombre de usuario ingresado el una función.
Escenario 1: El nombre no está en la lista.
Darle la bienvenida al nuevo usuario
Escenario 2: El nombre de usuario existe.
Dar un aviso al usuario que el nombre de usuario se encuentra en uso
Utilizar una función con try / catch para realizar la validación.*/

let usuarios = ["David", "Pedro", "Pepito", "Pepe", "Arnulfo",];
let usuario = prompt("Ingrese su nombre se usuario");


function adicionarUsuario(user){
    const indef="undefined";
    try{
        if (typeof(user)=== indef){
            throw new Error("No ingreso ningun usuario");
                       
        }
        for (let i = 0; i < usuarios.length; i++){
            if(usuarios[i]===user){
                alert("El nombre de usuario esta en uso, ingrese uno diferente");
            }else{
                contador++;
            }
        }
        if(contador==usuarios.length){
            usuarios.push(user);
            // alert("Bienvenido " + user); esta es una opcion o la siguiente
            alert(´Bienvenido ${user});
        }
        console.log(usuarios);

    }catch (error){
        console.error(error);
    }

}



// invocar la funcion
adicionarUsuario(usuario);


