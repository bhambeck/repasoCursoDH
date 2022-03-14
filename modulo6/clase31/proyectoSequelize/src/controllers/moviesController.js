const db = require ('../database/models');
const {Pelicula}= require ('../database/models');//trae lo mismo que arriba pero solo el modelo que necesito en este controlador


const moviesController={
    list:(req, res)=>{
        db.Pelicula.findAll()
        .then(data =>{
            res.render('moviesList', {movies:data})
        })
    }, 
    detail:(req, res)=>{
        db.Pelicula.findByPk(req.params.id)
        .then (data=>{
            res.render('moviesDetail',{movie:data} )
        })

    }, 
    new: (req, res) => {
        db.Pelicula.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    recomended: (req, res) => {
        db.Pelicula.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
        }, 
     add:(req,res)=>{
            res.render('moviesAdd')
        }, 
        create:(req,res)=>{
            db.Pelicula.create({
                //puedo hacer uno por uno:
               title:req.body.title,
                rating:req.body.rating,
                length:req.body.length,
                awards:req.body.awards,
                release_date:req.body.release_date
            })
            .then(()=>{
                res.redirect('/movies')
            })
        }, 
        edit:(req,res)=>{
            let id =req.params.id;
            db.Pelicula.findByPk(id)

            .then(peliEditar=>{
              res.render('moviesEdit', {Movie:peliEditar})  
            })
            
        }, 
        update:(req,res)=>{
            db.Pelicula.update({
                title:req.body.title,
                rating:req.body.rating,
                length:req.body.length,
                awards:req.body.awards,
                release_date:req.body.release_date
            },
            {
                where:{id:req.params.id}
            })
            .then(()=>{
                res.redirect('/movies/detail/'+req.params.id)
            })
        }, 
        destroy:(req,res)=>{
            db.Pelicula.destroy({
                where:{id:req.params.id}
            })
            .then(()=>{
                res.redirect('/movies/')
            })
        }
}
module.exports = moviesController