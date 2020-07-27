

/*solicita 2 numeros atraves de la funcion prompt y muestra el resultado de la suma
de ambos mediante la funcion alert*/

var numero1 = parseInt(prompt("Ingrese el primer numero"));

/*if (typeof(numero1)==="number"){
    var numero2 = parseInt(prompt("ingrese el segundo numero"));
}*/

if (!isNaN(numero1)){
    var numero2 = parseInt(prompt("ingrese el segundo numero"));
    if (!isNaN(numero2)){
    
        alert('El resultado es ' + (numero1 + numero2));
        
    } else{
        alert('El segundo numero esta mal');
    }
} else{
    alert('El primer numero esta mal');
    }





/*if (isNaN(numero1) || isNaN(numero2)){
    alert("Por favor ingrese datos numericos");
} 
else {
    alert("El resultado es: " +  (numero1 + numero2));

}*/


/*if (!isNaN(numero1) && !isNaN(numero2)){
    alert('El resultado es ' + (numero1 + numero2));
}else{
    alert('No se admite este tipo de dato, por favor ingrese un número');
}*/












