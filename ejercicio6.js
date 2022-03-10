
    let a=prompt("Ingresa 1° Nummero");
    let r;
    if(a < 100){
    r=parseInt(a)%2;
    
    if(r==0){
        for(let i=a; -1<i; i=i-2){
        console.log(i);
        }
    }else{
        for(let i=a-1; -1<i; i=i-2){
        console.log(i);
        }
    }
    
    }else{
    alert("fin");
    }