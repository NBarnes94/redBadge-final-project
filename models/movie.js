const {DataTypes} = require('sequelize');
const db = require("../db");

const MovieModel = db.define("movie",{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    }, 
    genre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    studio:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    runTime:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rating:{
        type:DataTypes.STRING,
    },
    personalComment:{
        type:DataTypes.STRING,
    }
})

module.exports = MovieModel;