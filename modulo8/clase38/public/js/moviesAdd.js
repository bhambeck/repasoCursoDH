window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

titulo.addEventListener('mouseover', function(){
    this.style.color ='blue'
})
//cuando usamos el this, en este caso estoy refiriendo a titulo, pero solo
//sirve cuando estamos en funciones comunes, NO para arrow functions

//ESTADO SECRETO
let estadoSecreto = 0
document.querySelector('#titulo').addEventListener('keypress', function(e){
switch(estadoSecreto){
case 0:
    e.key === 's' ? estadoSecreto++ : estadoSecreto=0
    break;
case 1:
     e.key === 'e' ? estadoSecreto++ : estadoSecreto=0
    break;
case 2:
    e.key === 'c' ? estadoSecreto++ : estadoSecreto=0
    break;
case 3:
    e.key === 'r' ? estadoSecreto++ : estadoSecreto=0
    break;
case 4:
    e.key === 'e' ? estadoSecreto++ : estadoSecreto=0
    break;
case 5:
    e.key === 't' ? estadoSecreto++ : estadoSecreto=0
    break;
case 6:
  if(e.key ==='o'){
      alert('SECRETO MAGICO');
      estadoSecreto =0;
  }else{
      estadoSecreto =0;
  }
}
})

}