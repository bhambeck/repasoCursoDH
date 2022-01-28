//requiero el mudulo express
const express = require('express');

//guardo la funcion express en una variable para poder usarla
const app = express()

const path =require('path')

//una de las propiedades de app es listen que levanta un puerto:
app.listen(3003, ()=>console.log('Servidor corriendoen puerto 3003'))

//primera ruta, la ruta raiz
app.get('/', function(req,res){
res.send("Pagina de Bea")
})
// para poner en una ruta un archivo html, requiero arriba el modulo path y le paso la ruta
// a res.sendFile
app.get('/home', (req, res)=>{
    let htmlPath = path.resolve(__dirname, './views/index.html')
    res.sendFile(htmlPath)
})
//se puede usar tambien path.join en lugar de path.resolve. Es lo mismo.