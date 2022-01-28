let notas = [2,6,3,8,10,5]
let notas100 = notas.map(function(numero){
    return numero *10
})
console.log (notas100);

let notasAprobadas = notas.filter (function(numero){
    return numero>=7
})
console.log (notasAprobadas);

//reduce lleva 2 parametros, el acumulador y el numero
//si no se aclara el acumulador tiene valor de inicio =0
let sumaNotas = notas.reduce (function(estado,numero){
    return estado + numero
})
console.log (sumaNotas)

//foreach lleva 2 parametros: valor e indice. El valor es cada valor que 
//esta en el array y el índice es el lugar que ocupa en el array

let lugar = notas.forEach(function(valor, indice){
    console.log ('En el lugar '+(indice+1)+' se encuentra el valor '+valor)
})
