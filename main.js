var Electrodomestico = require('./electro.js');
var Televisor = require('./televisor.js');

const electro1 = new Electrodomestico("B","nacional");
const tele1 = new Televisor("A","internacional",50,"true");

var value = electro1.calcularPrecioBase();
var value2 = tele1.calcularPrecioBase();
var value3 = tele1.pulgadas_tv();
console.log(value2);
console.log(value3);



/*process.stdin.on('data', function(data){
	nombre =  data.toString();
	this.electro5.calcularPrecioBase();
	//process.stdout.write("Hola " + nombre + "!");
	process.exit();
});*/