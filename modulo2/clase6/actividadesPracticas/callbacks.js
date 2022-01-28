let sumar = (a,b)=> a+b
let restar = (a,b)=> a-b
let multiplicar = (a,b)=> a*b
let dividir = (a,b)=> a/b

//ahora defino una nueva funcion que tiene como parametro cualquiera de las de arriba
let operacion =(a,b,operacion) => operacion(a,b)
console.log (operacion(10,5,sumar))


//Ejercicio
let doble = num => num*2
let triple = num => num*3

let aplicarCallback = (num, callback)=> callback(num)

console.log (aplicarCallback (2, doble))
console.log (aplicarCallback(3, triple))


let urlFuncion = (url)=> "http://" + url
console.log (urlFuncion ('www.google.com'))

let funcionArray = (array, callback)=>{
    let arrayFinal =[];
    for (let i = 0; i < array.length; i++) {
        arrayFinal[i]= callback(array[i])
    }
    return arrayFinal
}
console.log (funcionArray(['www.yahoo.com', 'www.gmail.com'], urlFuncion))