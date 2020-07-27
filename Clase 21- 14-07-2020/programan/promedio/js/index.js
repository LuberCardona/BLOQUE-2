
/* #2. Promedio
A nuestro script agreguemos el promedio de todos los números ingresados.
Muestra el resultado con un alert ¿Validaron que los datos ingresados sean números?
Si no lo hicieron, éste es el momento*/

var valores=0;
var suma=0;
var i=0;
var promedio=0;

alert("Puedes ingresar maximo 5 valores para la suma y el promedio")

for (i = 0; i < 5; i++) { 
     valores=parseInt(prompt("Ingrese el valor numero " + (i + 1) + " a sumar"));

    if(!isNaN(valores) && valores>0){
        suma = suma + valores;
    }else{
        alert("Ingrese un valor numerico y que sea mayor a cero")
        i--;
    }    
}
promedio = suma / i;
alert("la suma de los valores ingresados es: " + suma);
alert("El promedio de los valores ingresados es: " + promedio);
