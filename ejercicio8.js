
let hora = prompt("Ingresa las horas trabajadas");

if (hora <=20 ){
    sueldo = 12*hora;
    console.log("Tu tarifa de sueldo se paga de 12 dllrs x hora, trabajaste " + hora + 
        " hrs Tu sueldo es: "+ sueldo + " dllrs" );
}else if(hora <= 29){
    sueldo = 15*hora;
    console.log("Tu tarifa de sueldo se paga de 15 dllrs x hora, trabajaste " + hora + 
        " hrs Tu sueldo es: "+ sueldo + " dllrs" );
}else if(hora>=30){
    sueldo = 25*hora;
    console.log("Tu tarifa de sueldo se paga de 25 dllrs x hora, trabajaste " + hora + 
        " hrs Tu sueldo es: "+ sueldo + " dllrs" );
}