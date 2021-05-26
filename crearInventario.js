let InvElectrodomestico = require('./InvElectrodomestico');
const Electrodomestico = require('./models/electro.js');
const Televisor = require('./models/televisor.js');
const Nevera = require('./models/nevera');

let arregloElectro = [];

const agregar = (objeto, consumo, procedencia, cantidad) => {
	var invElec = new InvElectrodomestico(cantidad, new objeto(consumo, procedencia));
	arregloElectro.push(invElec);
}
agregar(Electrodomestico, "A", "Importado",3);
agregar(Nevera, "A", "Importado",3);
console.log(arregloElectro); 

module.exports = agregar;
//agregar(Electrodomestico, "A", "nacional",5);



/*function crearInventario(){

    //var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
   // obj.name();

    console.log("Entro a inventario");


    process.stdout.write("Escoja el tipo de electrodoméstico\n1. Televisor\n2. Nevera\n0. Electrodomestico general\n0. Finalizar facturación\n");
	process.stdin.on('data', function(data){
		answer =  data.toString();
		if(answer == 1){
			Inventario();
		}else if(answer == 2){
			Facturacion();
		}else if(answer == 0){
			process.exit();
		}
	});
}

module.exports = crearInventario;*/


/**
let arregloElectro = [];

const agregar = (objeto, consumo, procedencia, cantidad) => {
  for (let index = 0; index < cantidad; index++) {
    const element = new objeto(consumo, procedencia);
    arregloElectro.push(element)
  }
}
agregar(Electrodomestico, "A", "Importado",3);
agregar(Nevera, "A", "Importado",3);
console.log(arregloElectro); */


