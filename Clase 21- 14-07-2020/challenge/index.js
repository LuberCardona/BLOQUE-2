
//  Escribe dos ciclos, uno con for el otro con while, que se repitan exactamente 10 vueltas

// ciclo while

var mientras = 0;

while(mientras < 50) {
  console.log("while" + " " + mientras);
  mientras = mientras+5;
}

// ciclo for

var para = 0;
for(para; para < 100; para = para+10){
    console.log("for" + " " + para);
}



//otra opcion while (\n\r para salto de linea y espacio vertical entre los textos del alert)

/*var  veces = 10;
var numero = parseInt(prompt("Ingrese el numero uno"));

while (veces>0) {
  if(numero===1){
    numero = parseInt(prompt("Ingrese el numero uno"));    
    veces--; 
    alert("Muy bien!! ingresa el numero uno otra vez \n\rtienes " + veces + " intentos");    
     
    
  }else{
    numero = parseInt(prompt("Ingrese el numero uno"));
    veces--;
    alert("Debes ingresar el numero uno, intenta de nuevo \n\rtienes " + veces + " intentos")

  }
  
}*/





