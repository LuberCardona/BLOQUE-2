// cuantos tanques de nafta?

/* un modelo de automovil tiene 3 versiones 

1. motor 1.6 -> 15km x lt
2. motor 1.8 -> 12km x lt
3. motor 2.0 -> 10km x lt

El tanque de nafta es igual para todos los modelos y la carga maxima es de 50lt.
Preguntarle al usuario que modelo esta usando y la cantidad de km que va a realizar 
indicarle cuantos tanques de nafta completos necesita para realizar el recorrido*/

//me falta la condicion si el usuario ingresa un modelo !== 1.6 || 1.8 || 2.0

var version = prompt("ingrese la version del automovil");
var distancia = prompt("ingrese los km a recorrer");
var cargaMaxima = 50;

var rendimientoV1_6 = 15 * cargaMaxima;  
var rendimientoV1_8 = 12 * cargaMaxima;
var rendimientoV2_0 = 10 * cargaMaxima;

if (version == 1.6){
    alert("# de tanques requeridos para el recorrido: " + distancia / rendimientoV1_6)
}

if (version == 1.8){
    alert("# de tanques requeridos para el recorrido: " + distancia / rendimientoV1_8)     
}

if (version == 2.0){
    alert("# de tanques requeridos para el recorrido: " + distancia / rendimientoV2_0) 
}



















































