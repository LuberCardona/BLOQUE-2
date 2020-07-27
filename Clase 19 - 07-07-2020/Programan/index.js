
//LLEGA?
/*un automovil tiene un consumo de combustible de 15km por litro.
su tanque de Nafta puede almacenar 45lt de combustible 
solicitar al usuario la cantidad de kilometros que va a recorrer,
Dar un aviso al usuario si llegara a recorrer la distancia con un tanque de Nafta completa o debera 
abastecerse de combustible en su trayecto para llegar a su destino*/


/*var distancia = 675;

var combustibleMaximo = 45;
var rendimiento = 15;
var distanciaMaxima = combustibleMaximo * rendimiento;

if(distancia > distanciaMaxima){
    console.log("debe recargar combustible");
} else{
    console.log("no es necesario recargar combustible");
}

/*si cambio en la condicion if la operacion de comparacion entonces si coloco 675
cambia el mensaje output, en este ejm se cumple la primera condicion a diferencia del 
ejercicio anterior*/

/*var distancia = 675;

var combustibleMaximo = 45;
var rendimiento = 15;
var distanciaMaxima = combustibleMaximo * rendimiento;

if(distancia >= distanciaMaxima){
    console.log("debe recargar combustible");
} else{
    console.log("no es necesario recargar combustible");
}


/*con el elseif (significa : sino, si.. se cumple otra condicion (){} else{})
ejemplo*/

var distancia = 675;

var combustibleMaximo = 45;
var rendimiento = 15;
var distanciaMaxima = combustibleMaximo * rendimiento;

if(distancia > distanciaMaxima){
    console.log("debe recargar combustible");
} else if(distancia === distanciaMaxima){
    console.log("llega apenas pero no puede volver");
} else{
    console.log("no es necesario recargar combustible");
}



