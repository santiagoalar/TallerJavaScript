function crearInventario(){

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

module.exports = crearInventario;


