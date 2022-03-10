let numeroMes = parseInt(prompt("ingresa un numero entre el 1 y el 12"))

if (numeroMes<=12) {
    function diasEnUnMes(mes, año) {
        return new Date(año, mes, 0).getDate();
    }
    console.log(diasEnUnMes(numeroMes,2022)) 
}else{
    console.log("error")
}