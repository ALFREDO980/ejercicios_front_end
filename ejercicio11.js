let año = parseInt(prompt("ingresa el año"))
function diasEnUnMes(mes, año) {
    return new Date(año, mes, 0).getDate();
}
    diasEnUnMes(4,año)
    if (diasEnUnMes(4,año) == 28) {
        console.log("no es bisisesto") 
    }else{
        console.log("si es bisisesto")
    }