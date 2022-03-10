let pagarAutobus,cobroAlumnos
let alumnos = prompt("Ingresa el numero de alumnos que asistiran");
if(alumnos>=100){
    pagarAutobus = 65*alumnos
    console.log("pagaras € "+pagarAutobus+" por la compañia de autobuses");
}else if(alumnos>=50){
    pagarAutobus = 70*alumnos
    console.log("pagaras € "+pagarAutobus+" por la compañia de autobuses");
}else if(alumnos>=30){
    pagarAutobus = 95*alumnos
    console.log("pagaras € "+pagarAutobus+" por la compañia de autobuses");
}else{
    cobroAlumnos = 4000/alumnos
    console.log("se tendra que cobrar €"+cobroAlumnos.toFixed(2)+" por alumno");
}