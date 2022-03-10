
let c1 = prompt("introduce la calificacion de Topicos",0);
let c2 = prompt("introduce la calificacion de desarrollo front",0);
let c3 = prompt("introduce la calificacion de programacion",0);
let c4 = prompt("introduce la calificacion de sistemas",0);
let ca1 = parseInt(c1);
let ca2 = parseInt(c2);
let ca3 = parseInt(c3);
let ca4 = parseInt(c4);
let suma = ca1 + ca2+ ca3 +ca4;
console.log(suma);
let promedio = suma/4;
console.log(promedio);

if (promedio >= 70 ){
    console.log("Estas aprobado");
} else {
    console.log("Estas reprobado")
}

    

