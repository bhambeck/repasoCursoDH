
module.exports= (sequelize, DataTypes)=>{
    let cols ={
        id:{
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING
        }, 
        rating:{
            type: DataTypes.DECIMAL 
        }, 
        awards:{
            type: DataTypes.INTEGER
        }, 
        release_date:{
            type: DataTypes.DATE
        }, 
        length:{
            type: DataTypes.INTEGER
        }, 
        genre_id:{
            type: DataTypes.INTEGER
        }, 
        created_at:{
            type: DataTypes.DATE
        }, 
        updated_at:{
            type: DataTypes.DATE
        }

    }
    let config ={
        tableName: "movies", 
        timestamps:false
    };

const Pelicula = sequelize.define ("Pelicula", cols, config);
return Pelicula;
}