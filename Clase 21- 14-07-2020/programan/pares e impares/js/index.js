
/*#5. Pares e impares
Ingresar N cantidad de números mediante prompt
Mostrar quién tuvo más ingresos, si los pares o los impares
Terminar el programa un 0.
Muestra el resultado con un alert
Calcula si el número ingresado es par o impar a través de una función.*/

var par=0;
var impar=0;
   
while (numero!==0){   
    var numero=parseFloat(prompt("ingrese un numero"));
    if(isNaN(numero) || numero<0){
        alert("Por favor ingrese un numero valido mayor a cero");
    }else if((numero % 2 == 0) && (numero!==0)){ 
             par++;                         
    }else if(numero % 2 !== 0){ 
             impar++;        
    }    
}alert("Resultados");
    if(par>impar){
        alert("hubo mas ingreso de numeros pares con un total de " + par  + " pares ingresados");
    }else{
        alert("hubo mas ingreso de numeros impares con un total de " + impar + " impares ingresados");
    }alert("Fin del programa");

/* Si el usuario coloca cero al primer intento el programa sale pero igual da totales de impares*/




  