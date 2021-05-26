class InvElectrodomestico{
    constructor(cantidad, electro){
        this.cantidad = cantidad;
        this.electro = electro;
    }

    get getCantidad(){
        return this.cantidad;
    }

    get getElectro(){
        return this.electro;
    }

    set setCantidad(cantidad){
        this.cantidad = cantidad;
    }

    set setElectro(electro){
        this.electro = electro;
    }

}

module.exports = InvElectrodomestico;