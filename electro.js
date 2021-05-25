// My module
function Electrodomestico(consumo, procedencia, tipo) {
  	this.consumo = consumo;
	this.procedencia = procedencia;
	this.tipo = tipo;
	this.precioBase = 0;
}

Electrodomestico.prototype = {
	calcularPrecioBase: function(){
		var precioBase = aplicarConsumo(this.consumo) + aplicarProcedencia(this.procedencia);
		//console.log(precioBase);
  		return precioBase;
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
	var precioProcedencia = 0;
	precioProcedencia = (procedencia == "nacional")? 250000:350000;
	return precioProcedencia;
}

module.exports = Electrodomestico;

	/*aplicarConsumo: function(){
		var precioConsumo = 0;
		if (this.consumo == "A") {
			precioConsumo = 450000;
		}else if(this.consumo == "B"){
			precioConsumo = 350000;
		}else if(this.consumo == "C"){
			precioConsumo = 250000;
		}
		//console.log(precioConsumo)
		return precioConsumo;
	},
	aplicarProcedencia: function(){
		var precioProcedencia = 0;
		precioProcedencia = (this.procedencia == "nacional")? 250000:350000;
		//console.log(precioProcedencia);
	}*/