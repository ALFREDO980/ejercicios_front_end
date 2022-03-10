
let precio,precioReal
let marca1 = prompt("ingresa la marca de la moto,")
let marca = marca1.toLocaleLowerCase()
switch (marca) {
    case 'yamaha':
        precio = prompt("ingresa el valor de la moto")
        precioReal = precio - (precio*.08)
        console.log('El precio ha pagar con descuento del 8% es : '+precioReal+ " pesos");
            break;
    case 'suzuki':
        precio = prompt("ingresa el valor de la moto")
        precioReal = precio - (precio*.10)
        console.log('El precio ha pagar con descuento del 10% es : '+precioReal+ " pesos");
            break;
    case 'honda':
        precio = prompt("ingresa el valor de la moto")
        precioReal = precio - (precio*.05)
        console.log('El precio ha pagar con descuento del 5% es : '+precioReal+ " pesos");
            break;
    default:
        precio = prompt("ingresa el valor de la moto")
        precioReal = precio - (precio*.02)
        console.log('El precio ha pagar con descuento es $'+precioReal);
    }