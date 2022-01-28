//se expresan mediante una variable, porque si no, no llevaria nombre:
// (a,b) => a +b
// let suma = (a,b) => a +b

//si es un solo parametro no lleva parentesis
//si es una sola condicion no lleva llaves

let laMitad = numero => numero/2;
console.log (laMitad(8));
 
//con más de un parámetro van paréntesis
let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log (dividir(20,4))

//con más de una línea de código, lleva llaves y la palabra return

let trabajar = dia =>{
    if (dia == 'Sabado' || dia == 'Domingo'){
        return 'no trabajes'
    }
    else{
        return 'a trabajar'
    }
}
console.log (trabajar('Lunes'))

