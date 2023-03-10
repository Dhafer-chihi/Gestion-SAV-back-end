const { DataTypes } = require("sequelize");

module.exports = (sequelize , DataTypes)=>{
    return sequelize.define('User' , {
        id : {
            type : DataTypes.INTEGER , 
            primaryKey : true , 
            autoIncrement : true
        },
        username : {
            type : DataTypes.STRING,
            unique : {
                msg : 'Le username est deja pris.'
            },
            allowNull :false
        } , 
        password : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })
}