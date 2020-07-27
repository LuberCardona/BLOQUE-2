
/*Dial de radio

Crea un algoritmo que valida que una radio exista.
Pide al usuario que ingrese un dial y valida la
existencia de la radio con las siguientes condiciones:
-
El dial debe ser impar
-
El dial debe ser mayor o igual a 89.9
-
El dial debe ser menor a 107.9*/


var dial = parseFloat(prompt("Ingrese el dial")); //definir la variable como decimal ?  

if (dial % 2 !== 0 && dial >= 89.9 && dial < 107.9){
    alert("La radio SI existe")
   
}else{
    alert("La radio NO existe")
}






























































