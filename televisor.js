var Electrodomestico = require('./electro.js');

function Televisor(consumo, procedencia, tamano, tieneTdt){
	Electrodomestico.call(this, consumo, procedencia);
	this.tamano = tamano;
	this.tieneTdt = tieneTdt;
}

Televisor.prototype = Object.create(Electrodomestico.prototype);

Televisor.prototype.pulgadas_tv = function(){
    return this.pulgadas_tv;
}


module.exports = Televisor;