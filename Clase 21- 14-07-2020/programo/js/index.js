
// DO WHILE
/*var num_do_while = 5;

do {
    console.log("valor de la variable: " + num_do_while);
    num_do_while++;
} while (num_do_while < 5);
console.log("valor final de la variable: " + num_do_while);  //es 6 porque se ejecuta el ++ antes del while*/



//WHILE
/*var num_while = 5;    
while (num_while < 5);{
    console.log("valor de la variable: " + num_while);
    num_while++;
}
console.log("valor final de la variable: " + num_do_while);  /*es 5 porque no se ejecuta la condicion 
que hay en el while al ser false y sigue con el codigo que hay debajo despues de que sale de la validacion*/



//FOR
/*var num_for = 10;
for(contador = 0; contador < 10; contador++){
    console.log(contador);
} /*con ++ de uno en uno con += o -= puedo elegir el valor a incrementar o decrecer diferente a uno*/



//SWITCH

/*var num1 = parseInt(prompt("Ingrese el primer numero"));
var operacion = prompt("¿Que operacion desea realizar? (+, -, /, *)");
var num2 = parseInt(prompt("Ingrese el segundo numero"));

switch (operacion) {
    case "+":
        alert("El resultado de la suma es: " + (num1 + num2));        
        break;
    case "-":
        alert("El resultado de la resta es: " + (num1 - num2));        
        break;
    case "/":
        alert("El resultado de la division es: " + (num1 / num2));        
        break;
    case "*":
        alert("El resultado de la multiplicacion es: " + (num1 * num2));        
        break;
        
    default:
        alert("Operacion no permitida");
        break;
}*/



//FUNCION

var nombre = prompt("Ingresa tu nombre");

function saludarUsuario(nombreUsuario){
    alert("Bienvenido al mundo de la programacion " + nombreUsuario + "!!!");
    console.log(nombreUsuario);
}
saludarUsuario(nombre);

//opcion2 - la variable no tiene un valor primitivo

/*var saludarUsuario = function (nombreUsuario){
    alert("Bienvenido al mundo de la programacion " + nombreUsuario + "!!!");
    console.log(nombreUsuario);
}
saludarUsuario(nombre); */

 
//opcion3 - solo disponivle en ES6 ECMA Script 6

/*var saludarUsuario = (nombreUsuario) => { //esta felcha => representa la funcion
    alert("Bienvenido al mundo de la programacion " + nombreUsuario + "!!!");
    console.log(nombreUsuario);
}
saludarUsuario(nombre);*/









