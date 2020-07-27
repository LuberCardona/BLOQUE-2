
/*Crea un ciclo de tipo DO WHILE 
- Solicita al visitante un usuario y contraseña 
- Crea una funcion para validar que los datos ingresados son correctos  
si son correctos: corta la ejecucion del ciclo 
si son incorrectos vuelve a solicitar al visitante usuario y contraseña*/

var usuario = "dwfs";
var contrasena = "acamica123";

let aprobado = false;

do {
    var usuarioIngresado =  prompt("Ingresa el usuario");
    var contrasenaIngrasada = prompt ("Ingrese la contraseña");
    if (usuarioIngresado === usuario && contrasenaIngrasada === contrasena){
        aprobado=true;
    }
    
} while (!aprobado);

alert("usuario aprobado!!");
