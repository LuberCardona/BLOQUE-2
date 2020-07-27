
/*#1. Sumemos
Crear un script que permita ingresar solamente 5 valores mediante prompt y nos muestre la
suma total de todos los valores ingresados. Mostrar el resultado utilizando un alert*/

var valores=0;
var suma=0;
var promedio=0;
var i=0;

alert("Puedes sumar maximo 5 valores")

for (i = 0; i < 5; i++) {      
     valores=parseInt(prompt("Ingrese el valor numero " + (i + 1) + " a sumar"));

    if(!isNaN(valores) && valores>0){
        suma = suma + valores;
    }else{
        alert("Ingrese un valor numerico y que sea mayor a cero")
        i--;
    }    
}

alert("la suma de los valores ingresados es: " + suma);
