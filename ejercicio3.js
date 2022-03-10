
let caracter = prompt("ingresa una letra")
let contador = caracter.length
if (contador >= 2) {  
    console.log("ingresaste mas de una letra")
}else if (caracter == caracter.toUpperCase()) {
    console.log("la letra esta en mayuscula")
}else{
    console.log("la letra esta en minuscula")
}