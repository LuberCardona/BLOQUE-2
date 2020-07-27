/*
Genera un array con al menos 10 datos de diferentes tipos.
Tu script debe dar los siguientes outputs:

1. La suma de todos los valores numéricos
2. Un nuevo array con todos los datos no numéricos
*/


let numeros = [1,2,3,4,5]
let datos = new Array();

datos[0]="Dato1";
datos[1]=2;
//datos [2]; esto es un comentario para saber que deje esta posicion 2 indefinida
datos[3]=""; //String vacio
datos[4]=null;
datos[5]=true;
datos[6]=5;
datos[7]=numeros; //Array
datos[8]=false;
datos[9]="ultimo";

let suma=0;
let noNumericos=[]
const NUM = "number";

for(let i = 0; i < datos.length; i++){

   /* suma+= typeof(datos[i])===NUM ? datos[i] : 0; // esto es lo mismo que lo que hay dentro del  if else*/

    if(typeof(datos[i])!==NUM)
     noNumericos.push(datos[i])
       
}

console.log("el total de la suma es: " + suma);
console.log("al arreglo con los datos no mumericos es: " + noNumericos)


