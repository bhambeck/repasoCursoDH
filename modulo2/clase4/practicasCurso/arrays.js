let series = ['Friends', 'Sopranos','Breaking Bad','Mad men', 'Stranger Things']

//.push()
let laNueva = series.push ('Madre solo hay 2')
console.log (laNueva)
console.log (series)

//.pop()
let sacando= series.pop()
console.log (series)
console.log (sacando)

//.shift()
let primera = series.shift()
console.log (series)
console.log (primera)

//.unshift()
let agregoAntes = series.unshift('Bridgerton','The Crown')
console.log (series)
console.log (agregoAntes)

//.join()
let separadoComa = series.join()
console.log (separadoComa)

let separadoGuion = series.join(' - ')
console.log (separadoGuion)

//.indexOf() Devuelve el primer indice que encuentra
//.lastIndexOf() Devuelve el primer indica que encuentra de atras para adelante.
//.includes() Devuelve true o false si lo encuentra o no.

let encuentro = series.indexOf('The Crown')
let noEncuentro = series.indexOf ('Beverly Hills 90210')
console.log (encuentro)
console.log (noEncuentro)

let incluye = series.includes('Mad men')
console.log (incluye)



