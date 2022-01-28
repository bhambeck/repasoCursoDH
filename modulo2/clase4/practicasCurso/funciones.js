function ejemplo(){
    return "hola, soy una función declarada"
};

console.log (ejemplo());

let ejemplo2 = function(){
   return  "hola, soy una función expresada"
}

console.log (ejemplo2())

function esPar (numero){
    return (numero%2==0)
}
console.log(esPar(2))
console.log(esPar(15))

function anterior (n){
    return (n-1)
}
function triple(n){
    return (n*3)
}
function anteriorTriple(n){
    return anterior (triple(n))
}
console.log (anteriorTriple(6))