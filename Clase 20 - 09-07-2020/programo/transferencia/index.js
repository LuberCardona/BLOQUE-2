
/*Transferencia bancaria
El usuario quiere transferir dinero a otro usuario.
Solicita al usuario source la cantidad de dinero que
quiere transferir y a quién desea hacerlo.
Tu aplicación debe validar:
-
Que tenga fondos para enviar dinero
-
Que el destinatario exista
Si las validaciones pasan correctamente muestra un
mensaje de “Transacción exitosa”*/


var fondos = 1000000;
var idDestinatario = 1039447428;

var valorTransferencia = parseInt(prompt("Ingrese el valor a transferir"));

if((valorTransferencia <= 0) || (isNaN(valorTransferencia))){
    alert("por favor ingrese un valor numerico y que sea mayor a cero")
}else if(valorTransferencia <= fondos){
        var destinatario = parseInt(prompt("Ingrese la identificacion del destinatario"))

            if((destinatario === idDestinatario) && (!isNaN(idDestinatario))){
                alert("Transacción exitosa")
                alert("su saldo es: " + (fondos-valorTransferencia))
                
            }else {
                alert("El destinatario no existe")
                alert("vuelva a iniciar la transaccion")                
            }

        } else{
            alert("fondos insuficientes")
            alert("vuelva a iniciar la transaccion")
        }
    


    







    






































































