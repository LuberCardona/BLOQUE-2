
/*#3. Edades
Ingresar N cantidad de edades mediante prompt hasta que se ingrese un cero.
Al finalizar mostrar cuántos son mayores de edad 
Muestra el resultado con un alert
Válida la mayoría de edad a través de una función*/


//2
var mayores=0;
   
while (edad!==0){   
    var edad=parseInt(prompt("ingrese su edad"));

    if (isNaN(edad) || edad<0){  
        alert("Ingrese un numero valido mayor o igual a cero")
    }else if(edad>=18){      
        mayores++;  
    }
}
alert("como usted ingreso 0...El programa calculara cuantos son mayores de edad hasta aqui...")
alert("Mayores de edad son: " + mayores);

    
   



     
    


