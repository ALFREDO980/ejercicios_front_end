let numeroDeCara = parseInt(prompt("ingresa el numero de la cara del dado"))
switch (numeroDeCara) {
    case 1 :
        console.log("el lado opuesto es uno")
            break;
    case 6 :
        console.log("el lado opuesto es seis")
            break;  
    case 2 :
        console.log("el lado opuesto es sinco")
            break;
    case 5 :
        console.log("el lado opuesto es dos")
            break;
    case 3 :
        console.log("el lado opuesto es cuatro")
        break;
    case 4 :
        console.log("el lado opuesto es tres")
        break;
    default:
        console.log("ERROR , ERROR numero incorrecto");
}