const Electrodomestico = require('./models/electro.js');
const Nevera = require('./models/nevera.js');
const Televisor = require('./models/televisor.js');

function facturacion(){
    
    var datos = [];
    console.log("Bienvenido a la facturazion!!")
    const tele1 = new Televisor("B", "internac");
    const neve1 = new Nevera("C", "internac");
    const neve2 = new Nevera("C", "internac");
    const elect1 = new Electrodomestico("B", "nacional");
    const elect2 = new Electrodomestico("B", "nacional");
    const elect3 = new Electrodomestico("B", "nacional");
    const elect4 = new Electrodomestico("B", "nacional");
    const elect5 = new Electrodomestico("B", "nacional");

    var valorTotal = 0;
    var i = 1;

    datos.push(tele1);
    datos.push(neve1);
    datos.push(neve2);
    datos.push(elect1);
    datos.push(elect2);
    datos.push(elect3);
    datos.push(elect4);
    datos.push(elect5);
    console.log(datos[1].tipo)
    console.log(datos.length)

    console.log("Electro   tipo_consumo    procedencia    total")
    datos.forEach(element => {
        console.log(i + ". " + element.tipo + "     " + element.consumo + "    " + element.procedencia + "   " + element.getPrecioTotal())
        valorTotal += element.getPrecioTotal();
        i++;
    });

    console.log("El valor total es: " + valorTotal)

}

module.exports = facturacion;