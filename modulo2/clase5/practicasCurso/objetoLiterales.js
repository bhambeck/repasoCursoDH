let tenista = {
    nombre: 'Roger', 
    apellido:'Federer', 
    saludo: function(){
        return ('Hola, soy '+ this.nombre)
    }
}
console.log (tenista.saludo());

let deportista = {
    nombre:'Beatriz',
    energia: 200,
    experiencia:4, 
    entrenarHoras: function(hs){
        this.energia = this.energia-(hs*5)
        this.experiencia =this.experiencia+(hs*2)
    }
}

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);