let nombre = 'Beatriz'
console.log (nombre[2]);

// .length() devuelve el largo del string, o del array
console.log (nombre.length);

// .indexOf() devuelve la 1er ubicación del carater o string buscado
console.log (nombre.indexOf('t'));

// .slice() corta parte del string, el primer parámetro es desde donde
let frase = "Hola que tal?"
console.log(frase.slice(5,9));
console.log(frase.slice(9));

let frase2 = 'Hola!, soy Carli';
console.log(frase2.slice(-5)); //corta desde el final, 5 para atrás

// .trim() elimina espacios al principio y al final, no elimina los del medio
let fraseConEspacios = " HOLA HOLA  como andan todos   "
console.log (fraseConEspacios.trim());

// .split divide un string en partes de acuerdo al parámetro pasado, que será lo que divide
console.log (fraseConEspacios.split(' '));

// .replace() recibe 2 parametros y cambia lo que se escribe en el primero por el segundo

console.log (nombre.replace('B', 'V'))

