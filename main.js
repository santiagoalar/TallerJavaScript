const Electrodomestico = require('./electro.js');
const Nevera = require('./nevera.js');
const Televisor = require('./televisor.js');

/*const electro1 = new Electrodomestico("B","nacional");
const electro2 = new Electrodomestico("B","nacional");
const electro3 = new Electrodomestico("B","nacional");
const electro4 = new Electrodomestico("B","nacional");
const electro5 = new Electrodomestico("B","nacional");

const tele1 = new Televisor("A","internacional");
const tele2 = new Televisor("A","internacional",50,"true");*/

const nev1 = new Nevera("B", "nacional", 130);
nev1.getPrecioTotal();

/*
process.stdin.on('data', function(data){
	nombre =  data.toString();
	//process.stdout.write("Hola " + nombre + "!");
	process.exit();
});*/