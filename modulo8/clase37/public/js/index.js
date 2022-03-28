console.log('esta likneado')

let main = document.querySelector ('main');
let h2 = document.querySelector ('h2');
let a = document.querySelector ('a');
let parrafos = document.querySelectorAll ('p');

const nombre = prompt('cual es tu nombre?');

if (nombre){
    h2.innerHTML += nombre
}else{
    h2.innerText += 'invitado'
}

h2.style.textTransform.toUpperCase;
a.style.color= '#E5183E';
const cambiarFondo = confirm('Cambio fondo?')

if (cambiarFondo){
    document.querySelector('body').classList.add('fondo')
}

for (let i = 0; i < parrafos.length; i++) {
    if(i%2 == 0){
        parrafos[i].classList.add('destacadoPar')
    }else{
        parrafos[i].classList.add('destacadoImpar')
    }
    
}
main.style.display ='block'