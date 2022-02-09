const express =require ('express');
const app = express();
const rutas =require ('./routes/main')
const path = require ('path')

const publicPath = path.resolve(__dirname, ('./public'));
app.use (express.static(publicPath))

app.listen (3006, ()=>{
    console.log ('Servidor funcionando en el puerto 3006');
})
app.use ('/', rutas)
