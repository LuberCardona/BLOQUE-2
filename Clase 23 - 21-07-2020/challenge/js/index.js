
/*Toma alguna de las propiedades y métodos que creaste en tu clase “Aviones” y
 genera un objeto a partir de la definición de tu clase.*/

/*class Aviones{

    constructor(alto, fuselaje, asientos_business_class, asientos_economy_class){  //parametros

        this.alto = alto;        //   atributos
        this.fuselaje = fuselaje;  
        this.asientos_business_class = asientos_business_class;
        this.asientos_economy_class = asientos_economy_class;
    }
    asientosMaxVenta(){   // metodo -funcion
        return this.asientos_business_class + this.asientos_economy_class;
    }  
   
}
//instanciar objetos

let boeing787 = new Aviones(18, "ancho", 21, 219);
let airbus330 = new Aviones(17, "ancho", 28, 269 ); 
let airbus320 = new Aviones(12, "estrecho", 0, 220);

 console.log("Asientos para la venta B787: " + (boeing787.asientosMaxVenta()));
 console.log("Asientos para la venta A330: " + (airbus330.asientosMaxVenta()));
 console.log("Asientos para la venta A320: " + (airbus320.asientosMaxVenta()));*/

 class Perro{

    constructor(nomb, tamaño, raza, color, edad, sexo){  //parametros
        this.nombre = nomb;
        this.tamaño = tamaño;        //   atributos
        this.raza = raza;  
        this.color = color;
        this.edad = edad;
        this.sexo = sexo;
        this.estado = null;
    }

    modificarEstado(valor){
        this.estado = valor;
    }

    estadoAdopcion(){ 
        return this.estado         
    }
}

var perros = [];

do{
    let nom = prompt("Ingrese nombre");
    let tamano = prompt("Ingrese tamaño");
    let raza = prompt("Ingrese raza");
    let color = prompt("Ingrese color");
    let edad = prompt("Ingrese edad");
    let sexo = prompt("Ingrese sexo");
    let estado = prompt("Ingrese estado");
    let perro = new Perro(nom, tamano, raza, color, edad, sexo);
    perro.modificarEstado(estado);
    perros.push(perro);

}while(confirm("Desea ingresar una mascota")); 

console.log(perros);


 


 













 

 







