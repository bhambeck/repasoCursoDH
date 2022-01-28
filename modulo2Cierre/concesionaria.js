let autos = require ('./autos')

let persona1 ={
nombre: 'Juan',
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

let concesionaria ={
    autos:autos,

    buscarAuto: function(patente){
    for (let i=0;i<this.autos.length; i++){
       if (this.autos[i].patente == patente) {
           return this.autos[i]
       }
       return null
    }; 
    },
//console.log(buscarAuto('APL123'));

    venderAuto:function (patente){
    let autoEncontrado = buscarAuto(patente);
    if (autoEncontrado){
        autoEncontrado.vendido = true
    }
    },

    autosParaLaVenta: function(){
    let lista = this.autos.filter(auto => {
      return auto.vendido!=true
    })
    return lista},

    autosNuevos: function(){
        let autosNuevos = this.autosParaLaVenta()
        let autosVentaFiltrados = autosNuevos.filter(auto =>
            {
                return auto.km <= 100
            })
            return autosVentaFiltrados
    },
    listaDeventas: function(){
        let autosVendidos = this.autos.filter(function(auto){
            return auto.vendido == true
        })
        let arrayDePrecios = autosVendidos.map(function (auto){
            return auto.precio
        })
        return arrayDePrecios
    }, 
    totalDeVentas: function(){
        let ventas = this.listaDeventas()
        if (ventas.length<1) {
            return 0
        } 
        else{
       let totalVentas= ventas.reduce(function (acum, num){
            return acum + num
        })
        return totalVentas
        }
    } , 
    puedecomprar:function (auto, persona){
        let costoTotal = persona.capacidadDePagoTotal
        let pagoCuotas = persona.capacidadDePagoEnCuotas
        if (costoTotal>=auto.precio && pagoCuotas>=(auto.precio)/auto.cuotas){
            return true
        }
        else return false

    }, 
    autosQuePuedeComprar: function (persona){
        let autosVenta= this.autosParaLaVenta()
        let puedeComprar = autosVenta.filter(auto=>
            this.puedecomprar(auto,persona))
            return puedeComprar
    }
}
//console.log(concesionaria.autosParaLaVenta())
//console.log (concesionaria.autosNuevos()
//console.log (concesionaria.puedecomprar(concesionaria.autos[0], persona1))
//console.log (concesionaria.autos)
//console.log(persona1);
console.log (concesionaria.autosQuePuedeComprar(persona1))
