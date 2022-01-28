// .parse()

let datosJson = '{"club": "Independiente", "barrio":"Avellaneda"}';
let datosObjetoLiteral = JSON.parse(datosJson);
console.log (datosObjetoLiteral);

//.stringify()

let datosJsonAgain = JSON.stringify (datosObjetoLiteral);
console.log (datosJsonAgain);
