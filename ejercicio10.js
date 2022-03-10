let a = prompt("Ingresar una potencia para el numero 2");
a=parseInt(a);

// console.log(Math.abs(-10));
    if(0<a){
        let r=2**a;
            alert("La potencia de 2 elevado a "+ a+" es: "+r);
    }else if(0==a){
            alert("La potencia de 2 elevado a "+ a+" es: 1");
    }else if(0>a){
        let r=1/2**Math.abs(a);
        alert("La potencia de 2 elevado a "+ a+" es: "+r);
    }