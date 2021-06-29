const {DataTypes} = require('sequelize');
const db = require('../db')

const BookModel = db.define('book',{
    title: {
        type:DataTypes.STRING,
        allowNull:false
    }, 
    genre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    author:{
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