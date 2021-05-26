//const Electrodomestico = require('./models/electro.js');
const Nevera = require('./models/nevera');
const Televisor = require('./models/televisor.js');
const Inventario = require('./crearInventario');
const Facturacion = require('./Facturacion');

selectOption()

function selectOption(){
	process.stdout.write("Eliga una opcion \n1. Crear inventario base\n2. Crear factura\n0. Salir\n");
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

function selectConsumo(){
	process.stdout.write("Eliga el tipo de consumo: \nA. (450.000)\nB. (350000)\nC. (250000)\n0. Salir\n");
	process.stdin.on('data', function(data){
		answer =  data.toString();
		if(answer == "A" || answer == "a"){
			consumo = answer.toUpperCase();
		}else if(answer == "B" || answer == "b"){
			consumo = answer.toUpperCase();
		}else if(answer == "C" || answer == "c"){
			consumo = answer.toUpperCase();
		}else if(answer == 0){
			process.exit();
		}
	});
}

function selectProcedencia(){
	process.stdout.write("Elija la procedencia: \n1. nacional\n2. internacional");
	process.stdin.on('data', function(data){
	
	});
}

/*process.stdout.write("Eliga que opción el tipo de electrodoméstico: \n1. Nevera\n2. Televisor\n3. Electrodoméstico general\n0. Salir\n");
process.stdin.on('data', function(data){
	answer =  data.toString();
	if(answer == 1){
		procesarNevera()
	}else if(answer == 2){
		procesarTelevisor()
	}else if(answer == 3){
		procesarElectrodomestico()
	}else if(answer == 0){
		process.exit();
	}
});*/
/*
process.stdout.write("Eliga el tipo de consumo: \nA. (450.000)\nB. (350000)\nC. (250000)\n0. Salir\n");
process.stdin.on('data', function(data){

});*/
/*
process.stdout.write("Elija la procedencia: \n1. nacional\n2. internacional");
process.stdin.on('data', function(data){

});*/

