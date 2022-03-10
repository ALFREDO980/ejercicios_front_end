
let numero1 = prompt("ingresa un numero")
let entero = parseInt(numero1)
let  modulo = entero % 10
if (modulo == 0) {   
    console.log("el digito es un modulo de 10")
}else{
    console.log("el digito no es un modulo de 10")
}