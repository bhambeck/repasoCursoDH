let texto = 'Este curso es muy difícil';
function reemplazoFastFast (texto,palabra1,palabra2){
    return texto.replace (palabra1,palabra2)
}
console.log (reemplazoFastFast (texto,'difícil','bueno'));


//si se menciona una palabra
let textoNuevo = "Yo me llamo Bea"
let menciona = function (texto, palabra){
    return (texto.indexOf(palabra)!=-1)
}
console.log (menciona(textoNuevo, 'Bea'));


