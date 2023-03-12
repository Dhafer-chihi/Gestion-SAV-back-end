const {sequelize ,  DataTypes } = require("sequelize");

module.exports = (sequelize , DataTypes)=>{
  return  sequelize.define('Article' , {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true , 
            autoIncrement : true 
        },
        reference : {
            type : DataTypes.STRING , 
            allowNull : false
        },
        nom : {
            type : DataTypes.STRING , 
            allowNull : false
        },
        description : {
            type : DataTypes.STRING , 
            allowNull : true
        }
    })
}