let fecha = new Date()
console.log (fecha.toDateString())

//para saber que dia del mes es   .getDate()
let fecha2 = fecha.getDate()
console.log (fecha2)

//para saber que dia de la semana es   .getDay()... tener en cuenta que domingo es 0
let fecha3= fecha.getDay()
console.log (fecha3)

// para saber mes,  .getMonth() tambien empieza en cero
let fecha4 = fecha.getMonth()
console.log (fecha4)

let fecha5 = fecha.getFullYear()

console.log ('Hoy es el '+fecha2+' del mes '+(fecha4+1)+' del año '+fecha5)

// si le paso parametros, toma esa fecha como referencia de todo
let cumple = new Date (1975, 3, 27)
console.log (cumple.getDate())
console.log (cumple.getDay())
console.log (cumple.getFullYear())

