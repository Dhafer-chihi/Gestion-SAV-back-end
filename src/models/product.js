const { DataTypes } = require("sequelize");

module.exports = (sequelize , DataTypes) =>{
    return sequelize.define('Product' , {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true ,
            autoIncrement : true  
        },
        nom : {
            type : DataTypes.STRING , 
            allowNull : false
        },
        sn : {
            type : DataTypes.STRING,
            allowNull : false

        },
        categorie : {
            type : DataTypes.STRING ,
            allowNull : false
        },
        accessoire : {
            type : DataTypes.STRING ,
            allowNull : false
        },
        diagnostic_client : {
            type : DataTypes.TEXT ,
            allowNull : false
        },
        diagnostic_tech : {
            type : DataTypes.TEXT ,
            allowNull : false
        }
    },
    {
        timestamps : true
    }
    )
} 