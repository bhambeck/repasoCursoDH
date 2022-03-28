const h1 = document.querySelector('h1.moviesAddTitulo');
const section = document.getElementById('formulario');
const article = document.querySelector('article');

h1.innerHTML +="AGREGAR PELICULAS";
h1.classList.add('titulo');
article.classList.add('fondoTransparente')
section.classList.add('fondoCRUD')

console.log(h1)