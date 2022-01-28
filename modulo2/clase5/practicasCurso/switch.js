
function diaClases (dia){
    switch (dia){
        case'Lunes':
        case 'Miercoles':
        case 'Viernes':
            console.log ('Tengo Clases');
            break
        default:
            console.log ('No tengo clases')
    }

}
diaClases('Sabado');