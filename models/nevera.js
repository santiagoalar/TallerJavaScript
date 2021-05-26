var Electrodomestico = require('./electro.js');

function Nevera(consumo, procedencia, cantidadLitros){
	Electrodomestico.call(this, consumo, procedencia);
	this.cantidadLitros = cantidadLitros;
    this.tipo ="Nevera ";
}

Nevera.prototype = Object.create(Electrodomestico.prototype);

Nevera.prototype.getPrecioTotal= function(){
	return this.calcularPrecioBase() + precioLitros(this.cantidadLitros, this.precioBase);
}

function precioLitros(cantidadLitros, precioBase){
    return (cantidadLitros>120)?(Math.round((cantidadLitros - 120)/10)*0.05)*precioBase:0;;
}

module.exports = Nevera;