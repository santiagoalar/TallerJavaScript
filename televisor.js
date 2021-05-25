var Electrodomestico = require('./electro.js');

function Televisor(consumo, procedencia, tamano, tieneTdt){
	Electrodomestico.call(this, consumo, procedencia);
	this.tamano = tamano;
	this.tieneTdt = tieneTdt;
}

Televisor.prototype = Object.create(Electrodomestico.prototype);

Televisor.prototype.getPrecioTotal= function(){
	return this.calcularPrecioBase() + precioPulgadas_tv(this.precioBase, this.tamano) + precioTdt(this.tieneTdt);
}

function precioPulgadas_tv(precioBase, tamano){
    return (tamano>40)?precioBase*0.3:0;
}

function precioTdt(tieneTdt){
	return (tieneTdt=='true')?250000:0;
}

module.exports = Televisor;