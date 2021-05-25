// My module
function Electrodomestico(consumo, procedencia, tipo) {
  	this.consumo = consumo;
	this.procedencia = procedencia;
	this.precioBase = this.calcularPrecioBase();
}

Electrodomestico.prototype = {
	calcularPrecioBase: function(){
		this.precioBase = aplicarConsumo(this.consumo) + aplicarProcedencia(this.procedencia);
  		return this.precioBase;
	},
	getPrecioTotal: function(){
		return this.precioBase;
	}
}

function Televisores(consumo, procedencia, tamano, tieneTdt){
	Electrodomestico.call(this, consumo, procedencia);
	this.tamano = tamano;
	this.tieneTdt = tieneTdt;
}

Televisores.prototype = Object.create(Electrodomestico.prototype);

function aplicarConsumo(consumo){
	var precioConsumo = 0;
	if (consumo == "A") {
		precioConsumo = 450000;
	}else if(consumo == "B"){
		precioConsumo = 350000;
	}else if(consumo == "C"){
		precioConsumo = 250000;
	}
	return precioConsumo;	
}

function aplicarProcedencia(procedencia){
	return (procedencia == "nacional")? 250000:350000;
}

module.exports = Electrodomestico;