
/*Te proponemos crear tu primer array de frutas y mostrar
cada una de ellas mediante un ciclo tipo while*/

var frutas = ["Mango", "Maracuya", "Naranja", "Uva", "Fresa"]
frutas.sort(); //oredenar pero interna mente no se mustra como queda aqui
var contador = 0;

while (contador<frutas.length) {
    console.log(frutas[contador]); //
    contador++;    
}

/*imprima frutas en la posicion [contador] y contador vale 0 y cero es mango,
pero al ordenar .sort(); fresa es la posicion 0; como identifico esto, que no tenga que ser 
desde la consola?*/

