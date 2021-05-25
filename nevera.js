var Electrodomestico = require('./electro.js');

function Nevera(consumo, procedencia, cantidadLitros){
	Electrodomestico.call(this, consumo, procedencia);
	this.cantidadLitros = cantidadLitros;
}

Nevera.prototype = Object.create(Electrodomestico.prototype);

Nevera.prototype.getPrecioTotal= function(){
	return this.calcularPrecioBase() + precioLitros(this.cantidadLitros, this.precioBase);
}

function precioLitros(cantidadLitros, precioBase){
    nuevaCantidad = (cantidadLitros>120)?(Math.round((cantidadLitros - 120)/10)*0.05)*precioBase:0;
    console.log("el precio base es " + precioBase + " la nueva cantidad es " + nuevaCantidad)
    return nuevaCantidad;
}

module.exports = Nevera;