function loro (texto){
    for (i=0; i<5; i++){
        console.log (texto)
    }
}
loro('Bea')

function contarImpares (num){
    let cuenta=0
    for(i=0; i<=num; i++){
        if (i%2!=0){
           cuenta = cuenta+1
        }
    }
    return cuenta
}
console.log (contarImpares(2));