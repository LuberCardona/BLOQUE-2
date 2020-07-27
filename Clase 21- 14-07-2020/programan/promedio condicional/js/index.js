
/*#4. Promedio condicional
Ingresar N cantidad de números mediante prompt
Mostrar el promedio de los números ingresados de 1 dígito.
Terminar el programa con la palabra “salir”.
Muestra el resultado con un alert
Genera el promedio utilizando una función*/

//este no lo he terminado

var valores=0;
var suma=0;
var i=0;
var promedio=0;
       
while (valores<100) {
    var valores=parseInt(prompt("Ingrese el valor numero " + (i + 1) + " a sumar"));

    if(!isNaN(valores) && (valores>=0) && (valores<10)){
        suma = suma + valores;
        i++;

    }else{
        alert("Por favor ingrese un numero valido mayor o igual a cero y menor o igual a 100");
    }

}alert("Salir del programa");
alert("El promedio de los valores ingresados es: " + (promedio = suma / i));



    





